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

::: 

## Concurrently Block

The `concurrently` block can be used to run multiple async operations concurrently.

```
concurrently {
    await some_async_operation(),
    await another_async_operation(),
}
```
