async function(rejectingThenable, log) {
	try {
		try {
			await Promise.resolve();

			return rejectingThenable();
		} catch (e) {
			log.push('inner-catch');
		}
	} catch (e) {
		log.push('outer-catch');
	}

	return 'fell-through';
}
