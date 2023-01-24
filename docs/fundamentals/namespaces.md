# Fundamentals: Namespaces

A namespace is a named scope that contains a set of declarations.

To declare a namespace, use the `namespace` keyword.

```
namespace Foo;
```

When multiple files are in the same namespace, their declarations are merged together.

```
// file1.ara
namespace Foo;

const u8 MY_CONST = 1;
```

```
// file2.ara
namespace Foo;

const u8 MY_OTHER_CONST = 2;
```

```
// file3.ara
namespace Bar;

use Foo;

const u8 MY_CONST = Foo\MY_CONST;
const u8 MY_OTHER_CONST = Foo\MY_OTHER_CONST;
```

## Root Namespace

In the absence of a namespace declaration, the declarations are in the root namespace.

```
const int MY_CONST = 1;
```

## Nested Namespaces

Namespaces can be nested.

```
namespace Foo\Bar;
```

## Importing

Namespaces can be imported using the `use` keyword.

```
use Foo;

const int MY_CONST = Foo\MY_CONST;
```

## Aliasing

Namespaces can be aliased using the `as` keyword.

```
namespace Foo;

use Bar\Baz as Qux;

const int MY_CONST = Qux\MY_CONST;
```

## Reserved Namespaces

The following namespaces are reserved, and cannot be used:

- `Ara`
- `Php`
