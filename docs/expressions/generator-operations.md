# Expressions: Generator Operations

## Yielding Values

Generators can yield values using the `yield` keyword. The expression after the `yield` keyword is the value to be yielded.

```
yield $value;
```

## Yielding Key-Value Pairs

Generators can yield key-value pairs using the `yield` keyword. The expression after the `yield` keyword is the key-value pair to be yielded.

```
yield $key => $value;
```

## Yielding From Another

Generators can yield values from another `iterable` using the `yield from` keyword. The expression after the `yield from` keyword is the `iterable` to yield values from.

```
yield from $iterable;
```

## Yielding Nothing

Generators can yield nothing using the `yield` keyword.

```
yield;
```
