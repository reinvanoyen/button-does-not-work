export default async function fetchButton() {
	const response = await fetch('button.json');
	return await response.json();
}
