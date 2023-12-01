import { AverageCategory } from "./AverageCategory.jsx"

export function AllAverageCategory({categorys}) {

    let AverageCategoryList = []

    for (const category in categorys) {
        AverageCategoryList.push(<AverageCategory key={category} category={categorys[category]} />)      
    }

    return <div className="card text-bg-light mb-3" style={{border: "none"}}>
       {AverageCategoryList}
    </div>
}
