async function(rejectingThenable, log) {
	try {
		await Promise.resolve();

		return rejectingThenable();
	} catch (e) {
		log.push('catch');
	}
	log.push('after-try');

	return 'after-try';
}
