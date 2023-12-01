import { AverageCategory } from "./AverageCategory.jsx"

export function AllAverageCategory({categorys}) {

    let AverageCategoryList = []
    let IsLast

    const categoryKeys = Object.keys(categorys);

    for (let i = 0; i < categoryKeys.length; i++) {
        const category = categoryKeys[i];
        const IsLast = i === categoryKeys.length - 1;
    
        AverageCategoryList.push(<AverageCategory key={category} category={categorys[category]} IsLast={IsLast} />);
    }
    

    return <div className="card text-bg-light mb-3" style={{border: "none"}}>
       {AverageCategoryList}
    </div>
}
