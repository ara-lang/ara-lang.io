# Expressions: Functional Operations

Functional operations refer to a style of programming that emphasizes the use of functions as first-class citizens.

## Pipe Operator

The pipe operator `|>` is used to chain together multiple function calls in a readable manner. The left-hand side of the operator is the input value, and the right-hand side is the function to which the input value is passed.

For example:

```
$a = $b |> $c;
```

This code means that the value of `$b` is passed as the input to the function `$c`, and the result is assigned to the variable `$a`.

Another example:

```
$hello_world = "<b>Hello World!</b>"
    |> strip_tags(...)
    |> strtoupper(...);

echo $hello_world; // HELLO WORLD!
```

## Functional Expression

A functional expression is a way of creating an anonymous function, which is a function without a name, that can be immediately invoked or passed as an argument to another function.

For example:

```
$a = $(123);
```

This is the same as:

```
$a = static function(): int { return 123; };
```

Another example:

```
$a = $($this);
```

Is the same as:

``` 
$a = function(): self { return $this; };
```

In both examples, you can see that we need much less code to write the functional expression.
