function hello(firstName: string, lastName?: string): void {
	console.log(`Hello ${firstName} ${lastName}!`);
}

enum Direction {
	Up,
	Down,
	Left,
	Right,
}

function move(direction: Direction) {}

hello("Puiu", "Meu");
