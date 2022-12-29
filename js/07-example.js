// Example 7 - Sorting an array with a loop

// Write a script to sort an array of strings alphabetically by the first letter of an element.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

for (let i = 1; i < langs.length; i += 1) {
	let wasChanged = false;

	for (let j = 0; j < langs.length - i; j += 1) {
		const left = langs[j]; // langs[0] -> "python"
		const right = langs[j + 1]; // langs[1] -> "javascript"

		if (left[0] < right[0]) {
			wasChanged = true;
			langs[j] = right;
			langs[j + 1] = left;
		}
	}

	if (!wasChanged) break;
}

console.log(langs);


// Or, cheat way

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];
// console.log(langs)
// langs.sort()
// console.log(langs)