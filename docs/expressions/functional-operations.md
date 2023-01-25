# Expressions: Functional Operations

Functional operations refer to a style of programming that emphasizes the use of functions as first-class citizens.

## Functional Expression

A functional expression is a way of creating an anonymous function (also known as [Closure](https://www.php.net/manual/en/class.closure.php)) from any expression.

The resulting `Closure` will have the type of `Closure<(), T>` where `T` is the resulted value type of the expression.

Example:

```
$a = 1;
$b = 2;
$c = 3;

$closure = $($a + $b + $c);
// same as:
$closure = function() use($a, $b, $c): int {
  return $a + $b + $c;
};
```

If the inner expression is unreadable, `T` would be of type `void`.

``` 
$closure = $($this->counter++);
// same as:
$closure = function(): void {
  $this->counter++;
};
```

If the inner expression is an [exit](exit.md#expressions-exit), or [throw](exception-operations.md#throwing-exceptions) operation, `T` would be of type `never`.

```
$closure = $(throw new Exception('...'));
// same as:
$closure = static function(): never {
  throw new Exception('...');
};
```

In any of the examples above, you can see that we need much less code to write the functional expression.

## Pipe Operator

The pipe operator `|>` is used to chain together multiple function calls in a readable manner. The left-hand side of the operator is evaluated and passed to the right-hand side and so on.

For example:

```
$transform = Psl\Html\stripe_tags(...)
    |> Psl\Str\uppercase(...);

$output = $transform("<b>Hello World!</b>"); // HELLO WORLD!
```

Or combining [pipe operator](#pipe-operator) with a [functional expression](#functional-expression) on the left-side:

```
$hello_world = $("<b>Hello World!</b>")
    |> Psl\Html\strip_tags(...)
    |> Psl\Str\uppercase(...);

$output = $hello_world(); // HELLO WORLD!
```
