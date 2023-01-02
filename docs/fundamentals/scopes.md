# Fundamentals: Scopes

The same identifier can be used in different scopes. The scope of an identifier is the region of the program where the identifier can be used.

The following scopes are defined:

- `namespace` - The namespace scope is the scope of a namespace.
- `class` - The class scope is the scope of a class.
- `function` - The function scope is the scope of a function.
- `block` - The block scope is the scope of a block.

Each function has its own scope. A variable declared in a function is only visible within that function.

Anonymous functions have their own scope. A variable declared in an anonymous function is only visible within that function, however, an anonymous function can import variables from the parent scope.

The scope of a parameter is the scope of the function in which the parameter is declared.

The scope of a class, or an enum member is the scope of the class, or the enum in which the class, or the enum member is declared in, or inherited by.

The scope of an interface member is the scope of the interface in which the interface member is declared in, or inherited by.
