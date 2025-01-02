# astrativ
## Description
ブラウザー上で動くようになった自作言語です。  
リンク：https://kagesakura.github.io/astrativ-on-browser/  
一回実行するごとに，ローカル変数は**消えます**。その一回の実行の中でしか生きていません。  
グローバル変数は保持されます。  
## Example
- Print 0 to 9
```
var i = 0; while i < 10: { global.print(i); i += 1; }
```
- Print factorials by a recursive function
```
var fctr = fn(f, b, a) {
  if a < 1: return b;
  return f(f, a * b, a - 1);
};

var factorial = global.bind(fctr, [fctr, 1]);

var i = 0;

while i < 19: {
  global.print(i, "! =", factorial(i));
  i += 1;
}
```
- Array
```
var arr = ["apple", "banana", "grape"];
var i = 0;
while i < global.len(arr): {
  global.print(arr[i]);
  i += 1;
}
```
- Dictionary
```
var dict = ${ dogs: 29, cats: 32 };
global.print("There are", dict.dogs, "dogs.");
global.print("There are", dict[:cats], "cats.");
```
## Operators
### Binary Operators
- `+`, `-`, `*`, `/`: 加減乗除
- `%`: 除算のあまり (remainder, not modulo)
- `**`: 累乗
- `>`, `<`, `>=`, `<=`: 数値の大小関係
- `==`, `!=`: Equality, Inequality
- `&&`, `||`: 論理積と論理和
- `&`, `|`, `^`: 符号付 32 ビット整数での ビットごとの 論理積・論理和・排他的論理和
- `<<`, `>>`: 符号付 32 ビット整数での算術シフト
- `... [ ... ]`: プロパティー等アクセス
- `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `&=`, `|=`, `^=`, `<<=`, `>>=`: 代入
### Unary Operators
- `-`: 符号反転
- `!`: 論理否定
- `~`: ビット否定
- `typeof`: JavaScript の `typeof` と同様
### Other Operators
- `return x`  
e.g.) `return 2` 
## Other Syntax
- Literals
  - bool: `true`, `false`
  - empty: `empty`
  - string  
  e.g.) `"hello"`, `"neko neko neko"`
  - number  
  e.g.) `34`, `0x5FD6`, `0o5372`, `0b1001`, `7489`, `7.5`, `3e50`, `Infinity`, `NaN` etc.
  - dictionary  
  e.g.) `${ a: 1, b: 2 }`
  - array  
  e.g.) `[1, 2, 4, 6, 12, 24, 36, 48, 60]`
- Global Variables
`global.variable_name`  
e.g.) `global.print`
- Variable Declaration
`var variable_name = initial_value;`  
e.g.) `var hello = 168783147336419;`
- If Statement
```
if condition_expression: body
```
```
if condition_expression: then_statement
else else_statement
```
- While Statement
```
while condition_expression: body
```
- Function Expression (like lambda expression)
```
fn( ...parameters ) { ...body_statements }
```
- Block Statement
```
{ ...statements }
```
