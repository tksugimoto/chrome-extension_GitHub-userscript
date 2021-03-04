// コメント以外は Chrome の 翻訳対象としない
const isComment = text => {
	// TODO: その他コメント対応
	if (text.trim().startsWith('//')) return true;
	if (text.trim().startsWith('#')) return true;
	// TODO: 複数行コメントの判定ロジック強化
	if (text.trim().startsWith('/*')) return true;
	if (text.trim().startsWith('*')) return true;
	return false;
};

document.querySelectorAll('.blob-code').forEach(line => {
	if (!isComment(line.innerText)) {
		line.classList.add('notranslate');
	}
});
