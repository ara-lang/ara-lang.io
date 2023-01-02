# Fundamentals: Comments

Ara supports three types of comments:

- Single-line comments, which start with `//` and continue until the end of the line.
- Multi-line comments, which start with `/*` and end with `*/`.
- Doc comments, which start with `/**` and end with `*/`.

## Single-line comments

Single-line comments start with `//` and continue until the end of the line is reached.

```
// A single-line comment on an empty line

$foo = true; // A single-line comment after a statement
```

## Multi-line comments

Multi-line comments (AKA block comments) start with `/*` and end with `*/`.

```
/* This is a
   multi-line comment. */

/*
 * This is another multi-line comment.
 */
```

## Documentation comments

Documentation comments start with `/**` and end with `*/`. They are formatted
using the `Markdown` syntax. 

```
/**
 * This is a doc comment.
 *
 * It can be used to document **Ara** code.
 *
 * ## Example
 *
 * ```ara
 * $result = add(1, 2);
 * ```
 */
function add(int $a, int $b): int {
    $a + $b
}
```

## Special comments

Ara supports special comments, which are used to control the behavior of Ara code.

### `@ignore(...)`

The `@ignore` comment can be used to ignore linting errors.

#### Example

```
// @ignore(L0515) - useless parentheses
$foo = 1 + (2 * 3);
```
