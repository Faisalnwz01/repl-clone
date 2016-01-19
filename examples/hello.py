def diff(first, second):
  intersection = [k for k in first if k in second]
  addition = [k for k in second if k not in first]
  deletion = [k for k in first if k not in second]

  return intersection, addition, deletion
    

first = {'Capco': 1, 'Data': 5}
second = {'Devs': 2, 'Capco': 3, 'Capco': 4}
    
result = diff(first, second)

_, added, removed = result

print 'diffed dicts'
print first, second

print 'added keys:'
print added

print 'removed keys:'
print removed