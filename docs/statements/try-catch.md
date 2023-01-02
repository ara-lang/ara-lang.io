# Statements: Try-Catch

The `try-catch` statement is used to catch errors that occur in a block of code.

```
try {
    // ...
} catch (Exception $e) {
    // ...
}
```

The `try-catch` statement can have multiple `catch` blocks.

```
try {
    // ...
} catch (Exception $e) {
    // ...
} catch (Error $e) {
    // ...
}
```

You can also catch multiple types of errors in a single `catch` block.

```
try {
    // ...
} catch (DatabaseException|SecurityException $e) {
    // ...
}
```

A `finally` block can be used to execute code after the `try` block has finished executing, regardless of whether an error occurred.

```
try {
    // ...
} finally {
    // ...
}
```

A `finally` block can be combined with a `catch` block.

```
try {
    // ...
} catch (Exception $e) {
    // ...
} finally {
    // ...
}
```

::: warning
A `try` statement must have at least one `catch` or `finally` block.
:::

```
function example(): void {
    try {
        foo();
    }
}
```

The code above will result in the following error:

```
error[P0039]: try statement must have a catch or finally block
  ┌─ examples/try-without-catch-or-finally.ara:2:5
  │
2 │ ╭     try {
3 │ │         foo();
4 │ │     }
  │ ╰─────^ try statement must have a catch or finally block
  │
  = help: try adding a catch or finally block.
```
