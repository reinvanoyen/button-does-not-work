export function observeDisplayChange(element, cb) {

	const observer = new MutationObserver((mutationsList) => {
		for (let mutation of mutationsList) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
				const target = mutation.target;
				const currentDisplay = window.getComputedStyle(target).display;

				if (currentDisplay !== 'none') {
					cb();
				}
			}
		}
	});

	const config = {
		attributes: true,
		attributeFilter: ['style'],
	};

	observer.observe(element, config);

	return observer;
}