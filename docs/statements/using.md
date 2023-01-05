# Statements: Using

The `using` statement is a control flow statement that allows you to specify a block of code in which a resource or resources are used, and at the end of the block, the resources are disposed of automatically. This can be useful for resource management and to ensure that resources are properly cleaned up when they are no longer needed.


```
using $file = File\open_read_only('example.txt') {
    // $file is present here
}

// $file is disposed here
```

::: tip
Variables declared inside the `using` block are still accessible after the block has been exited.

```
using $file = File\open_read_only('example.txt')  {
    $content = $file->readAll();
}

// $content is still accessible here
```
:::

::: info
If an exception is thrown inside the `using` block, the variables declared inside the block will still be disposed of.

```
using $file = File\open_read_only('example.txt') {
    throw new Exception("An exception was thrown");
}

// $file is disposed here, and the exception is thrown
```
:::

You can also use the `using` statement to declare and use multiple variables in the same block.

```
using $user = Users\by_id($user_id), $articles = Articles\by_user($user_id) {
    // $user and $articles are present here
}

// $user and $articles are disposed here
```

You can use an `if` clause to conditionally execute the `using` block.

```
using $user = Users\by_id($id) if $user is nonnull {
    // $user is present here
}

// $user is disposed here
```
