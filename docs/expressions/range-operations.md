# Expressions: Range Operations

A range operation is a way to create a range of integer values. There are six different types of range operations: [from](#from), [to](#to), [to inclusive](#to-inclusive), [between](#between), [between inclusive](#between-inclusive), and [full](#full).


The range operation is way of constructing a [`Psl\Range\RangeInterface`](https://github.com/azjezz/psl/tree/next/src/Psl/Range#range) object, according to the following table:

| Syntax        | Type                              | Range               |
|---------------|-----------------------------------|---------------------|
| `start..`     | `Psl\Range\FromRange`             | `start ≤ x`         |
| `..end`       | `Psl\Range\ToRange`               | `x < end`           |
| `..=end`      | `Psl\Range\ToRange`               | `x ≤ end`           |
| `start..end`  | `Psl\Range\BetweenRange`          | `start ≤ x < end`   |
| `start..=end` | `Psl\Range\BetweenRange`          | `start ≤ x ≤ end`   |
| `..`          | `Psl\Range\FullRange`             | `-`                 |

The following operations are equivalent:

```
$a = new Psl\Range\between(1, 10, false);
$b = 1..10;

Psl\invariant($a == $b);
```

Ranges can be iterated over as long as the range has a starting point:

```
foreach 1..100 as $value {
    // $value is 1, 2, 3, ..., 99
}
```

## From

A from range operation can be used to create a range from a starting point to infinity. This is done using the `..` operator following the starting point.

```
$a = 1..;
```

## To

A to range operation can be used to create a range to an ending point. This is done using the `..` operator preceding the ending point.

```
$a = ..10;
```

## To Inclusive

A to inclusive range operation can be used to create a range to an ending point, inclusive. This is done using the `..=` operator preceding the ending point.

```
$a = ..=10;
```

## Between

A between range operation can be used to create a range from a starting point to an ending point. This is done using the `..` operator between the starting and ending points.

```
$a = 1..10;
```

## Between Inclusive

A between inclusive range operation can be used to create a range from a starting point to an ending point, inclusive. This is done using the `..=` operator between the starting and ending points.

```
$a = 1..=10;
```

## Full

A full range operation can be used to create a range to infinity. This is done using the `..` operator.

```
$a = ..;
```
