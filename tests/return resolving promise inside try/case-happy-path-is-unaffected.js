const log = [];
expect(await f(() => Promise.resolve("resolved-value"), log)).toBe("resolved-value");
expect(log).toEqual([]);
