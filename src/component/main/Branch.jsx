import { Grade } from "./Grade.jsx"

export function Branch({ branchName, branchGrades }) {
	let gradeList = [];

	for (const grade of branchGrades) {
        console.log(grade);
		gradeList.push(<Grade key={grade} grade={grade}/>);
	}

	return (
		<>
			<div className="gradeBox">
				<span className="branchName">{branchName} :</span>
				<div>{gradeList}</div>
			</div>
		</>
	);
}
