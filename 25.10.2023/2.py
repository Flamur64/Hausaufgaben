def rechteck(a, b):
    flaeche = a * b
    return flaeche

a = input("Seite A: ")
b = input("Seite B: ")
result = rechteck(a, b)
print("Der Flächeninhalt beträgt:", result)