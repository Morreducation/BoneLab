var data = [
	{
		id: "a00001",
		title: "Mystery Fossil 1",
		descriptor: "A fossil that belongs to an unknown dinosaur species.",
		url: "../fossillab/models/allosaurus/claw.glb",
	},
];

console.log(data);

var data2 = [];

var agent = [
	{
		label: "prompt_1",
		prompt: "Look at this bone from all angles and talk about the details you see.",
	},
	{
		label: "prompt_2",
		prompt: "What part of the animal is the bone from?",
	},
	{
		label: "prompt_3",
		prompt: "Was the animal that it came from was a carnivore or herbivore?",
	},
	{
		label: "prompt_4",
		prompt: "Can you move and interact with the bone model in ways that help you see how it might have functioned in real-life?",
	},
	{
		label: "prompt_5",
		prompt:
			"This model is in fact an Allosaurus Claw, which is a carnivore, can you now move and interact with the bone model again to demonstrate how it might have functioned in real life?",
	},
];
