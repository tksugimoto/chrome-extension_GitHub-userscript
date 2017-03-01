{
	"use strict";
	const extension_id = chrome.runtime.id;
	const dayOfWeeks = "日月火水木金土".split("");
	window.setInterval(() => {
		document.querySelectorAll(`[datetime]:not([data-${extension_id}-changed])`).forEach(elem => {
			elem.setAttribute(`data-${extension_id}-changed`, true);
			const datetime_str = elem.getAttribute("datetime");
			const datetime = new Date(datetime_str);
			const yyyy = datetime.getFullYear();
			const MM = datetime.getMonth() + 1;
			const dd = datetime.getDate();
			// 曜日
			const E = dayOfWeeks[datetime.getDay()];
			const HH = datetime.getHours();
			const mm = datetime.getMinutes();
			const ss = datetime.getSeconds();
			const span = document.createElement("span");
			span.appendChild(document.createTextNode(`${yyyy}/${MM}/${dd}(${E}) ${HH}:${mm}:${ss}`));
			span.appendChild(document.createTextNode(" ("));
			elem.parentNode.replaceChild(span, elem);
			span.appendChild(elem);
			span.appendChild(document.createTextNode(")"));
		});
	}, 500);
}
