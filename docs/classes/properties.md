# Classes: Properties

A property is a variable defined in a class.

```
class Counter
{
    public int $value = 0;
}
```

To access a property, use `->` operator.

```
function main(): void {
    $counter = new Counter();
    $counter->value = 1;
}
```

::: info
There's no `$` sign before the property name.
:::

::: info
Every instance has a separate value for an instance property.
:::


## Initializing Properties

Properties in Ara must be initialized, either using a default value, or in the constructor.

```
class DefaultValues {
    public int $value = 0;
}

class SetInConstructor {
    public int $value;

    public function __construct() {
        $this->value = 0;
    }
}
```

## Static properties

A static property is a property that is shared between all instances of a class.

```
class Counter {
    public static int $value = 0;
}
```

To access a static property, use `::` operator.

```
function main(): void {
    Counter::$value = 1;
}
```

::: info
If your property never changes value, you might want to use a class constant instead.
:::

## The Property Namespace

Properties and methods are in different namespaces. It's possible to have a method and a property with the same name.

```
class Counter {
    public int $value = 0;

    public function value(): int
    {
        return $this->value;
    }
}
```

::: warning
Using the same name for a method and a property is confusing. We recommend you using different names.
:::

```
$b->value(); // method call
$b->value; // property access
```

If you want to call the value of a property that has `Closure` type, you will need to be explicit that you're accessing the property.

```
class IntAdder {
    public Closure<(int, int), int> $callable;

    public function __construct() {
        $this->callable = function(int $a, int $b): int {
            return $a + $b;
        };
    }
}
```

You can do this by using parentheses.

```
function main(): void {
    $adder = new IntAdder();

    ($adder->callable)(1, 2); // 3
}
```
