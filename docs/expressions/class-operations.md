# Expressions: Class Operations

## Instantiation

Classes can be instantiated using the `new` operator, followed by the class name, followed by an optional type parameter ( `::<type>` ), followed by a comma-separated list of arguments in parentheses.

```
$foo = new Foo();
$bar = new Bar(1, 2, 3);
$baz = new Baz::<int>(1, 2, 3, 4);
```

::: warning
Parentheses are required after the class name, even if there are no arguments.

```
function example(): void {
  $a = new Foo;
}
```

The code above will result in the following error:

```
error[P0042]: unexpected token `;`, expected `(`
  ┌─ examples/class-instantiation-without-paren.ara:2:15
  │
2 │   $a = new Foo;
  │               ^ unexpected token `;`, expected `(`
```
:::

::: warning
The class name must be either an identifier, or a variable, and cannot be a dynamic expression.

Examples of valid instantiations:

```
$foo = new Foo();
$bar = new $foo();
```

If a dynamic expression is used, the parser will throw an error.

```
function example(): void {
  $a = new (foo())();
}
```

The code above will result in the following error:

```
error[P0042]: unexpected token `(`, expected an identifier
  ┌─ examples/dynamic-instantiation.ara:2:12
  │
2 │   $a = new (foo())();
  │            ^ unexpected token `(`, expected an identifier
```

:::

## Anonymous class instantiation

Anonymous classes can be instantiated using the `new` operator, followed by `class`, followed by a comma-separated list of arguments in parentheses.

```
$foo = new class() {
    // ...
};
```

::: warning
Parentheses are required after the `class` keyword, even if there are no arguments.

```
function example(): void {
  $a = new class {
    // ...
  };
}
```

The code above will result in the following error:

```
error[P0042]: unexpected token `{`, expected `(`
  ┌─ examples/anonymous-class-instantiation-without-paren.ara:2:18
  │
2 │   $a = new class {
  │                  ^ unexpected token `{`, expected `(`
```

:::

## Static Method Calls

Static methods can be called on a class using the `::` operator, followed by the method name, followed by an optional type parameter ( `::<type>` ), followed by a comma-separated list of arguments in parentheses.

```
Foo::bar();
Foo::baz::<int>(1, 2, 3);
```

::: warning
The method name must be an identifier, and cannot be a dynamic expression.

```
function example(): string {
  Foo::{bar()}()
}
```

The code above will result in the following error:

```
error[P0042]: unexpected token `{`, expected a variable, an identifier, or `class`
  ┌─ examples/dynamic-static-method-call.ara:2:8
  │
2 │   Foo::{bar()}()
  │        ^ unexpected token `{`, expected a variable, an identifier, or `class`
```
:::

## Static Method Closure Creation

A closure can be created from a static method using the `::` operator, followed by the method name, followed by an optional type parameter ( `::<type>` ), followed by `(...)`.

```
$bar = Foo::bar(...);
$baz = Foo::baz::<int>(...);
```

## Static Property Access

Static properties can be accessed on a class using the `::` operator, followed by the property name.

```
Foo::$bar;
```

::: tip
The `::` operator can also be used to access static properties on an object

```
$foo = new Foo();

$foo::$bar;
```
::::

::: warning
The property name must be an identifier, and cannot be a dynamic expression.

```
function example(): string {
  Foo::${bar()}
}
```

The code above will result in the following error:

```
error[P0042]: unexpected token `$`, expected a variable, an identifier, or `class`
  ┌─ examples/dynamic-static-property-access.ara:2:8
  │
2 │   Foo::${bar()}
  │        ^ unexpected token `$`, expected a variable, an identifier, or `class`
```
:::

## Class Constant Access

Class constants can be accessed on a class using the `::` operator, followed by the constant name.

```
Foo::BAR;
```

::: tip
The `::` operator can also be used to access constants on an object

```
$foo = new Foo();

$foo::BAR;
```
::::

::: warning
The constant name must be an identifier, and cannot be a dynamic expression.

```
function example(): string {
  Foo::{bar()}
}
```

The code above will result in the following error:

```
error[P0042]: unexpected token `{`, expected a variable, an identifier, or `class`
  ┌─ examples/dynamic-constant-access.ara:2:8
  │
2 │   Foo::{bar()}
  │        ^ unexpected token `{`, expected a variable, an identifier, or `class`
```
:::
