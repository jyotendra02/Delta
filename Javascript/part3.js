/*
Notes 
                                String Methods
1.trim()
 Strings are immutable : as methods doesn't change them
2.toLowerCase()
3.toUpperCase()
4.indexOf(char) first occurence of char , -1 default for not found
 method chaining :  left to right execution
5.slice(start,end) [)   slice(-n) = slice(length - n)
6.replace(old,new) only first occurence is replaced
7.repeat(count) repeat the string count times

                                Arrays
typeof arrays = "objects"
can be of mixed type 
arrays are mutable 
we can randomly assign values to the index the remaining spaces will be empty

                                Array Methods
1.Push() add to end
2.Pop() delete from end and return
3.Shift() delete from start and return
4.Unshift() add to start
5.indexOf()
6.includes() return bool
7.concat(): merge 2 arrays
8.reverse()
9.slice(start,end) copies a portion of array
10.splice(start,deleteCount,item0..itemN) : removes/replaces/add elements in place  it mutates the original array
11.sort() in arrays numbers are first converted into string and then sorting is performed

                                Array References
Reference means address in memory
name of array stores address of index 0 element in memory
thats why [1]==[1] or [1]===[1] both gives false as the stores different address value

                                Constant Arrays
a completely new array can not be copied into the old referenced variable

*/
