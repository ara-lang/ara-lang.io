## Statements: Return

### Explicit Return

The `return` statement is used to return a value from a function.

```
function example(): int {
    return 1;
}
```

The `return` statement can be used without a value to exit a function early.

```
function example(): void {
    if $condition {
        return;
    }

    // ...
}
```

### Implicit Return

A function can return implicitly by omitting the `return` keyword and the semicolon.

```
function example(): int {
    1
}
```

::: warning
Multiple return statements in the same code path will result in a compile-time error.
:::
