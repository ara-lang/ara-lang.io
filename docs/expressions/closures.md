# Expressions: Closures

## Anonymous Functions

Anonymous functions are functions that are not named. They are created using the `function` keyword.

```
$variable = function (string $argument): string {
    return $argument;
};
```

### Capturing Variables

Anonymous function don't capture variables from parent scope by default. To capture a variable from the parent scope, you must use the `use` keyword.

```
$variable = 'value';

$anonymous_function = function () use ($variable): string {
    return $variable;
};
```

## Arrow Functions

Arrow functions are short anonymous functions that are created using the `fn` keyword.

```
$variable = fn (string $argument): string => $argument;
```

::: info
Unlike anonymous functions, arrow functions capture all variables that are in scope at the time of creation.
:::
