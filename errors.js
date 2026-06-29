const errorDatabase = {

JavaScript: {

  typeerror: {
    title: "TypeError",
    meaning: "Occurs when a value is not of the expected type.",
    fix: "Check the variable type before using methods or operations.",
    example: `let num = 10;
num.toUpperCase();`
  },

  referenceerror: {
    title: "ReferenceError",
    meaning: "Occurs when a variable is used before declaration.",
    fix: "Declare the variable before using it.",
    example: `console.log(x);
let x = 5;`
  },

  syntaxerror: {
    title: "SyntaxError",
    meaning: "Occurs when JavaScript syntax is invalid.",
    fix: "Check brackets, quotes, and semicolons.",
    example: `if(true {
console.log("Hello");
}`
  },

  rangeerror: {
    title: "RangeError",
    meaning: "Occurs when a value is outside the allowed range.",
    fix: "Use valid numeric ranges.",
    example: `let arr = new Array(-1);`
  },

  urierror: {
    title: "URIError",
    meaning: "Occurs when URI functions are used incorrectly.",
    fix: "Check URI formatting.",
    example: `decodeURIComponent('%');`
  },

  evalerror: {
    title: "EvalError",
    meaning: "Occurs when eval() is used incorrectly.",
    fix: "Avoid unsafe eval usage.",
    example: `eval('foo bar');`
  },

  cannotreadproperty: {
    title: "Cannot Read Property",
    meaning: "Occurs when accessing properties of undefined or null.",
    fix: "Check whether the object exists.",
    example: `let obj;
console.log(obj.name);`
  },

  undefined: {
    title: "Undefined Error",
    meaning: "Occurs when a variable has no assigned value.",
    fix: "Initialize the variable before usage.",
    example: `let x;
console.log(x.length);`
  }

},

Python: {

  typeerror: {
    title: "TypeError",
    meaning: "Occurs when incompatible data types are used.",
    fix: "Use correct data types in operations.",
    example: `num = 5
num + 'hello'`
  },

  indexerror: {
    title: "IndexError",
    meaning: "Occurs when accessing an invalid list index.",
    fix: "Check the list size before accessing elements.",
    example: `arr = [1,2,3]
print(arr[5])`
  },

  keyerror: {
    title: "KeyError",
    meaning: "Occurs when accessing a missing dictionary key.",
    fix: "Check whether the key exists.",
    example: `data = {'a':1}
print(data['b'])`
  },

  valueerror: {
    title: "ValueError",
    meaning: "Occurs when a function receives an invalid value.",
    fix: "Pass valid input values.",
    example: `int('hello')`
  },

  zerodivisionerror: {
    title: "ZeroDivisionError",
    meaning: "Occurs when dividing by zero.",
    fix: "Ensure denominator is not zero.",
    example: `10/0`
  },

  nameerror: {
    title: "NameError",
    meaning: "Occurs when a variable is not defined.",
    fix: "Declare the variable before using it.",
    example: `print(x)`
  },

  indentationerror: {
    title: "IndentationError",
    meaning: "Occurs due to incorrect indentation.",
    fix: "Align indentation correctly.",
    example: `if True:
print('Hello')`
  },

  attributeerror: {
    title: "AttributeError",
    meaning: "Occurs when an object has no requested attribute.",
    fix: "Use valid attributes or methods.",
    example: `x = 5
x.append(10)`
  },

  importerror: {
    title: "ImportError",
    meaning: "Occurs when a module cannot be imported.",
    fix: "Check module name and installation.",
    example: `import abcxyz`
  },

  moduleNotFoundError: {
    title: "ModuleNotFoundError",
    meaning: "Occurs when Python cannot locate a module.",
    fix: "Install the module using pip.",
    example: `import numpyy`
  }

},

Java: {

  nullpointerexception: {
    title: "NullPointerException",
    meaning: "Occurs when trying to use a null object.",
    fix: "Initialize the object before using it.",
    example: `String text = null;
text.length();`
  },

  arithmeticexception: {
    title: "ArithmeticException",
    meaning: "Occurs during illegal arithmetic operations.",
    fix: "Avoid dividing numbers by zero.",
    example: `int x = 10 / 0;`
  },

  arrayindexoutofboundsexception: {
    title: "ArrayIndexOutOfBoundsException",
    meaning: "Occurs when accessing invalid array index.",
    fix: "Check array size before access.",
    example: `int[] arr = {1,2};
System.out.println(arr[5]);`
  },

  classnotfoundexception: {
    title: "ClassNotFoundException",
    meaning: "Occurs when a class cannot be found.",
    fix: "Check classpath and class name.",
    example: `Class.forName("Test");`
  },

  numberformatexception: {
    title: "NumberFormatException",
    meaning: "Occurs when converting invalid string to number.",
    fix: "Ensure string contains valid numbers.",
    example: `Integer.parseInt("abc");`
  },

  illegalargumentexception: {
    title: "IllegalArgumentException",
    meaning: "Occurs when passing invalid arguments.",
    fix: "Use valid function arguments.",
    example: `Thread.sleep(-1);`
  },

  filenotfoundexception: {
    title: "FileNotFoundException",
    meaning: "Occurs when a file does not exist.",
    fix: "Check file path.",
    example: `new FileInputStream("abc.txt");`
  },
  syntaxerror: {
    title: "Syntax Error",
    meaning: "Occurs due to invalid syntax.",
    fix: "Check brackets and semicolons.",
    example: `int var=10;`
  },

  inputmismatchexception: {
    title: "InputMismatchException",
    meaning: "Occurs when input type is incorrect.",
    fix: "Enter correct datatype input.",
    example: `Scanner sc = new Scanner(System.in);
int x = sc.nextInt();`
  }

},

C: {

  segmentationfault: {
    title: "Segmentation Fault",
    meaning: "Occurs when accessing invalid memory.",
    fix: "Check pointers and array boundaries.",
    example: `int *p = NULL;
*p = 5;`
  },

  dividebyzero: {
    title: "Divide By Zero",
    meaning: "Occurs when dividing a number by zero.",
    fix: "Check denominator before division.",
    example: `int x = 10 / 0;`
  },

  stackoverflow: {
    title: "Stack Overflow",
    meaning: "Occurs due to excessive recursive calls.",
    fix: "Add proper recursion base condition.",
    example: `void fun(){
fun();
}`
  },

  undeclaredidentifier: {
    title: "Undeclared Identifier",
    meaning: "Occurs when a variable is not declared.",
    fix: "Declare variables before usage.",
    example: `printf(x);`
  },

  syntaxerror: {
    title: "Syntax Error",
    meaning: "Occurs due to invalid syntax.",
    fix: "Check semicolons and brackets.",
    example: `int x = 10`
  }

},

CPP: {

  segmentationfault: {
    title: "Segmentation Fault",
    meaning: "Occurs when invalid memory is accessed.",
    fix: "Check pointers and arrays.",
    example: `int *p = NULL;
*p = 10;`
  },

  badalloc: {
    title: "Bad Alloc",
    meaning: "Occurs when memory allocation fails.",
    fix: "Reduce memory usage.",
    example: `int* arr = new int[999999999999];`
  },

  outofrange: {
    title: "Out Of Range",
    meaning: "Occurs when accessing invalid container index.",
    fix: "Check vector/string size.",
    example: `vector<int> v;
cout << v.at(5);`
  },

  syntaxerror: {
    title: "Syntax Error",
    meaning: "Occurs due to invalid syntax.",
    fix: "Check brackets and semicolons.",
    example: `cout << 'Hello'`
  }

}

};