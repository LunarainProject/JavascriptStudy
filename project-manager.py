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
            i+=1
            jsfile = open(join(elem, (lines[i])[2:-1]), 'wt', encoding='utf8')
            continue
        if '```' in lines[i] and '```javascript' not in lines[i]:
            codefence = False
            jsfile.close()
            continue
    
        if codefence:
            jsfile.write(lines[i])
