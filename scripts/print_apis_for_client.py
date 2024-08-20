#!/usr/bin/env python3
#
# Use this script to output the various API snippets needed in client.ts.
# TODO: Include this in rebuild.sh automatically.

import glob, os

apis = glob.glob(os.getcwd() + '/src/apis/*Api.ts')
apis.sort()
for i in range(len(apis)):
  apis[i] = os.path.splitext(os.path.basename(apis[i]))[0]

specialCases = {}

def memberName(api):
  if api in specialCases:
    return specialCases[api]
  else:
    return api[0].lower() + api[1:-3]

# import
for api in apis:
  print(f'{api},')

print('\n\n')

# class def
for api in apis:
  member = memberName(api)
  print(f'{member}: {api};')

print('\n\n')

# constructor
for api in apis:
  member = memberName(api)
  print(f'this.{member} = new {api}(this.config);')
