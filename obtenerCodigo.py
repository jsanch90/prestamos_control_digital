import serial
import time
import sys

ser = serial.Serial("/dev/ttyACM0", 9600)
time.sleep(1.8)

while True:
    try:
        codigo = ser.readline()
        codigo = codigo.replace("\r\n" , '')
        print len(codigo)
        print type(codigo)
        print codigo 
    except:
        ser.close()
        sys.exit(1)

ser.close()
        
        
