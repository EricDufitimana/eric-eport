from zipfile import ZipFile, ZIP_DEFLATED
from xml.etree import ElementTree as ET
from pathlib import Path

source = Path(r'C:\Users\ASYV\Downloads\Eric Dufitimana Resume.docx')
destination = Path('public/documents/eric-dufitimana-resume.docx')
destination.parent.mkdir(parents=True, exist_ok=True)
ns = {'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
with ZipFile(source) as archive:
    root = ET.fromstring(archive.read('word/document.xml'))
    paragraphs = root.findall('.//w:body/w:p', ns)
    def text(p): return ''.join(t.text or '' for t in p.findall('.//w:t', ns))
    index = next(i for i,p in enumerate(paragraphs) if 'Jackal Tech' in text(p))
    replacements = [
        ['ASYV Debate Club', 'Rwamagana, Rwanda'],
        ['Secretary (Grade 10); Vice President (Grade 11)', 'Grades 10–11'],
        ['Ran 20-minute daily sessions on rebuttals and thinking on the spot, helping coordinate speaking practice for 50+ members.'],
        ['Mentored first-year students who reached the semifinals of a national debate competition.'],
    ]
    for p, values in zip(paragraphs[index:index+4], replacements):
        nodes=p.findall('.//w:t', ns)
        # Preserve original runs, paragraph properties, tabs, bullets and type.
        if len(values)==2:
            nodes[0].text=values[0]
            for node in nodes[1:]: node.text=''
            nodes[-1].text=values[1]
        else:
            nodes[0].text=values[0]
            for node in nodes[1:]: node.text=''
    with ZipFile(destination,'w',ZIP_DEFLATED) as output:
        for item in archive.infolist():
            output.writestr(item, ET.tostring(root, encoding='utf-8', xml_declaration=True) if item.filename=='word/document.xml' else archive.read(item.filename))
print(destination.resolve())
