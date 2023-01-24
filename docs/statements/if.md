# Statements: If

The `if` statement is used to conditionally execute a block of code if a condition is true.


> <sub>**syntax**</sub>\
> IfStatement **:**\
> &nbsp;&nbsp;`if` *`Expression`* *`BlockStatement`* *`ElseIf`*<sup>**&#42;**</sup> *`Else`*<sup>**?**</sup>\
> &nbsp;\
> ElseIf **:**\
> &nbsp;&nbsp;`elseif` *`Expression`* *`BlockStatement`*\
> &nbsp;\
> Else **:**\
> &nbsp;&nbsp;`else` **(** *`BlockStatement`* **|** *`IfStatement`* **)**

---

```
if $condition {
    // ...
}
```

An `else` clause can be used to execute a block of code if the condition is false.

```
if $condition {
    // ...
} else {
    // ...
}
```

An `else if` clause can be used to chain multiple conditions.

```
if $condition1 {
    // ...
} else if $condition2 {
    // ...
} else {
    // ...
}
```

::: tip
You can use the `elseif` keyword instead of `else if`.

```
if $condition1 {
    // ...
} elseif $condition2 {
    // ...
} else {
    // ...
}
```

:::

::: warning
Unlike PHP, Ara does not support one-line `if` statements.

```
function example(bool $condition): void {
    if ($condition) foo();
}
```

The code above will result in the following error:

```
error[P0042]: unexpected identifier, expected `{`
  ┌─ examples/if-one-line.ara:2:21
  │
2 │     if ($condition) foo();
  │                     ^^^ unexpected identifier, expected `{`
```
:::
