# Statements: Break and Continue

The `break` and `continue` statements are used to control the flow of a loop.

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
:::
