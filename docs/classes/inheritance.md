# Classes: Inheritance

Ara supports single inheritance between classes, which means that a class can only inherit from one other class.

## Extending a class

A class can inherit from another class using the `extends` keyword.

```
class Base
{
}

class Derived extends Base
{
}
```

## Overriding methods

A method in a child class can override a method in a parent class by defining a method with the same name.

```
class Counter
{
    protected int $value = 0;

    public function increment(): void
    {
        $this->value++;
    }

    public function getValue(): int
    {
        return $this->value;
    }
}

class OneOffCounter extends Counter
{
    public function getValue(): int
    {
        return $this->value + 1;
    }
}
```

Ara does not support method overloading, which means that a method overriding another method must have a compatible signature.

```
class Counter
{
    protected int $value = 0;

    public function increment(): void
    {
        $this->value++;
    }

    public function getValue(): int
    {
        return $this->value;
    }
}

class OffCounter extends Counter
{
    public function getValue(int $how_much = 1): int
    {
        return $this->value + $how_much;
    }
}
```

::: info
This restriction is also applied to constructors.
:::

## Calling the parent method

A child class can call the parent method using the `parent` keyword.

```
class Counter
{
    protected int $value = 0;

    public function increment(): void
    {
        $this->value++;
    }

    public function getValue(): int
    {
        return $this->value;
    }
}

class OneOffCounter extends Counter
{
    public function getValue(): int
    {
        return parent::getValue() + 1;
    }
}
```

This also works for static methods.

```
class Counter
{
    protected static int $value = 0;

    public static function getValue(): int
    {
        return self::$value;
    }
}

class OneOffCounter extends Counter
{
    public static function getValue(): int
    {
        return parent::getValue() + 1;
    }
}
```

## Abstract Classes

A class can be declared as `abstract`, which means that it cannot be instantiated.

```
abstract class Counter
{
    protected int $value = 0;
}
```

An abstract class can contain abstract methods, which means that they must be implemented by a child class.

```
abstract class Counter
{
    protected int $value = 0;

    abstract public function increment(): void;
}
```

An abstract class can also contain concrete methods.

```
abstract class Counter
{
    protected int $value = 0;

    public function increment(): void
    {
        $this->value++;
    }
}
```

::: warning
An abstract method cannot be declared on a non-abstract class.

```
class Counter
{
  public abstract function getValue(): int;
}
```

The code above will result in the following error:

```
error[P0040]: cannot declare abstract method `Counter::getValue` on a non-abstract class
  ┌─ examples/abstract-method-non-abstract-class:2:3
  │
1 │ class Counter {
  │       -------
2 │   public abstract function getValue(): int;
  │   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ cannot declare abstract method `Counter::getValue` on a non-abstract class
  │
  = note: abstract methods can only be declared on abstract classes.
  = help: try removing the abstract modifier.
```
:::

## Final Classes

A class can be declared as `final`, which means that it cannot be extended.

```
final class Counter
{
}
```

::: warning
A final class cannot be declared as abstract.

```
abstract final class Counter {}
```

The code above will result in the following error:

```
error[P0025]: final class cannot be abstract
  ┌─ examples/abstract-final-class.ara:1:1
  │
1 │ abstract final class Counter {}
  │ ^^^^^^^^ -----
  │ │
  │ final class cannot be abstract
  │
  = note: a final class cannot be abstract because it cannot be extended by other classes.
  = help: try removing the `abstract` modifier.
```
::::

## Final Methods

A method can be declared as `final`, which means that it cannot be overridden.

```
class Counter
{
    protected int $value = 0;

    final public function increment(): void
    {
        $this->value++;
    }
}
```

::: warning
A final method cannot be declared as abstract.

```
abstract class Counter
{
    final abstract public function increment(): void;
}
```

The code above will result in the following error:

```
error[P0026]: final class member cannot be abstract
  ┌─ examples/final-abstract-method.ara:2:11
  │
2 │     final abstract public function increment(): void;
  │     ----- ^^^^^^^^ final class member cannot be abstract
  │
  = note: a final class member cannot be abstract because it cannot be overridden by other classes.
  = help: try removing the `abstract` modifier.
```
:::
