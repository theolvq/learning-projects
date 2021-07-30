# Practicing test writing with jest
Write test for the following functions: 


1. ```capitalize(string) ``` takes a string and returns that string with the first character capitalized.

2. ```reverseString(string)``` takes a string and returns it reversed.

3. A ```calculator``` object that contains the basic operations: ```add```, ```subtract```, ```divide```, and ```multiply```.

4. Caesar Cipher. [Read about it on this website](URL 'http://practicalcryptography.com/ciphers/caesar-cipher/')

    Don’t forget to test wrapping from ```z``` to ```a```.
    Don’t forget to test keeping the same case.
    Don’t forget to test punctuation!
    For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final ```caesar()``` function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

5. Array Analysis. Write a function that takes an array of numbers and returns an object with the following properties: ```average```, ```min```, ```max```, and ```length```.