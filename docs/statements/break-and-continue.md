# Statements: Break and Continue

The `break` and `continue` statements are used to control the flow of a loop.

> <sub>**syntax**</sub>\
> BreakStatement **:**\
> &nbsp;&nbsp;`break` *`LiteralIntegerExpression`*<sup>**?**</sup> `;`\
> &nbsp;\
> ContinueStatement **:**\
> &nbsp;&nbsp;`continue` *`LiteralIntegerExpression`*<sup>**?**</sup> `;`

---

## Break

The `break` statement is used to exit a loop early.

```
for $i = 0; $i < 10; $i++ {
    if $i == 5 {
        break;
    }

    // ...
}
```

You can also use a level to break out of nested loops.

```
for $i = 0; $i < 10; $i++ {
    for $j = 0; $j < 10; $j++ {
        if $i == 5 && $j == 5 {
            break 2;
        }

        // ...
    }
}
```

::: warning
The level must be a literal integer.

```
function example(): void {
    while $condition {
      // ...

      while $another_condition {
          // ...

          if $something {
              break $level;
          }
      }
    }
}
```

The code above will result in the following error:

```
error[P0042]: unexpected variable, expected `;`
  ┌─ examples/break-non-literal.ara:9:21
  │
9 │               break $level;
  │                     ^^^^^^ unexpected variable, expected `;`
```
:::

## Continue

The `continue` statement is used to skip the rest of the current iteration of a loop.

```
for $i = 0; $i < 10; $i++ {
    if $i == 5 {
        continue;
    }

    // ...
}
```

You can also use a level to continue to the next iteration of a nested loop.

```
for $i = 0; $i < 10; $i++ {
    for $j = 0; $j < 10; $j++ {
        if $i == 5 && $j == 5 {
            continue 2;
        }

        // ...
    }
}
```

::: warning
The level must be a literal integer.

```
function example(): void {
    while $condition {
      // ...

      while $another_condition {
          // ...

          if $something {
              continue $level;
          }
      }
    }
}
```

The code above will result in the following error:

```
error[P0042]: unexpected variable, expected `;`
  ┌─ examples/continue-non-literal.ara:9:24
  │
9 │               continue $level;
  │                        ^^^^^^ unexpected variable, expected `;`
```
:::
