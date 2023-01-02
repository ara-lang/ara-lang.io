# Generics: Type Erasure

Type Parameters are erased at runtime. This means that the type parameters are not available at runtime.

## Example

```
function foo(vec<int> $integers): void {
    var_dump($integers);
}

function bar(): void {
    foo(vec["foo", "bar"]);
}
```

The compiler will emit a type error for the call to `foo()` in `bar()` because the type of the argument is `vec<string>`, which is not a subtype of `vec<int>`.

If we ignore the error using `--ignore` flag, the code will compile and run, however, ignoring type errors is highly discouraged, as it can lead to runtime errors.

## Limitations

Due to the type erasure, the following features are not supported:

-  Type parameters in `instanceof` expressions ( `if ($value instanceof Foo<T>) { ... }` )
-  Type parameters in `is` expressions ( `if ($value is Foo<T>) { ... }` )
-  Type parameters in `as` expressions ( `$value as Foo<T>` )
-  Type parameters in `new` expressions ( `new T()` )
-  Type parameters in `catch` blocks ( `try { ... } catch (T $e) { ... }` )

For passing around class names, Ara has `classname<T>` type, which can be used to create instances of a specific class.

Example:

```
interface Foo<T> {
    public function __construct(T $value);
}

function foo<T>(classname<Foo<T>> $class, T $value): void {
    $instance = new $class($value);

    var_dump($instance);
}
```
