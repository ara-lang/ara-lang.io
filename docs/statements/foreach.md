# Statements: Foreach

The `foreach` statement is used to iterate over any iterable value.


> <sub>**syntax**</sub>\
> ForeachStatement **:**\
> &nbsp;&nbsp;`foreach` **(***`Iterator`* **|** **(** `(` *`Iterator`* `)` **)** **)** *`BlockStatement`* **(**`else` *`BlockStatement`***)**<sup>**?**</sup>\
> &nbsp;\
> Iterator **:**\
> &nbsp;&nbsp;*`Expression`* `as` *`Variable`* **(**`=>` *`Variable`***)**<sup>**?**</sup>

---

```
foreach $iterable as $value {
    // ...
}
```

You can also use the `=>` operator to access the key and value of an associative iterable.

```
foreach $iterable as $key => $value {
    // ...
}
```

Foreach loops can also contain an `else` block that is executed if the iterable is empty.

```
foreach $iterable as $value {
    // ...
} else {
    // $iterable is empty
}
```
