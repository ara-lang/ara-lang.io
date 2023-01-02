# Fundamentals: Literals

Ara supports the following literals:

- `bool`
- `int`
- `float`
- `string`
- `null`

## Boolean literals

A boolean literal is either `true` or `false`.

```
$a = true;
$b = false;
```

## Integer literals

An integer literal is a sequence of digits.

```
$a = 1234; // decimal number
$b = -123; // a negative number
$c = 0123; // octal number
$d = 0x1A; // hexadecimal number
$e = 0b11111111; // binary number
```

An integer literal may contain `_` separators between digits, which are ignored by the compiler.

```
$a = 1_000_000; // same as 1000000
```

## Floating-point literals

A floating-point literal is a sequence of digits, optionally followed by a decimal point, and optionally followed by an exponent.

```
$a = 1.234;
$b = 1.2e3;
$c = 7E-10;
```

A floating-point literal may contain `_` separators between digits, which are ignored by the compiler.

```
$a = 1_000_000.000_001; // same as 1000000.000001
```

## String literals

### Single Quotes

A string literal enclosed in single quotes is a sequence of characters surrounded by single quotes.

```
$a = 'Hello, World!';
```

### Double Quotes

A string literal enclosed in double quotes is a sequence of characters surrounded by double quotes.

::: info
The literal can contain any source character except double-quote `"` and backslash `\`, which can only be represented by their corresponding escape sequence, `\"` and `\\`.
:::

```
$a = "Hello, World!";
```

certain characters can also be expressed as escape sequences. An escape sequence represents a single-character encoding. For example:

```
$a = "First line \nSecond line";
```

The following escape sequences are supported:

| Escape Sequence | Description | Unicode Character |
| --------------- | ----------- | ------------------ |
| `\0` | The null character | `U+0000` |
| `\\` | A backslash | `U+005C` |
| `\"` | A double quote | `U+0022` |
| `\n` | A newline (line feed) | `U+000A` |
| `\r` | A carriage return | `U+000D` |
| `\t` | A tab | `U+0009` |
| `\v` | A vertical tab | `U+000B` |
| `\e` | An escape | `U+001B` |
| `\f` | A form feed | `U+000C` |
| `\ooo` | The byte whose value is `ooo` (octal) |  |
| `\xHH` | The byte whose value is `HH` (hexadecimal) | `U+00HH` |
| `\u{HHHH}` | The Unicode code point whose value is `HHHH` (hexadecimal) | `U+HHHH` |


## Null literal

The null literal is the only value of the `null` type.

```
$a = null;
```
