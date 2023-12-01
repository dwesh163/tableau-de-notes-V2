export function AverageCategory({ category }) {
    console.log(category);

    let percentClass

    if (category.percent > 0) {
        percentClass='card-text green'
    } else {
        percentClass='card-text red'
    }

	return (
		<>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<p className="card-text gray">Moyenne générale {category.name}</p>
					<p className={percentClass}>{category.percent}%</p>
				</div>
				<h3 className="fw-bold">{category.average}</h3>
			</div>
			<hr className="border-black" style={{opacity: "0.15", margin: "0px"}} />
		</>
	);
}
