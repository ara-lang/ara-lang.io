# Fundamentals: Variables

A variable is a named value that can be changed.

Distinct variables can have the same name if they are in different scopes.

## Examples

```
function main(): void {
    $a = 1;
    $b = "Hello";
    $c = true;
    $d = 1.0;
    $e = null;
    $f = vec[1, 2, 3];
    $g = dict["a" => 1, "b" => 2];
    $h = ("a", "b", "c");
    $i = new MyClass();
    $j = SomeEnum::A;
}
```