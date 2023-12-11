export function Grade({ grade }) {

    let DefaultGradeStyle = "grade "
    let GradeStyle

    if (grade <= 4){
        GradeStyle = DefaultGradeStyle + "redBox"
    }
    if (grade >= 4) {
        GradeStyle = DefaultGradeStyle + "orangeBox"
    }
    if (grade >= 5) {
        GradeStyle = DefaultGradeStyle + "greenBox"
    }


	return <>
        <span className={GradeStyle}>
            {grade}
            </span>    
    </>
}
