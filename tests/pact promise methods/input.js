function() {
	return class ResourceGraph {
		constructor(shouldFail) {
			this.busy = true;
			this.shouldFail = shouldFail;
		}

		async whenIdle() {
			while (this.busy) {
				this.busy = await Promise.resolve(false);
			}
			if (this.shouldFail) {
				throw new Error("idle failed");
			}
			return "idle";
		}
	};
}
