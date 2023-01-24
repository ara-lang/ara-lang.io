# Fundamentals: Constants

A constant is a named value that cannot be changed.

There are two types of constants:

- **namespace constant** - A constant declared in a namespace.
- **class constant** - A constant declared in a class, interface, or enum.

## Namespace Constants

To declare a namespace constant, use the `const` keyword.

```
namespace Foo;

const u8 MY_CONST = 1;
```

::: info
Constants must be defined with a type in Ara.
:::

To access a namespace constant, refer to it by its fully qualified name:

```
$value = Foo\MY_CONST;
```

or import it using the `use` keyword:

```
namespace Bar;

use const Foo\MY_CONST;

$value = MY_CONST;
```

## Class Constants

To declare a class constant, use the `const` keyword within a class, interface, or enum.

```
class MyClass {
    const u8 MY_CONST = 1;
}

interface MyInterface {
    const u8 MY_CONST = 1;
}

enum MyEnum {
    const u8 MY_CONST = 1;
}
```

To access a class constant, you can use the `::` operator:

```
$value = MyClass::MY_CONST;
```

Unlike namespace constants, class constants can have modifiers:

- `public` - The constant is accessible from anywhere.
- `protected` - The constant is accessible from within the class and its subclasses.
- `private` - The constant is accessible only from within the class.
- `final` - The constant cannot be overridden by subclasses.

```
class MyClass {
    public const u8 MY_CONST = 1;
    protected const u8 MY_CONST = 1;
    private const u8 MY_CONST = 1;
    final const u8 MY_CONST = 1;
}
```

::: warning
Constants defined within `interface` cannot be `protected`, or `private`.
:::
