class Formatter {
	static capitalize(string) {
		return string[0].toUpperCase() + string.substring(1)
	}

	static sanitize(string) {
		return string.replace(/[^A-Za-z0-9\-\'\s]/gi, '')
	}

	static titleize(string) {
		const exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
		return string.split(' ').map((word, i) => !exclude.includes(word) || i == 0 ? Formatter.capitalize(word) : word).join(' ')
	}
}