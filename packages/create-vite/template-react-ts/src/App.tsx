import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="fixed h-screen w-screen bg-gray-800">
			<div className="absolute inset-x-0 top-72 mx-auto flex h-fit w-fit gap-2">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="w-32 hover:scale-110 active:scale-90 duration-75 ease-in-out " alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="w-32 hover:scale-110 active:scale-90 duration-75 ease-in-out " alt="React logo" />
				</a>
			</div>
			<h1 className="absolute inset-x-0 top-44 mx-auto h-fit w-fit text-[5rem] font-bold text-white">Vite + React</h1>
			<div className="absolute inset-x-0 bottom-96 mx-auto h-fit w-fit text-2xl font-bold text-white flex gap-2 items-center">
				<button className="w-fit h-fit bg-blue-600 p-2 rounded-md hover:outline-4 hover:outline-blue-400 hover:outline hover:-outline-offset-4 duration-75 ease-in-out active:scale-95" type="button" onClick={() => setCount(countArg => countArg + 1)}>
					Count
				</button>
				<p className=""> is {count}</p>
			</div>
		</div>
	);
};

export default App;
