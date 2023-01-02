# Classes: Methods

A method is a function defined in a class.

```
class Counter {
    public function increment(): void {
        // ...
    }
}
```

To call an instance method, use `->` operator.

```
function main(): void {
    $counter = new Counter();
    $counter->increment();
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
