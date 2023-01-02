# Fundamentals: Program Structure

A Ara program consists of one or more files; there files *must* have the `.ara`, or `.d.ara` extension.

Every Ara file can contain zero or more top-level declarations. The top-level declarations are:

- `namespace`
- `use`
- `interface`
- `class`
- `enum`
- `const`
- `type`
- `function`

## Example

```
namespace MyNamespace;

use MyOtherNamespace\MyClass;

interface MyInterface {
    // ...
}

class MyClass {
    // ...
}

enum MyEnum {
    // ...
}

const MY_CONST = 1;

type MyType = int;

function myFunction(): void {
    // ...
}
```
