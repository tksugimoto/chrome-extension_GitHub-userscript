(function () {
	"use strict";
	const extension_id = chrome.runtime.id;
	window.setInterval(() => {
		document.querySelectorAll(`[datetime]:not([data-${extension_id}-changed])`).forEach(elem => {
			elem.setAttribute(`data-${extension_id}-changed`, true);
			const datetime_str = elem.getAttribute("datetime");
			const datetime = new Date(datetime_str);
			const span = document.createElement("span");
			span.appendChild(document.createTextNode(datetime.toLocaleString()));
			span.appendChild(document.createTextNode(" ("));
			elem.parentNode.replaceChild(span, elem);
			span.appendChild(elem);
			span.appendChild(document.createTextNode(")"));
		});
	}, 500);
})();
