interface Animal {
	name: string;
	speak(): void;
}

interface Pet {
	play(): void;
}

interface Robot {
	start(): void;
	stop(): void;
}

class RoboDog implements Animal, Pet, Robot {
	name: string;
	isStarted: boolean;
	constructor(name: string) {
		this.name = name;
		this.isStarted = true;
	}
	speak(): void {
		console.log("Ham Ham Ham");
	}
	play(): void {
		console.log("Prind eu batul ala!");
	}
	start(): void {
		console.log("Am pornit");
	}
	stop(): void {
		console.log("M-am oprit");
	}
}

let maya = new RoboDog("Maya");

maya.speak;
maya.play;
maya.stop;
