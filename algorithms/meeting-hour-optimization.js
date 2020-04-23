/**
 * Given a list of meetings, return a list of the ones that you should attend on the day
 */

const meetings = [
	{
		name: 'AHM',
		hours: 1.5,
	},
	{
		name: 'Standup',
		hours: 0.25,
	},
	{
		name: 'Pair session',
		hours: 1,
	},
	{
		name: '1:1',
		hours: 0.5,
	},
	{
		name: 'Tech review',
		hours: 1.5,
	},
	{
		name: 'No idea',
		hours: 1,
	},
	{
		name: 'Team Lunch',
		hours: 1,
	},
	{
		name: 'Pair session II',
		hours: 1.5,
	},
	{
		name: 'Brainstorm',
		hours: 0.5,
	},
	{
		name: 'Budget planning',
		hours: 1.5,
	},
	{
		name: 'OKRs definition',
		hours: 1,
	},
];

function sortMeetings(first, second) {
	return first.hours - second.hours
}

function optimizeNumberOfMeetings(meetings, hours) {
	const sorted = meetings.sort(sortMeetings);
	let dailyMeetings = [];
	let dailyHoursOnMeetings = 0;

	for (let i = 0; i < sorted.length; i++) {
		const temp = dailyHoursOnMeetings + meetings[i].hours;

		if (temp <= hours) {
			dailyMeetings.push(meetings[i]);
			dailyHoursOnMeetings += meetings[i].hours;
		} else {
			break;
		}
	}

	return dailyMeetings;
}

// console.log('optimize number of meetings', optimizeNumberOfMeetings(meetings, 8));

function optimizeHoursInMeetings(meetings, hours) {
	let permutations = getPermutations(meetings);
	let closestSum = 0;
	let optimalMeetings;

	for (let i = 0; i < permutations.length; i++) {
		let sum = permutations[i].reduce((sum, meeting) => sum + meeting.hours, 0);

		if (sum <= hours && (hours - sum) < (hours - closestSum)) {
			closestSum = sum;
			optimalMeetings = permutations[i]
		}
	}

	return optimalMeetings;
}

function getPermutations(meetings) {
	if (meetings.length === 1) {
		return [[], meetings];
	}

	let firstMeeting = meetings[0];
	let permutations = getPermutations(meetings.slice(1));

	for (let i = 0; i < meetings.length; i++) {
		let copy = permutations[i].slice();
		copy.push(firstMeeting);
		permutations.push(copy)
	}

	return permutations;
}

const meetings2 = [
	{
		name: 'AHM',
		hours: 1.5,
	},
];

console.log('hours in meetings', optimizeHoursInMeetings(meetings, 8));
