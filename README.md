# これはなに？
GitHub用のChrome拡張

# 機能
* commit履歴などの日時表示をYYYY/MM/DD(E) HH:mm:ssにする
	* `E`: 曜日
* ソースコードがGoogle翻訳によって翻訳されて読みづらくなることを防ぐ
	* やってる処理: `<pre>`タグの中身を`<code>`タグに入れる
	* 仕組み: Google翻訳は`<code>`内を翻訳しない
