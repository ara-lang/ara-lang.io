# Fundamentals: Comments

Ara supports three types of comments:

- Single-line comments, which start with `//` and continue until the end of the line.
- Multi-line comments, which start with `/*` and end with `*/`.
- Doc comments, which start with `/**` and end with `*/`.

## Example

```
// This is a single-line comment.

/* This is a
   multi-line comment. */

/** 
 * This is a doc comment.
 */
```

## Doc comments

Doc comments are used to document Ara code. They are used to generate documentation for Ara code.

Doc comments are formatted using `Markdown` syntax.

### Example

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
// @ignore(UselessParentheses)
$foo = (1 + 2) * 3;
```
