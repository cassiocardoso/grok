/**
 * Given a list of points, an origin, and a distance(`k`), return the closest point to the origin
 */

function findKClosestPoints(points, origin, k) {
	if (!points) {
		throw new Error('List of points is required');
	}

	if (!origin) {
		throw new Error('Origin is required');
	}

	if (!k) {
		throw new Error('Distance is required');
	}

	if (points.length <= k) {
		return points;
	}

	let curMaxDistance;
	let kClosestPoints = [];

	for (let i = 0; i < points.length; i++) {
		const point = points[i];
		const distanceToOrigin = calculateDistance(origin, point);

		if (!curMaxDistance || distanceToOrigin <= curMaxDistance) {
			if (kClosestPoints.length >= k) {
				const indexOfMaxPoint = kClosestPoints.findIndex(({ distanceToOrigin }) => distanceToOrigin === curMaxDistance);
				kClosestPoints.splice(indexOfMaxPoint, 1);
				curMaxDistance = indexOfMaxPoint;
			}

			kClosestPoints.push({ point, distanceToOrigin });
		}
	}

	const closest = kClosestPoints.pop();
	console.log(`Closest point to origin: ${origin} within distance k=${k} is: ${closest.point} with distance of: ${closest.distanceToOrigin}`);

	return closest.point;
}

// Math.sqrt((b2-b1)^2 + (a2-a1)^2)
function calculateDistance(origin, point) {
	return Math.sqrt(Math.pow(point[0] - origin[0], 2) + Math.pow(point[1] - origin[1], 2))
}

const points = [[1,1], [3,2], [1,0], [7,10], [6,6], [4,2]];

// Test cases
findKClosestPoints(points, [0,0], 2);
findKClosestPoints(points, [3,2], 1);
findKClosestPoints(points, [4,0], 5);
