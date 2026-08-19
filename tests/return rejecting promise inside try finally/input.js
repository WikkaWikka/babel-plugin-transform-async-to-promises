async function(rejectingThenable, log) {
	try {
		await Promise.resolve();

		return rejectingThenable();
	} finally {
		log.push('finally');
	}
}
