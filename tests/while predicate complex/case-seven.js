var count = 0;
expect((await f(async _ => ++count, 7))).toBe(6);
expect(count).toBe(7);