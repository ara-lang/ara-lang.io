# Classes: Constructors

A constructor is a special method that is called when an instance of a class is created using `new` operator.

```
class Counter
{
    public int $value = 0;

    public function __construct(int $value) {
        $this->value = $value;
    }
}
```

The constructor has a special name: `__construct`, and unlike other methods, it does not have a return type.

## Promoted Properties

Promoted properties is a feature that allows you to promote a constructor parameter to a property.

```
class Counter
{
    public function __construct(
        public int $value
    ) {}
}
```

This is equivalent to:

```
class Counter
{
    public int $value;

    public function __construct(int $value) {
        $this->value = $value;
    }
}
```

A parameter is promoted to a property if it is has a valid property modifier, such as: `readonly`, `public`, `private`, `protected`.

::: warning
A promoted property cannot have the `static` modifier.

```
class Counter
{
    public function __construct(
        public static int $value
    ) {}
}
```

The code above will result in the following error:

```
error[P0033]: modifier `static` cannot be used on a promoted property
  ┌─ examples/static-promoted-property.ara:4:16
  │
4 │         public static int $value
  │                ^^^^^^ modifier `static` cannot be used on a promoted property
  │
  = note: only the `readonly`, `private`, `protected`, and `public` modifiers can be used on a promoted property.
  = help: try removing the modifier.
```
:::

Promoted parameters can be combined with regular non-promoted parameters.

```
class User
{
    public int $age;

    public function __construct(
        public string $name,
        int $birthYear,
    ) {
        $this->age = date('Y') as int - $birthYear;
    }
}
```
