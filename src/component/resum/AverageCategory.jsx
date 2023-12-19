export function AverageCategory({ category, IsLast, name }) {
	console.log(category);

	let percentClass;
	let hr;
	let branchAverage = [];
	let popBranchAverage = [];

	for (const branch in category) {
		branchAverage.push(calculateAverage(category[branch]));
	}

	for (const branch in category) {
		if (category[branch].length >= 2) {
			category[branch].pop();
			popBranchAverage.push(calculateAverage(category[branch]));
		} else {
			popBranchAverage.push(0);
		}
	}

	console.log('popBranchAverage', popBranchAverage, branchAverage);

	let percent = calculatePercentage(calculateAverage(popBranchAverage), calculateAverage(branchAverage));

	if (percent > 0) {
		percentClass = 'card-text green';
	} else {
		percentClass = 'card-text red';
	}

	if (!IsLast) {
		hr = <hr className="border-black" style={{ opacity: '0.15', margin: '0px' }} />;
	}

	return (
		<>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<p className="card-text gray">Moyenne générale {name}</p>
					<p className={percentClass}>{percent}%</p>
				</div>
				<h3 className="fw-bold">{calculateAverage(branchAverage)}</h3>
			</div>
			{hr}
		</>
	);
}

function calculateAverage(array) {
	if (array.length === 0) {
		return 0;
	}

	var sum = array.reduce(function (acc, value) {
		return acc + value;
	}, 0);

	var average = sum / array.length;

	return roundToNearest(average, 0.01);
}

function calculatePercentage(oldValue, newValue) {
	var percentage = ((newValue - oldValue) / oldValue) * 100;

	return roundToNearest(percentage, 0.001);
}

function roundToNearest(value, step) {
	step || (step = 1.0);
	var inv = 1.0 / step;
	return Math.round(value * inv) / inv;
}
