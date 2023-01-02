# Generics: Variance

Ara supports covariance for generics.

Covariant type parameters are specified using the `+` prefix. For example, the following type is generic over a covariant type parameter `+T`:

```
readonly class Box<+T> {
    public function __construct(public T $value) {}

    public function get(): T {
        return $this->value;
    }
}

interface Animal {}

final class Cat implements Animal {}
final class Dog implements Animal {}

function pet(Box<Animal> $animal): void {
    IO\write_line("Petting %s", $animal->value::class);
}

function pet(vec<Animal> $animals): void {
    foreach $animals as $animal {
        IO\write_line("Petting %s", $animal::class);
    }
}

function example(): void {
    pet(new Box::<Cat>(new Cat()));
    pet(new Box::<Dog>(new Dog()));

    pet_all(vec[new Cat(), new Cat()]);
}
```

If a type parameter is covariant, then it can be used as the type of a parameter that expects a subtype of the type parameter. For example, the `pet()` function can be called with a `Box<Cat>` or a `Box<Dog>` because `Box<Cat>` and `Box<Dog>` are subtypes of `Box<Animal>`.

If we have declared `Box` as invariant, then the `pet()` function would not be able to be called with a `Box<Cat>` or a `Box<Dog>` because `Box<Cat>` and `Box<Dog>` are not subtypes of `Box<Animal>`.

