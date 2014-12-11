"use strict";

// via http://bost.ocks.org/mike/shuffle/

define(function () {
	return function (array) {
		var m = array.length, t, i;

		while (m) {
			i = Math.floor(Math.random() * m--);

			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	};
});
