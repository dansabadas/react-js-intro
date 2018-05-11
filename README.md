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
