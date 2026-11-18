from zipfile import ZipFile, ZIP_DEFLATED
from xml.etree import ElementTree as ET
from pathlib import Path
from copy import deepcopy
import json

path = Path('public/documents/eric-dufitimana-resume.docx')
honors = json.loads(Path('.preview/resume-awards.json').read_text(encoding='utf-8'))
uri = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
ns = {'w': uri}
def tag(name): return f'{{{uri}}}{name}'
with ZipFile(path) as source:
    files = [(item, source.read(item.filename)) for item in source.infolist()]
root = ET.fromstring(next(data for item, data in files if item.filename == 'word/document.xml'))
body = root.find('w:body', ns)
for paragraph in body.findall('w:p', ns):
    nodes = paragraph.findall('.//w:t', ns)
    if ''.join(n.text or '' for n in nodes).strip().startswith(('Awards:', 'Selected awards:')):
        nodes[0].text = 'Awards: '
        for node in nodes[1:]: node.text = ''
        index = list(body).index(paragraph)
        # Awards are the final content in the supplied document.
        for following in list(body)[index+1:]:
            if following.tag == tag('p'): body.remove(following)
        run = ET.SubElement(paragraph, tag('r'))
        props = ET.SubElement(run, tag('rPr'))
        ET.SubElement(props, tag('rFonts'), {tag('ascii'): 'Times New Roman', tag('hAnsi'): 'Times New Roman'})
        ET.SubElement(props, tag('sz'), {tag('val'): '22'})
        ET.SubElement(run, tag('t')).text = ', '.join(h.get('resumeLabel') or h['title'] for h in honors) + '.'
        break
else:
    raise RuntimeError('Awards paragraph not found')
with ZipFile(path, 'w', ZIP_DEFLATED) as output:
    for item, data in files:
        output.writestr(item, ET.tostring(root, encoding='utf-8', xml_declaration=True) if item.filename == 'word/document.xml' else data)
print(f'Updated Word resume: {len(honors)} selected honors in a comma-separated paragraph.')
