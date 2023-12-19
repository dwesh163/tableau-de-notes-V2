import { AllAverageCategory } from './component/resum/AllAverageCategory.jsx';
import { Card } from './component/main/Card.jsx';

function App() {
	const gradesData = {
		name: 'Ehouarn Duriaux',
		grades: {
			MATU: { Math: [6.0, 3.5, 3.0, 5.0, 1.5], Histoire: [1.5, 5.0, 6.0], Anglais: [3.0, 3.5, 5.5, 4.5], Economie: [6.0, 6.0, 5.5, 5.5, 4.0], Allemand: [1.5, 1.0, 4.0, 4.5, 3.5] },
			EPSIC: { Math: [2.5, 2.5, 5.5, 4.0], Histoire: [4.0, 1.5, 4.5], Anglais: [6.0, 2.0, 6.0, 1.5], Economie: [5.5, 5.0, 2.5, 3.5], Allemand: [1.5, 2.0, 3.0, 1.0] },
			CIE: { Math: [2.0, 1.0, 4.5, 4.5, 4.5], Histoire: [1.0, 3.0, 4.5], Anglais: [1.5, 4.0, 2.5, 1.5], Economie: [2.5, 1.0, 2.5, 2.5, 1.0], Allemand: [3.0, 4.5, 4.5] },
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
