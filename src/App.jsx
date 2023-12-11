import { AllAverageCategory } from './component/resum/AllAverageCategory.jsx';
import { Card } from './component/main/Card.jsx';

function App() {

  const category = {
    "matu" : {
      "average" : 5.46,
      "percent" : +12.56,
      "name" : "matu"
    },
    "epsic" : {
      "average" : 3.62,
      "percent" : -13.51,
      "name" : "epsic" 
    },
    "cie" : {
      "average" : 1.43,
      "percent" : -17.17,
      "name" :  "cie"
    },
  }

  const gradesData = {
    "grades" : {
      "math" : [
        1,
        2,
        4,
        5,
      ],
      "histoire" : [
        1.5,
        4.5,
        4.5,
        6,
      ],
      "anglais" : [
        4.5,
        5.5,
        5.5,
        4.5,
      ],
      "economie" : [
        3.5,
        4.5,
        6,
        4.5,
      ],
      "allemand" : [
        3.5,
        2.5,
        4.5,
        6,
      ]
    },
    "name" : "HJksd"
  }
  
	return (
		<>
			<div className="container d-flex gap-3">
        <Card gradesData={gradesData}/>
        <AllAverageCategory categorys={category} />
      </div>
		</>
	);
}

export default App;
