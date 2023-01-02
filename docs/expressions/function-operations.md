# Expressions: Function Operations

## Function Calls

Functions can be called using the function name, followed by an optional type parameter ( `::<type>` ), followed by a comma-separated list of arguments in parentheses.

```
foo();
bar(1, 2, 3);
baz::<int>(1, 2, 3);
```

## Function Closure Creation

A closure can be created from a function using the function name, followed by an optional type parameter ( `::<type>` ), followed by `(...)`.

```
$bar = foo(...);
$baz = baz::<int>(...);
```
