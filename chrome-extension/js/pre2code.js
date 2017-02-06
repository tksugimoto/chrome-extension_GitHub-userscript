(function () {
	"use strict";
	// <pre>タグの中身を<code>タグに入れる
	// <pre>のままだとソースコードがGoogle翻訳によって翻訳されてしまうため
	window.setInterval(() => {
		document.querySelectorAll("pre").forEach(pre => {
			if (!pre.querySelector("code")) {
				const code = document.createElement("code");
				while (pre.hasChildNodes()) {
					code.appendChild(pre.firstChild);
				}
				pre.appendChild(code);
			}
		});
	}, 500);
})();
