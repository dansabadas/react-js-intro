# react-js-intro
# https://reactjs.org/
# https://jscomplete.com/repl/

const Button0 = (props) => {
	return (
  	<button>Go {props.label}</button>
  );
};

class Button extends React.Component{
	//state = {counter: 0};
  handleClick = () => {
  	//this.state.counter += 1;
    // this.setState({	// this is async just schedules an update
    // 	counter: this.state.counter + 1
    // });
    // this.setState((prevState) => ({ //prevState usage prevents race conditions
    //   	counter: prevState.counter + 1
    //   }));
    this.props.onClickFunction(this.props.incrementValue);
  };
  
  // constructor(props){
  // super(props);
  //   this.state = {counter: 0};
  // }
  //    	// <button onClick={this.handleClick}>	// comments cannot be places inside the Render return!
      	//Go {this.state.counter}
        //<button onClick={()=>this.props.onClickFunction(this.props.incrementValue)}>
	render(){
    return (
    	<button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  );
};

class App extends React.Component{
	state = {counter: 0};
  
  incrementCounter = (incrementValue) => {
  	  this.setState((prevState) => ({
      	counter: prevState.counter + incrementValue
      }));
  };
  
	render(props){
    return (
    	<div>
    	  <Button incrementValue = {1} onClickFunction={this.incrementCounter} />
        <Button incrementValue = {10} onClickFunction={this.incrementCounter} />
        <Button incrementValue = {100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
    	</div>
    );
  }
}

//React.createElement("button", null, "Go")
//ReactDOM.render(<Button0 label="Do" />, mountNode);
ReactDOM.render(<App label="DoC" />, mountNode);
/////////////////////////////////////////////////////
// Write JavaScript here and press Ctrl+Enter to execute
const Card = (props) => {
	return (
  	<div styles="{{margin: '1em'}}">
  	  <img width="75" src={props.avatar_url} />
      <div styles="{{display: 'inline-block', marginLeft: 10}}">
        <div styles="{{fontSize: '2.25em', fontWeight: 'bold'}}">
        	{props.name}
        </div>
        <div>{props.company}</div>
      </div>
  	</div>
  );
};


        
const CardList = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card key={card.id} {...card} />)}
  	</div>
  );
};
//ref={(input) => this.userNameInput = input}
class Form extends React.Component {
	state = {userName: ''};
	handleSubmit = (event) => {
  	event.preventDefault();
    //console.log('Form submit!', this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(resp => {
    	//console.log(resp);
      this.props.onSubmit(resp.data);
      this.setState({userName: ''});
    });
  };
  
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
        	type="text" 
          placeholder="Github username" 
          value={this.state.userName}
          onChange={(event)=> this.setState({ userName: event.target.value })}
          required />
        <button type="submit">Add card</button>
    	</form>
    );
  }
}

class App extends React.Component {
  state = {
    cards: [
      {
        name: "Dan Sabadis",
        company: "Siemens",
        avatar_url: "https://avatars0.githubusercontent.com/u/3495406?v=4"
      },
      {
        name: "Dan Sabadis",
        company: "Siemens",
        avatar_url: "https://avatars0.githubusercontent.com/u/3495406?v=4"
      }
    ]
	};
  
  addNewCard = (cardInfo) => {
  	this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  };
  
	render() {
  	return (
    	<div>
  	  	<Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
  		</div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
////////////////////////////////
const Stars = (props) => {
	const numberOfStars = 1 + Math.floor(Math.random()*9);
  // let stars = [];//{stars}
  // for(let i = 0; i < numberOfStars; i += 1){
  // 	stars.push(<i key={i} className="fa fa-star"></i>);
  // }
  
	return (
  	<div className="col-5">
  	 {_.range(numberOfStars).map(i =>
     	<i key={i} className="fa fa-star"></i>
		)}
  	</div>
  );
};

const Button = (props) => {
	return (
  	<div className="col-2">
  	  <button>=</button>
  	</div>
  );
};

const Answer = (props) => {
	return (
  	<div className="col-5">
      <span>{5}</span>
      <span>{6}</span>
    </div>
  );
};

const Numbers = (props) => {
	//const arrayOfNumbers = _.range(1, 10);//this is preloaded lo-dash
  
	return (
  	<div className="card text-center">
  	  <div>
      	{Numbers.list.map((number, i) => 
        	<span key={i}>{number}</span>
				)}
      </div>
  	</div>
  );
};

Numbers.list = _.range(1, 10);

class Game extends React.Component {
	render() {
  	return (
    	<div className="container">
  	  	<h3>play nine</h3>
        <hr/>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
  		</div>
    );
  }
}

class App extends React.Component {
	render() {
  	return (
    	<div>
  	  	<Game />
  		</div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
//--------------------------------------------
.fa-star {
	margin: 0.5em;
  font-size: 24px;
}

span {
	display: inline-block;
  margin: 0.5em;
  text-align: center;
  background-color: #ccc;
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
}

.selected {
	background-color: #eee;
  color: #ddd;
  cursor: not-allowed;
}

.used {
	background-color: #aaddaa;
  color: #99bb99;
}