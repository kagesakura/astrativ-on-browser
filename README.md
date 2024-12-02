# astrativ-on-browser
ブラウザー上で動くようになった自作言語です。  
リンク：https://kagesakura.github.io/astrativ-on-browser/  
一回実行するごとに，ローカル変数は**消えます**。その一回の実行の中でしか生きていません。  
グローバル変数は保持されます。  
以下のように書けば，0 から 9 が表示されます。
```
var i = 0; while i < 10: { global.print(i); i += 1; }
```
