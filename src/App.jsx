import { AllAverageCategory } from './component/resum/AllAverageCategory.jsx';

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

	return (
		<>
			<div className="container d-flex gap-3">
        <AllAverageCategory categorys={category} />
        <div></div>
      </div>
		</>
	);
}

export default App;
