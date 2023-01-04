# Expressions: Object Operations

## Method Calls

Methods can be called on an object using the `->` operator, followed by the method name, followed by an optional type parameter ( `::<type>` ), followed by a comma-separated list of arguments in parentheses.

```
$foo = new Foo();

$foo->bar();
$foo->baz::<int>(1, 2, 3);
$foo->qux::<int, string, bool>(1, 'foo', true);
```

::: warning
The method name must be an identifier, and cannot be a dynamic expression.

```
function example(Foo $foo): void {
  $foo->{bar()}();
}
```

The code above will result in the following error:

```
error[P0042]: unexpected token `{`, expected an identifier
  ┌─ examples/dynamic-method-call.ara:2:8
  │
2 │   $foo->{bar()}();
  │         ^ unexpected token `{`, expected an identifier
```
:::

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

::: warning
The property name must be an identifier, and cannot be a dynamic expression.

```
function example(Foo $foo): string {
  $foo->{bar()}
}
```

The code above will result in the following error:

```
error[P0042]: unexpected token `{`, expected an identifier
  ┌─ examples/dynamic-property-access.ara:2:9
  │
2 │   $foo->{bar()}
  │         ^ unexpected token `{`, expected an identifier
```
:::

## Null Safe Property Access

Properties can be accessed on an object that may be null using the `?->` operator, followed by the property name ( without `$` sign )

```
$foo = get_foo_or_null();

$foo?->bar;
```
