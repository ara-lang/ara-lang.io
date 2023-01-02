# Statements: For

The `for` statement is used to execute a block of code a specified number of times.

```
for $i = 0; $i < 10; $i = $i + 1 {
    // ...
}
```

A `for` statement can have multiple expressions in the initializer, condition, and increment sections.

```
for $i = 0, $j = 0; $i < 10 && $j < 10; $i++, $j++ {
    // ...
}
```

A `for` statement can have an empty initializer, condition, or increment section.

```
// Iterate until $i is greater than 10, incrementing $i with each iteration
for ; $i < 10; $i++ {
    // ...
}

// Infinite loop, incrementing $i with each iteration
for ;; $i++ {
    // ...
}

// Infinite loop
for ;; {
    // ...
}
```
