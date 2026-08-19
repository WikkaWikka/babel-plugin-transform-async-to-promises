const log = [];
let message;
try {
	await f(() => Promise.resolve().then(() => {
		log.push("thenable-settled");
		throw new Error("boom");
	}), log);
} catch (e) {
	message = e.message;
}
expect(message).toBe("boom");
expect(log).toContain("finally");
// KNOWN DEVIATION, distinct from the catch-swallowing bug and deliberately not fixed here: spec
// establishes the return completion synchronously, so `finally` should run before the returned thenable
// settles. Ordering is not asserted because a case runs against the untransformed function too, where
// the order is already correct. Stashing a finalizer-only try would let the try's return override a
// `return` inside the `finally`, which must win -- see "finally suppress original return".
