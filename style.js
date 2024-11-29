export function style(stylesheet) {
	const styleEl = document.createElement('style');
	styleEl.id = 'style';
	styleEl.innerHTML = stylesheet;
	document.head.appendChild(styleEl);
}

export function unstyle() {
	const styleEl = document.getElementById('style');
	if (styleEl) {
		styleEl.remove();
	}
}