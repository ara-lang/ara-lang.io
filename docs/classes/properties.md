# Classes: Properties

A property is a variable defined in a class.

```
class Counter
{
    public int $value = 0;
}
```

::: info
Every instance has a separate value for an instance property.
:::

## Property Access

Refer to [Expressions: Object Operations - Property Access](../expressions/object-operations.md#property-access) for more information.

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

## Property Visibility

A property can be declared as `public`, `protected`, or `private`.

```
class Counter {
    public int $value = 0;
    protected int $value = 0;
    private int $value = 0;
}
```

## Read-only Properties

A property can be declared as `readonly`.

```
class Counter {
  public readonly int $value = 0;
}
```

::: warning
Unlike other properties, a read-only property cannot be initialized with a default value.

```
class Counter {
    public readonly int $value = 0;
}
```

The code above will result in the following error:

```
error[P0018]: readonly property `Counter::$value` cannot have a default value
  ┌─ examples/readonly-with-value.ara:3:23
  │
1 │ class Counter {
  │       -------
2 │   public readonly int $value = 0;
  │          --------     ^^^^^^^^^^ readonly property `Counter::$value` cannot have a default value
  │
  = note: a readonly property cannot have a default value because it cannot be changed after initialization.
  = help: try removing the default value.
```
:::

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

::: warning
A static property cannot be declared as `readonly`.

```
class Counter {
    public static readonly int $value;
}
```

The code above will result in the following error:

```
error[P0017]: readonly property `Counter::$value` cannot be static
  ┌─ examples/static-readonly-property.ara:2:12
  │
1 │ class Counter {
  │       -------
2 │     public static readonly int $value;
  │            ^^^^^^ --------     ------
  │            │
  │            readonly property `Counter::$value` cannot be static
  │
  = note: a property cannot be both readonly and static.
  = help: try removing `static`.
```
:::

## Static Property Access

Refer to [Expressions: Class Operations - Static Property Access](../expressions/class-operations.md#static-property-access) for more information.

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
Using the same name for a method and a property can be confusing. We recommend you using different names.
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
