// jot-- ©2013 j201

// Adapted from http://semarch.linguistics.fas.nyu.edu/barker/Iota/jot.scm
function jot(code) {
	return code.split('').reduce(function(v, char) {
		return char === '1' ?
			function(f) { return function(a) { return v(f(a)); }; } :
			v(function(x) { return function(y) { return function(z) { return x(z)(y(z)); }; }; })
			 (function(x) { return function(y) { return x; }});
	}, function(x) { return x; });
}

module.exports = function(code) { return jot(code.length.toString(2)); };
