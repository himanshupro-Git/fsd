import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	function handleCount() {
		setCount(count + 1)
	}

	return (
		<div className="flex justify-center items-center h-screen">
			
			<div className="border-2 border-black rounded-lg p-6 w-60">
				
				<h1 className="border-2 border-black p-2 text-center mb-4 bg-gray-200">
					Hello Tailwind v4!
				</h1>

				<button
					className="border-2 border-black p-2 w-40 bg-blue-200"
					onClick={handleCount}
				>
					count is {count}
				</button>

			</div>

		</div>
	)
}

export default App