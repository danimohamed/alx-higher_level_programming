#!/usr/bin/python3
"""the class"""


class Square:
    """the enty of class"""

    __size = 0

    def __init__(self, size=0):
        """the init of class

        Args:
            size (int): the size of square
        """
        try:
            self.__size = size
        except TypeError:
            raise TypeError("size must be an integer")
        except ValueError:
            raise ValueError("size must be >= 0")

    def area(self):
        return self.__size * self.__size
