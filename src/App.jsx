import { AllAverageCategory } from './component/resum/AllAverageCategory.jsx';
import { Card } from './component/main/Card.jsx';

function App() {
	const gradesData = {
		name: 'Ehouarn Duriaux',
		grades: {
			MATU: { Math: [3.5, 1.5, 3.0, 1.0], Histoire: [2.0, 5.5, 4.5, 5.5, 4.0], Anglais: [4.0, 1.0, 1.0, 6.0], Economie: [5.5, 3.0, 5.5, 5.5, 3.5], Allemand: [3.0, 1.0, 2.0, 1.0, 1.5, 2.5] },
			EPSIC: { Math: [3.0, 5.0, 6.0, 2.0], Histoire: [1.0, 1.5, 5.0, 1.5, 5.5, 2.0], Anglais: [4.0, 5.5, 1.5], Economie: [5.5, 2.0, 5.5, 2.5, 3.0, 6.0], Allemand: [4.5, 2.0, 4.5, 1.5, 2.0, 1.0] },
			CIE: { 187: [4.5], 104: [5.5], 181: [3.5], 200: [1.5], 196: [2.0, 6] },
		},
	};

	return (
		<>
			<div className="container d-flex gap-3">
				<Card gradesData={gradesData} />
				<AllAverageCategory categorys={gradesData['grades']} />
			</div>
		</>
	);
}

export default App;
