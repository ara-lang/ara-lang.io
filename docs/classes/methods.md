# Classes: Methods

A method is a function defined in a class.

```
class Counter {
    public function increment(): void {
        // ...
    }
}
```

## Method Calls

Refer to [Expressions: Object Operations - Method Calls](../expressions/object-operations.md#method-calls) for more information.

## Method Visibility

A method can be declared as `public`, `protected`, or `private`.

```
class Counter {
    public function increment(): void {
        // ...
    }

    protected function decrement(): void {
        // ...
    }

    private function reset(): void {
        // ...
    }
}
```

## Final Methods

A method can be declared as `final`, which means that it cannot be overridden in a child class.

```
class Counter {
    final public function increment(): void {
        // ...
    }
}
```

## Static methods

A static method is a method that can be called without creating an instance of the class.

```
class Counter {
    public static function increment(): void {
        // ...
    }
}
```

To call a static method, use `::` operator.

```
function main(): void {
    Counter::increment();
}
```

## Static Method Calls

Refer to [Expressions: Class Operations - Static Method Calls](../expressions/class-operations.md#static-method-calls) for more information.
