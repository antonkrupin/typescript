import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';

const App = () => {
	const todos = [
		new Todo('first task'),
		new Todo('second task'),
	]
	return (
		<Todos items={todos} />
	)
}

export default App;
