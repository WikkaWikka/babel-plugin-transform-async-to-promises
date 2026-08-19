const log = [];
let message;
try {
	await f(() => Promise.reject(new Error("boom")), log);
} catch (e) {
	message = e.message;
}
// The returned thenable settles outside the try, so neither the catch nor the statements following
// the try/catch may run -- the function has already returned.
expect(message).toBe("boom");
expect(log).toEqual([]);
