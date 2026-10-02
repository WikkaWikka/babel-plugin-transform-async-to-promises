const events = [];
const ResourceGraph = f();

const result = await new ResourceGraph(true)
	.whenIdle()
	.then((value) => {
		events.push("then");
		return value;
	})
	.catch((error) => {
		events.push(error.message);
		return "recovered";
	})
	.finally(() => {
		events.push("finally");
	});

expect(result).toBe("recovered");
expect(events).toEqual(["idle failed", "finally"]);
