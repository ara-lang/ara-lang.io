# Statements: Foreach

The `foreach` statement is used to iterate over any iterable value.

```
foreach $iterable as $value {
    // ...
}
```

You can also use the `=>` operator to access the key and value of an associative iterable.

```
foreach $iterable as $key => $value {
    // ...
}
```

In addition to its primary function of iterating over an iterable, the `foreach` statement also allows for the use of an optional `else` clause, which is executed when the value is empty:

```
foreach $iterable as $value {
    // ...
} else {
    // executed when `$iterable` is empty
}
```
