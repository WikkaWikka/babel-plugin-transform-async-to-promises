async function(rejectingThenable, log) {
	try {
		await Promise.resolve();
		log.push('returning');

		return rejectingThenable();
	} catch (e) {
		log.push('catch');

		return 'from-catch';
	}
}
