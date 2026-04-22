### Part 1
1. Line 9 prints "values added: 20".
2. Line 13 prints "final result: 20"
3. You shouldn't use var because it can lead to undefined references. By allowing other parts of the function to reference potentially unset variables, it can lead to errors, undefined behavior, and making variables more annoying to nam
4. Line 9 prints "values added: 20".
5. Line 13 returns "ReferenceError: result is not defined". This is because let only gives result scope within the if block. Since the console.log is called outside that block, result is no longer defined
6. Line 9 prints "values added: 0".
7. Line 13 returns "ReferenceError: result is not defined". Since const has the same scope rules as let, result is not defined when the console.log on line 13 is called
