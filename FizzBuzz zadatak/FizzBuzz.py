j = 0
k = 0
l = 0

for i in range (1,101):
    if i % 15 == 0:
        print("FizzBuzz")
        j += i
    elif i % 3 == 0:
        print ("Fizz")
        k += i
    elif i % 5 == 0:
        print ("Buzz")
        l += i
    else:
        print (str(i))

print("Zbroj svih FizzBuzz brojeva: " + str(j) )
print("Zbroj svih Fizz brojeva: " + str(k))
print("Zbroj svih Buzz brojeva: " + str(l))
o = k + l
p = o - j
print("Konačno rezultat je: " + str(p) )