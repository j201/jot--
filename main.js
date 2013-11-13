// Adapted from http://semarch.linguistics.fas.nyu.edu/barker/Iota/jot.scm
function jot(code) {
	var v = function(x) { return x; };
	code.split('').forEach(function(char) {
		v = char === '1' ?
				(function(v) { return function(f) { return function(a) { return v(f(a)); }; }; })(v) :
				v(function(x) { return function(y) { return function(z) { return x(z)(y(z)); }; }; })
				 (function(x) { return function(y) { return x; }});
	});
	return v;
}

module.exports = function(code) { return jot(code.length.toString(2)); };
