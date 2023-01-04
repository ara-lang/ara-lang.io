# Expressions: Arrays

## Tuples

Tuples are a way to group multiple values into a single value. They are useful for returning multiple values of different types from a function, or for passing multiple values to a function.

### Creating

Tuples are created by putting a comma-separated list of expressions in parentheses.

```
$a = (1, 2, 3);
```

### Accessing

Tuples can be accessed using the `[]` operator, with the index of the value to access.

```
$a = (1, 2, 3);
$b = $a[0]; // 1
```

### Destructuring

Tuples can be destructured into multiple variables using by assigning them to a tuple.

```
$a = (1, 2, 3);

($b, $c, $d) = $a;
```

### Updating

Tuples are immutable, so they cannot be updated. Instead, a new tuple must be created.

```
$a = (1, 2, 3);
$b = ($a[0], $a[1], 4);
```

### Checking if a value exists

To check if a value exists in a tuple, use the `in` expression.

```
$a = (1, 2, 3);

if 1 in $a {
    // 1 exists in $a
}
```

### Checking if an index exists

Checking if an index exists in a tuple is not possible, as the length of a tuple is fixed.

### Iterating

Tuples can be iterated over using the `foreach` statement.

```
$a = (1, 2, 3);

foreach $a as $value {
    // $value is 1, then 2, then 3
}

foreach $a as $index => $value {
    // $index is 0, then 1, then 2
    // $value is 1, then 2, then 3
}
```

::: warning
Unlike PHP, `$index`, and `$value` are not available after the `foreach` statement.
:::

## Vectors

Vectors are a way to group multiple values into a single value. They are useful for returning multiple values of the same type from a function, or for passing multiple values to a function.

### Creating

Vectors are created by using `vec` followed by a comma-separated list of expressions in brackets.

```
$a = vec[1, 2, 3];
```

### Accessing

Vectors can be accessed using the `[]` operator, with the index of the value to access.

```
$a = vec[1, 2, 3];
$b = $a[0]; // 1
```

### Destructuring

Vectors can be destructured into multiple variables using by assigning them to a tuple.

```
$a = vec[1, 2, 3];

($b, $c, $d) = $a;
```

### Updating

Vectors can be updated using the `[]` operator, with the index of the value to update.

```
$a = vec[1, 2, 3];

$a[0] = 4;
```

You can push a value onto the end of a vector using the `[]` operator.

```
$a = vec[1, 2, 3];

$a[] = 4;
```

To remove a value from a vector, use the `unset` expression.

```
$a = vec[1, 2, 3];

unset $a[0];
```

::: warning
When removing a value from a vector, the vector will be re-indexed. This means that the index of the last value in the vector will change.
:::

::: info
Parentheses can be used with `unset` to mimic `unset()` in PHP.
:::

```
$a = vec[1, 2, 3];

unset($a[0]);
```

::: info
You can remove multiple indexes from a vector by passing a tuple of indexes to `unset`.
:::

```
$a = vec[1, 2, 3];

unset ($a[0], $a[1]);
```

### Checking if a value exists

To check if a value exists in a vector, use the `in` expression.

```
$a = vec[1, 2, 3];

if 1 in $a {
    // 1 exists in $a
}
```

### Checking if an index exists

To check if an index exists in a vector, use the `isset` expression.

```
$a = vec[1, 2, 3];

if isset $a[0] {
    // 0 exists in $a
}
```

::: info
Parentheses can be used with `isset` to mimic `isset()` in PHP.
:::

```
$a = vec[1, 2, 3];

if isset($a[0]) {
    // 0 exists in $a
}
```

::: info
You can check if multiple indexes exist in a vector by passing a tuple of indexes to `isset`.
:::

```
$a = vec[1, 2, 3];

if isset ($a[0], $a[1]) {
    // 0 and 1 exist in $a
}
```

### Iterating

Vectors can be iterated over using the `foreach` statement.

```
$a = vec[1, 2, 3];

foreach $a as $value {
    // $value is 1, then 2, then 3
}

foreach $a as $index => $value {
    // $index is 0, then 1, then 2
    // $value is 1, then 2, then 3
}
```

::: warning
Unlike PHP, `$index`, and `$value` are not available after the `foreach` statement.
:::

### Dictionary

Dictionaries are a way to group multiple key-value pairs into a single value. They are useful for returning multiple values of the same type from a function, or for passing multiple values to a function.

### Creating

Dictionaries are created by using `dict` followed by a comma-separated list of key-value pairs in brackets.

```
$a = dict["a" => 1, "b" => 2, "c" => 3];
```

### Accessing

Dictionaries can be accessed using the `[]` operator, with the key of the value to access.

```
$a = dict["a" => 1, "b" => 2, "c" => 3];
$b = $a["a"]; // 1
```

### Updating

Dictionaries can be updated using the `[]` operator, with the key of the value to update.

```
$a = dict["a" => 1, "b" => 2, "c" => 3];

$a["a"] = 4;
```

You can add a value to a dictionary using the `[]` operator.

```
$a = dict["a" => 1, "b" => 2, "c" => 3];

$a["d"] = 4;
```

To remove a value from a dictionary, use the `unset` expression.

```
$a = dict["a" => 1, "b" => 2, "c" => 3];

unset $a["a"];
```

### Checking if a value exists

To check if a value exists in a dictionary, use the `in` expression.

```
$a = dict["a" => 1, "b" => 2, "c" => 3];

if 1 in $a {
    // 1 exists in $a
}
```

### Checking if a key exists

To check if a key exists in a dictionary, use the `isset` expression.

```
$a = dict["a" => 1, "b" => 2, "c" => 3];

if isset $a["a"] {
    // "a" exists in $a
}
```

### Iterating

Dictionaries can be iterated over using the `foreach` statement.

```
$a = dict["a" => 1, "b" => 2, "c" => 3];

foreach $a as $key => $value {
    // $key is "a", then "b", then "c"
    // $value is 1, then 2, then 3
}
```

::: warning
Unlike PHP, `$index`, and `$value` are not available after the `foreach` statement.
:::
