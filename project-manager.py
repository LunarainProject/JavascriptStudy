from os import listdir, rename
from os.path import isfile, join

path = './'
folders = [f for f in listdir(path) if not isfile(join(path, f))]

print(folders)

for elem in folders:
    if elem == '.git':
        continue
    newname = elem.split(' ')[0]
    rename(join(path, elem), join(path, newname))