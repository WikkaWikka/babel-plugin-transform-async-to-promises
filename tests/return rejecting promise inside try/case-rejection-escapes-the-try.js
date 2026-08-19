const log = [];
let message;
try {
	await f(() => Promise.reject(new Error("boom")), log);
} catch (e) {
	message = e.message;
}
// `return <thenable>` is resolved by the async function's own promise resolution, outside the try,
// so the local catch must not see the rejection and no statement after it may run.
expect(message).toBe("boom");
expect(log).toEqual(["returning"]);
