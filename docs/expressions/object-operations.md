# Expressions: Object Operations

## Method Calls

Methods can be called on an object using the `->` operator, followed by the method name, followed by an optional type parameter ( `::<type>` ), followed by a comma-separated list of arguments in parentheses.

```
$foo = new Foo();

$foo->bar();
$foo->baz::<int>(1, 2, 3);
$foo->qux::<int, string, bool>(1, 'foo', true);
```

## Null Safe Method Calls

Methods can be called on an object that may be null using the `?->` operator, followed by the method name, followed by an optional type parameter ( `::<type>` ), followed by a comma-separated list of arguments in parentheses.

```
$foo = get_foo_or_null();

$foo?->bar();
$foo?->baz::<int>(1, 2, 3);
```

## Method Closure Creation

A closure can be created from a method using the `->` operator, followed by the method name, followed by an optional type parameter ( `::<type>` ), followed by `(...)`.

```
$foo = new Foo();

$bar = $foo->bar(...);
$baz = $foo->baz::<int>(...);
$qux = $foo->qux::<int, string, bool>(...);
```

## Property Access

Properties can be accessed on an object using the `->` operator, followed by the property name ( without `$` sign )

```
$foo = new Foo();

$foo->bar;
```

## Null Safe Property Access

Properties can be accessed on an object that may be null using the `?->` operator, followed by the property name ( without `$` sign )

```
$foo = get_foo_or_null();

$foo?->bar;
```
