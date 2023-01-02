# Generics: Introduction

Classes, interfaces, and functions can be parameterized to work over a range of types rather than a single one. These entities are called *generic*.

Generics allow programmers to create components that can work over a variety of types, while providing compile-time type safety that allows these components to be used without runtime checks.

## Example

```
final class Box<T> {
    private readonly T $value;

    public function __construct(T $value) {
        $this->value = $value;
    }

    public function get(): T {
        return $this->value;
    }
}
```

The `Box` class is generic over the type `T`, it has a constructor, which takes a single argument of type `T`, and has a method named `get()`, which returns a value of type `T`.

The `Box` class can be used with any type:

```
$box = new Box::<int>(42);

$box->get(); // 42

$box = new Box::<string>("Hello, World!");

$box->get(); // "Hello, World!"
```

::: warning
The type parameters of a class must be specified when instantiating the class using the `::<T>` syntax.
:::

## Generic Functions

Functions can also be generic:

```
function identity<T>(T $value): T {
    return $value;
}
```

The `identity()` function is generic over the type `T`, it has a single argument of type `T`, and returns a value of type `T`.

The `identity()` function can be used with any type:

```
identity::<int>(42); // 42

identity::<string>("Hello, World!"); // "Hello, World!"
```

::: warning
The type parameters must be specified when calling a generic function using the `::<T>` syntax.
:::

## Generic Interfaces

Interfaces can also be generic:

```
interface Boxable<T> {
    public function get(): T;
}
```

The `Boxable` interface is generic over the type `T`, it has a single method named `get()`, which returns a value of type `T`.

The `Boxable` interface can be extended by any class, which must specify the type of `T`:

```
final class StringBox implements Boxable<string> {
    private readonly string $value;

    public function __construct(string $value) {
        $this->value = $value;
    }

    public function get(): string {
        return $this->value;
    }
}

final class IntBox implements Boxable<int> {
    private readonly int $value;

    public function __construct(int $value) {
        $this->value = $value;
    }

    public function get(): int {
        return $this->value;
    }
}
```
