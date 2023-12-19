import { Grade } from './Grade.jsx';

export function Branch({ branchName, branchGrades }) {
	let gradeList = [];
	let key = 0;

	for (const grade of branchGrades) {
		gradeList.push(<Grade key={key} grade={grade} />);
		key += 1;
	}

	return (
		<tr>
			<td>
				<span className="branchName">{branchName} :</span>
			</td>
			<td>{gradeList}</td>
			<td style={{ textAlign: 'center' }}>{calculateAverage(branchGrades)}</td>
		</tr>
	);
}

function calculateAverage(array) {
	console.log(array);
	if (array.length === 0) {
		return 0;
	}

	var sum = array.reduce(function (acc, value) {
		return acc + value;
	}, 0);

	var average = sum / array.length;

	return roundToNearest(average, 0.5);
}

function roundToNearest(value, step) {
	step || (step = 1.0);
	var inv = 1.0 / step;
	return Math.round(value * inv) / inv;
}
