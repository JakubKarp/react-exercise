import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
	
		
	render() {
		return (
			<ul>
			{
				this.props.taski.map( elem => <Todo dodo={elem}/>
				)
			}
			
			</ul>
		)
	}
}

export default TodoList;