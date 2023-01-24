# Expressions: Functional Operations

Functional operations refer to a style of programming that emphasizes the use of functions as first-class citizens.

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

## Pipe Operator

The pipe operator `|>` is used to chain together multiple function calls in a readable manner. The left-hand side of the operator is evaluated and passed to the right-hand side and so on.

For example:

```
$transform = Psl\Html\stripe_tags(...)
    |> Psl\Str\uppercase(...);

$output = $transform("<b>Hello World!</b>"); // HELLO WORLD!
```

Or combining *pipe operator* with a *functional expression* on the left-side:

```
$hello_world = $("<b>Hello World!</b>")
    |> Psl\Html\stripe_tags(...)
    |> Psl\Str\uppercase(...);

$output = $hello_world(); // HELLO WORLD!
```
