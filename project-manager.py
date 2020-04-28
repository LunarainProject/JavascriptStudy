from os import listdir, rename
from os.path import isfile, join

path = './'
folders = [f for f in listdir(path) if not isfile(join(path, f))]

# print(folders)

for elem in folders:
    if elem == '.git':
        continue
    # read folder
    try:
        readme = open(join(elem, path, 'readme.md'), 'rt', encoding='utf8')
    except:
        continue

    lines = readme.readlines()

    """language name, comment starting sign, comment ending sign"""
    lang_name_comment = [
        ('javascript', '//', ''), 
        ('html', '<!--', '-->'),
        ('css', '//', '')
        ]

    codefence = False
    codefile = None
    for i in range(len(lines)):
        if codefence:
            if '```' in lines[i]:
                codefence = False
                codefile.close()
                continue
                
            codefile.write(lines[i])
        else:
            for lnc_elem in lang_name_comment:
                name = lnc_elem[0]
                if '```'+name in lines[i]:
                    codefence = True
                    filename = join(elem, (lines[i+1])[len(lnc_elem[1]):(-len(lnc_elem[2])-1)])
                    print('Parsing : ', filename)
                    codefile = open(filename, 'wt', encoding='utf8')
                    break

        
            
