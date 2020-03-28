import sys
from subprocess import Popen, PIPE

AB = []  # store a and b
sensor = Popen(['node', 'incoming.js'], stdout=PIPE)
buffer = b''
while True:

    # read incoming data one char at a time
    out = incoming.stdout.read(1)

    # after a full reading..
    if out == b'\n':
        AB.append(float(buffer))
        print(AB)
        buffer = b''
    else:
        buffer += out  # append to buffer