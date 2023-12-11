import { Branch } from "./Branch.jsx"

export function Card({ gradesData }) {

	let branchList = []

    for (const branch in gradesData["grades"]) {
		branchList.push(<Branch key={branch} branchName={branch} branchGrades={gradesData["grades"][branch]}  />)
    }

	return (
		<>
			<div className="card text-bg-light mb-3" style={{border: "none", width: "70%"}}>
				<div className="card-body">
					<h2 className="card-title fw-bold">{gradesData.name}</h2>
					<hr className="border-black" style={{opacity: "0.01", margin: "0px"}} />
					{branchList}
				</div>
			</div>
		</>
	);
}