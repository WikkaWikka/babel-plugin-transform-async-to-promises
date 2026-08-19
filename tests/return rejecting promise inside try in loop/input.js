async function(rejectingThenable, log) {
	for (let i = 0; i < 2; i++) {
		try {
			await Promise.resolve();
			log.push('iteration' + i);

			return rejectingThenable();
		} catch (e) {
			log.push('catch');
		}
	}

	return 'after-loop';
}
