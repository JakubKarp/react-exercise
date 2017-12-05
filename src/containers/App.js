import React from 'react';



class Todo extends React.Component {
	render() {
		return (
			<li>{this.props.taski.text}</li>
			
		)
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
			
				/*this.props.taski.map( elem => <Todo dodo={elem}/>)*/
				<Todo taski={this.props} />
	
			</ul>
		)
	}
}

var tasky = 
	{
		text: 'val',
        /*id: uuid.v4()*/
		bom: 'tom'
	};
	

class App extends React.Component {
	constructor(props){
        super(props);
	}
	
render() {
	return (
		<div>
			<TodoList taski={tasky} />
		</div>
		)
	}
}




export default App;






