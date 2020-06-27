/**
 * Calculate the area of various things in an asynchronous way.
 *
 * Pi = 3.14
 * For circles, the result is rounded to 2 decimal places
 */

// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
	return new Promise((resolve, reject) => {
		switch (shape) {
			case 'square':
				resolve(Math.pow(values[0], 2));
				break;
			case 'rectangle':
				resolve(values[0] * values[1]);
				break;
			case 'circle':
				resolve(Math.floor(3.14 * Math.pow(values[0], 2) * 100) / 100);
				break;
			case 'triangle':
				resolve((values[0] * values[1]) * 0.5);
				break;
			default:
				reject([-1]);
				break;
		}
	});
};

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, valuesArr) => {
	return new Promise(async (resolve, reject) => {
		let areas = [];

		for (let i = 0; i < shapes.length; i++) {
			await calculateArea(shapes[i], valuesArr[i])
				.then(area => areas.push(area))
				.catch(error => reject(error));
		}

		resolve(areas);
	});
};

(async () => {
	const areas = await getAreas(
		['square', 'rectangle', 'circle', 'triangle'],
		[[2], [3,4], [5], [2,4]],
	);

	console.log('areas >>', areas);
})();

