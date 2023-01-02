# Expressions: Class Operations

## Instantiation

Classes can be instantiated using the `new` operator, followed by the class name, followed by a comma-separated list of arguments in parentheses.

```
$foo = new Foo();
$bar = new Bar(1, 2, 3);
```

## Anonymous class instantiation

Anonymous classes can be instantiated using the `new` operator, followed by `class`, followed by a comma-separated list of arguments in parentheses.

```
$foo = new class() {
    // ...
};
```

## Static Method Calls

Static methods can be called on a class using the `::` operator, followed by the method name, followed by an optional type parameter ( `::<type>` ), followed by a comma-separated list of arguments in parentheses.

```
Foo::bar();
Foo::baz::<int>(1, 2, 3);
```

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
