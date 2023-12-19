import { Branch } from './Branch.jsx';

export function Card({ gradesData }) {
	let branchList = [];

	const url = new URL(window.location.href);

	for (const branch in gradesData['grades'][url.searchParams.get('p')]) {
		branchList.push(<Branch key={branch} branchName={branch} branchGrades={gradesData['grades'][url.searchParams.get('p')][branch]} />);
	}

	return (
		<>
			<div className="card text-bg-light mb-3" style={{ border: 'none', width: '70%' }}>
				<div className="card-body">
					<h2 className="card-title fw-bold">{gradesData.name}</h2>
					<hr className="border-black" style={{ opacity: '0.01', margin: '0px' }} />
					<table className="table">
						<thead>
							<tr>
								<td>Name</td>
								<td>Grades</td>
								<td style={{ textAlign: 'center' }}>Averages</td>
							</tr>
						</thead>
						<tbody>{branchList}</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
