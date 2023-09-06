#!/usr/bin/python3
# Author - Tolulope Fakunle

def print_comb2(n):
    for i in range(10):
        for j in range(i + 1, 10):
            print(f"{i}{j}, ", end="")
    print()


print_comb2(10)
