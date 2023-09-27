#!/usr/bin/python3
"""the class"""


class Square:
    """the entry of class"""

    def __init__(self, size=0):
        """init the class

        Args:
            size (int): the size of Square
        """
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size
