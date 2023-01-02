# Generics: Type Constraints

A Type Constraint is a restriction on the type of a type parameter. Type constraints are specified using the `as` keyword. For example, the following type is generic over a type parameter `T`, which must be a subtype of `iterable<int, string>`:

```
class Box<T as iterable<int, string>> {
    public function __construct(private readonly T $value) {}
}
```

The `Box` class can be used with any type that is a subtype of `iterable<int, string>`:

```
$box = new Box::<dict<int, string>>(dict[
    1 => "Hello",
    2 => "World",
]);

$box = new Box::<vec<string>>(vec[
    "Hello",
    "World",
]);

$box = new Box::<(string, string, string)>((
    "Hello",
    "World",
    "!",
));
```

## `where` Method Type Constraints

The `where` keyword can be used to specify a type constraint on a method. For example, the following type is generic over a type parameter `T`, which must be a subtype of `iterable<int, string>`:

```
class Box<T> {
    public function __construct(private readonly T $value) {}

    public function get(): T where T as iterable<int, string> {
        return $this->value;
    }
}
```

The `get()` method can be used with any type that is a subtype of `iterable<int, string>`:

```
$box = new Box::<dict<int, string>>(dict[
    1 => "Hello",
    2 => "World",
]);

$box->get(); // dict[1 => "Hello", 2 => "World"]

$box = new Box::<vec<string>>(vec[
    "Hello",
    "World",
]);

$box->get(); // vec["Hello", "World"]

$box = new Box::<(string, string, string)>((
    "Hello",
    "World",
    "!",
));
```

Using `get()` with a type that is not a subtype of `iterable<int, string>` will result in a typechecker error:

```
$box = new Box::<int>(42);

$box->get(); // error: method type constraint violation, expected `iterable<int, string>`, got `int`
```
