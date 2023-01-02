# Expressions: Async Operations

## Async

The `async` expression can be used to create an async operation from a synchronous expression.

```
$variable = async foo();
```

## Await

The `await` expression can be used to wait for an async operation to complete.

```
$variable = await $awaitable;
```

The `await` expression can also be used to wait for an array of async operations to complete.

```
// $awaitable1: Awaitable<int>
$awaitable1 = async foo();
// $awaitable2: Awaitable<string>
$awaitable2 = async bar();

// $variable: vec<int|string>
$variable = await vec[$awaitable1, $awaitable2];

// $variable: dict<int, int|string>
$variable = await dict[
    1 => $awaitable1,
    2 => $awaitable2,
];

// $variable: dict<string, int|string>
$variable = await dict[
    'foo' => $awaitable1,
    'bar' => $awaitable2,
];

// $variable: (int, string)
$variable = await ($awaitable1, $awaitable2);
```

## Concurrently Block

The `concurrently` block can be used to run multiple async operations concurrently.

```
concurrently {
    await some_async_operation(),
    await another_async_operation(),
    some_other_operation(),
}
```
