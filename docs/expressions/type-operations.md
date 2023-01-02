# Expressions: Type Operations

## Type Coercion

Type coercion can be used to coerce a value into a certain type using the `into` operator, followed by the type to coerce the value into.

```
$int = $value into int;
```

## Type Assertions

Type assertions can be used to assert that a value is of a certain type using the `as` operator, followed by the type to assert the value is.

```
$string = $value as string;
```

## Type Checking

Type checking can be used to check if a value is of a certain type using the `is` operator, followed by the type to check the value is.

```
if $value is string {
    // $value is a string
}
```

## Instanceof Checking

Instanceof checking can be used to check if a value is an instance of a certain class using the `instanceof` operator, followed by the class to check the value is an instance of.

```
if $value instanceof Foo {
    // $value is an instance of Foo
}
```
