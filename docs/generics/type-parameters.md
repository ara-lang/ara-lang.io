# Generics: Type Parameters

A type parameter is a placeholder for a type that is supplied when a generic type is instantiated, or a generic method, or function is called. Type parameters are specified using angle brackets (`<` and `>`), and are separated by commas. For example, the following type is generic over two type parameters, `T` and `U`:

```
class Box<T, U> {
    public function __construct(
        private readonly T $value,
        private readonly U $other
    ) {}

    public function get(): T {
        return $this->value;
    }

    public function getOther(): U {
        return $this->other;
    }
}
```

