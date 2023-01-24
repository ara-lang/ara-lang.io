# Classes: Constants

A class can contain constants, which are similar to variables, except that their value cannot be changed.

```
class Constants
{
    public const float PI = 3.14;
}
```

## Constant Access

Refer to [Expressions: Class Operations - Constant Access](../expressions/class-operations.md#class-constant-access) for more information.

## Constant Visibility

Constants can be declared as `public`, `protected` or `private`.

```
class Constants
{
    public const float PI = 3.14;
    protected const float E = 2.71;
    private const float GOLDEN_RATIO = 1.618;
}
```

## Final Constants

Constants can be declared as `final`, which means that they cannot be overridden in a child class.

```
class Constants
{
    final public const float PI = 3.14;
}
```
