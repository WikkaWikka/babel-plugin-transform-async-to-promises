const log = [];
let message;
try {
	await f(() => Promise.reject(new Error("boom")), log);
} catch (e) {
	message = e.message;
}
expect(message).toBe("boom");
expect(log).toEqual(["iteration0"]);
