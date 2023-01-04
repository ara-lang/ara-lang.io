# Statements: Using

The `using` statement is a control flow statement that is used to execute a block of code and automatically destroy the variables declared in the block of code when the block of code is finished executing.

```
using $file = File\open_read_only("example.txt") {
    // $file is present here
}

// $file is destroyed here
```

::: info
Variables declared inside the block of code are not accessible outside the block of code.

```
using $file = File\open_read_only("example.txt")  {
    $content = $file->readAll();

    // do something with $content
}

// $content is not accessible here
```
:::

`using` also allows multiple variables to be declared and used in the block of code.

```
using $user = Users\by_id($user_id), $articles = Articles\by_user($user_id) {
    // $user and $articles are present here
}

// $user and $articles are destroyed here
```

An `if` clause can be used to conditionally execute the block of code.

```
using $user = Users\by_id($id) if $user is nonnull {
    // $user is present here
}

// $user is destroyed here
```
