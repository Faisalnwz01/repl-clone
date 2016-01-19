const contains = (key, list) => {
    return list.indexOf(key) > -1;
}

const diff = (first, second) => {
	let firstKeys = Object.keys(first);
	let secondKeys = Object.keys(second);

	let addition = secondKeys.filter(key => !contains(key, firstKeys))
	let deletion = firstKeys.filter(key => !contains(key, secondKeys))

	return {addition, deletion}
}

let first = {'Capco': 1, 'Devs': 2};
let second = {'Data': 3, 'Science': 4, 'Capco': 1};

console.log('first object')
console.log(first)

console.log('second object')
console.log(second)

console.log('diff')
console.log(diff(first, second))
