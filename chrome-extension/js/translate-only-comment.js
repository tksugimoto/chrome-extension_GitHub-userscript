// コメント以外は Chrome の 翻訳対象としない
const isComment = text => {
	// TODO: その他コメント対応
	return text.trim().startsWith('//');
};

document.querySelectorAll('.blob-code').forEach(line => {
	if (!isComment(line.innerText)) {
		line.classList.add('notranslate');
	}
});
