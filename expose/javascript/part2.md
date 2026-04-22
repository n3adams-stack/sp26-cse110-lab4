### Part 2
1. Line 12 will print 3. This is because i is defined as a var, so it has function scope. It is set to 3 right before the loop terminates, so it will also be printed as 3.
2. Line 13 will print 150. var gives discounted price function scope, and the final iteration of the loop it is set to 300 * 0.5=150. So, it is also printed after the loop finishes.
3. Line 14 will print 150. finalPrice was already defined at the start of the function, it will end up being the same as discountedPrice since it is a nice round number that rounding won't change it\
4. This function will return [50,100,150]. discounted is declared in the function scope with var, and the loop will push the original set of prices [100,200,300] into discounted after multiplying them by 0.5, then return that array.
5. Line 12 will throw a reference undefined error, since i is defined with let, it ceases to be a valid reference once the loop ends. Since the console.log call is outsite the loop, the reference is undefined
6. Line 13 will throw a reference undefined error, since discountedPrice is defined with let inside a loop. It does not have scope outside loop, so the consoel.log call to discountedPrice is outside the scope where it is defined
7. Line 14 will print 150. Since finalPrice is defined with let at the start of the function (not in any nested blocks), it has scope for the whole function. Then, console.log will print what the final discounted value of the prices array, in this case 150
8. This function will return [50,100,150]. Since discounted is declared at the start with let, it has scope for the whole function including to the return value. Any changes to discounted inside the loop will persist and so it returns [50,100,150]
9. Line 11 will throw a reference undefined error, since i is defined with let, it ceases to be a valid reference once the loop ends. Since the console.log call is outsite the loop, the reference is undefined (same this as question 5)
10. Line 12 will print 3. Since length is never modified after it is set to prices.length (3), and defined within the whole function scope, it is safe to print it.
11. The function will throw an error. Since we assign const to discountedPrice during the first iteration, we can't reassign the value during the second or third. This is illegal and so it causes an error
    ## Data Types
12.
a. student.name
b. student['Grad Year']
c. student.greeting()
d. student['Favorite Teacher'].name
e. student.courseLoad[0]

13.
a. '32'. Converts 2 to a string and appends it to 3.
b. 1. Converts 3 to a number and subtracts 2.
c. 3. Converts null to 0 and adds it to 3
d. 3null. Converts null t a string and appends it to 3
e. 4. Converts true to 1
f. 0. Converts both false and null to 0, then adds them
g. '3undefined'. Converts undefined to a string, then appends it.
h. NaN. Undefined becomes NaN, which can't be subtracted from 3 so the whole expression is NaN

14.
a. true. Converts 2 to a number, and 2 > 1
b. false. Both are strings, and they are not the same
c. true. Converts '2' to a number and they are equal
d. false. They are different types, so === is false 
e. false. true == 1 when converted to a number so 1 != 2
g. true. Converts 2 to a boolean (true) and true === true

15. The == operator allows type coercion, so if two elements are different types, javascript will attempt to convert one to the same type as the other and then check equality. The === operator does not allow this, so if two objects are of different types, it will return false instead of type conversion.
16. See part2-question16.js
17. The result is [2,4,6]. We get this by using callback as a variable to reference the doSomething function. When it's passed to modfiyArray, it is called for each element using that element as the input parameter, and pushes the result (double that element) to the array that will be returned.
18. See part2-question18.js
19. The output of the code is:
1
3
4
2

Since javascript is asynchronous, the following instructions won't wait for the 1 second delay of Line 3.