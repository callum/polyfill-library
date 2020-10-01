/* global CreateMethodProperty Type */
(function (nativeFreeze) {
	// 19.1.2.6. Object.freeze ( O )
	CreateMethodProperty(Object, 'freeze', function freeze(O) {
		// 1. If Type(O) is not Object, return O.
		if (Type(O) !== "object") {
			return O;
		}
		if (nativeFreeze) {
			return nativeFreeze(O)
		} else {
			// This feature cannot be implemented fully as a polyfill.
			// We choose to silently fail which allows "securable" code
			// to "gracefully" degrade to working but insecure code.
			return O;
		}
	});
}(Object.freeze));
