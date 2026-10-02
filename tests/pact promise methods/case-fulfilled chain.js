const events = [];
const ResourceGraph = f();

const result = await new ResourceGraph(false)
	.whenIdle()
	.then((value) => {
		events.push("then");
		return value;
	})
	.catch(() => {
		events.push("catch");
		return "recovered";
	})
	.finally(() => {
		events.push("finally");
	});

expect(result).toBe("idle");
expect(events).toEqual(["then", "finally"]);
