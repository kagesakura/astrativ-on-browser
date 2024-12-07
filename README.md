# astrativ-on-browser
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
global.factorial = fn(f, a, b) { if a < 1: return b; return f(f, a - 1, a * b); };
var i = 0; while i < 19: { global.print(i, "! =", global.factorial(global.factorial, i, 1)); i += 1; }
```
- Array
```
global.arr = ["apple", "banana", "grape"];
var i = 0; while i < global.len(global.arr): { global.print(arr[i]); i += 1; }
```
- Dictionary
```
var dict = ${ dogs: 29, cats: 32 }; global.print("There are", dict.dogs, "dogs."); global.print("There are", dict["cats"], "cats.");
```
