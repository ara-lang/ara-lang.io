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

use MyOtherNamespace\MyOtherClass;

use function MyOtherNamespace\my_other_function;

use const MyOtherNamespace\MY_OTHER_CONST;

const int MY_CONST = 1;

type MyType = int;

interface MyInterface {
    // ...
}

class MyClass {
    // ...
}

enum MyEnum {
    // ...
}

function my_function(): void {
    // ...
}
```
