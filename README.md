# Why?

It's possible that developers write these forms of code:

```js
if (falseCondition);
{
    console.log("It's not true.");
}
```

```js
for (let i = 0; i < 3; i++);
{
    doSomethingInLoop();
}
```

In the first example, the developer wants the `if` body to be executed only if `falseCondition` is met, but because he mistakenly typed a semicolon next to the parenthesis, the `{ ... }` block doesn't belong to `if`, so it always gets executed.

In the second example, the developer wants `doSomethingInLoop()` to be executed 3 times, but because he mistakenly typed a semicolon next to the parenthesis, the `{ ... }` block doesn't belong to `for`, so it gets executed only once.

If the `if` or `for` body is simply a semicolon, this semicolon is an "empty statement". (Not to be confused with "empty block", which is `{}`.)

This rule disallows this form of semicolons.

# Usage

In your eslint config file:

```json
{
    "plugins": ["no-empty-statement"],
    "rules": {
        "no-empty-statement/no-empty-statement": "error"
    }
}
```

This rule has a string option:

- `"ignore-statement-list-item"` (default) disallows "empty statement semicolons", except those in a container that can have multiple statements, for example an extra semicolon in the block `{ doSomething(); ; }`
- `"all"` disallows all "empty statement semicolons".
