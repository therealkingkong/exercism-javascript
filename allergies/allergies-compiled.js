'use strict';

var ALLERGENS = {
	"1": "eggs",
	"2": "peanuts",
	"4": "shellfish",
	"8": "strawberries",
	"16": "tomatoes",
	"32": "chocolate",
	"64": "pollen",
	"128": "cats"
};

var Allergies = function Allergies(score) {
	this.score = score;
	return {
		list: function list() {
			Object.keys(ALLERGENS).reduce(function (prev, curr) {
				+curr & score ? prev.push(ALLERGENS[curr]) : prev;
				return prev;
			}, []);
		},
		allergicTo: function allergicTo(allergen) {
			return this.list().indexOf(allergen) >= 0;
		}
	};
};

module.exports = Allergies;

//# sourceMappingURL=allergies-compiled.js.map