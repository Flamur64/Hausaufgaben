def test (name, age):
    if age > 30 and name.startswith("A"):
        return True
    else:
        return False
    
names = ["Bartek", "Lukas", "Abi", "Anna", "Pablo", "Mathias", "Andreas", "Enrico", "Levent", "Muhammed"]

age = 32

for name in names:
    print(name)
    print(test(name, age))
