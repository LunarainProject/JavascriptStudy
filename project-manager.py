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

    codefence = False
    for i in range(len(lines)):
        if '```javascript' in lines[i]:
            codefence = True
            jsfile = open(join(elem, (lines[i+1])[2:-1]), 'wt', encoding='utf8')
            continue
    
        if codefence:
            if '```' in lines[i] and '```javascript' not in lines[i]:
                codefence = False
                jsfile.close()
                continue
            
            jsfile.write(lines[i])
        
            
