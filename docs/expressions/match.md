# Expressions: Match

The match expression branches evaluation based on an identity check of a value.

```
$variable = match subject {
    condition => expression,
    first_condition, second_condition => expression,
};
```

## Example

```
function get_emoji(string $food): string {
    match $food {
        'pizza' => '🍕',
        'burger' => '🍔',
        'hotdog' => '🌭',
        'taco' => '🌮',
        'burrito' => '🌯',
        default => '🤔',
    }
}

function example(): void {
    $emoji = get_emoji('pizza');

    IO\write_line($emoji); // 🍕
}
```

## `default` condition

The `default` condition is used to match any value that does not match any other condition.

## Multiple conditions

Multiple conditions can be provided for a single expression by separating them with a comma.

```
$variable = match subject {
    condition, another_condition => expression,
};
```

## Non exhaustive match

If a match expression is not exhaustive, meaning that it does not have a `default` condition and does not cover all possible values, the compiler will error.

Example, the following code will result in a compiler error:

```
enum Color {
    Red,
    Green,
    Blue,
}

function get_color_name(Color $color): string {
    // This match expression is not exhaustive, because it does not cover all possible values of Color.
    match $color {
        Color::Red => 'Red',
        Color::Green => 'Green',
    }
}
```

## Short Match

A short match expression is a match expression that has a subject of value `true`.

```
$variable = match {
    condition => expression,
    first_condition, second_condition => expression,
};
```

## Example

```
$result = match {
    $a == $b => 'a is equal to b',
    $a > $b => 'a is greater than b',
    $a < $b => 'a is less than b',
    default => 'a and b are not comparable',
};
```

