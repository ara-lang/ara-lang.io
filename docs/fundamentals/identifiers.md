# Fundamentals: Identifiers

Identifiers are used to label variables, constants, functions, classes, interfaces, and other constructs in Ara code.

An identifier must start with a character from the unicode character set, or an underscore (`_`), followed by zero or more characters from the unicode character set, or digits (`0`-`9`).

variables, and class properties names must start with a `$` sign. 

## Examples

```
namespace MyNamespace;

use MyOtherNamespace\MyClass;

type MyType = int;

const MY_CONST = 1;

function my_function(): void {
    $my_variable = 1;
}

class MyClass {
    public int $myProperty = 0;
}

interface MyInterface {
    public function myMethod(): void;
}

enum MyEnum: int {
    case MY_VALUE = 1;
}
```
