async function(resolvingThenable, log) {
	try {
		await Promise.resolve();

		return resolvingThenable();
	} catch (e) {
		log.push('catch');

		return 'from-catch';
	}
}
