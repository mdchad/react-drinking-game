import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var library = ['React', 'Angular', 'Vue', 'Ember', 'Leaflet', 'Socket', 'Inferno', 'Mo', 'Vivus', 'Redux', 'Lodash', 'Underscore', 'Jquery'];

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class Main extends React.Component {
 constructor(props) {
   super(props);
   this.onChange = this.onChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.state = {items: [],text: ''};
}
onChange(e) {
   this.setState({text: e.target.value});
}
handleSubmit(e) {
   e.preventDefault();
   let newItem = this.state.items;
   let text = this.state.text.capitalizeFirstLetter();
   newItem.splice(0, 1, text);
   let newText = '';
   this.setState({items: newItem, text: newText});
}
 render() {
  return (
    <div className="container">
     <div className="inside-box">
      <h2>Javascript Drinking Game</h2>
      <Instruction />
     </div>
     <div className="answer">
     <form onSubmit={this.handleSubmit}>
       <input
         type="text"
         onChange={this.onChange}
         value={this.state.text}
         placeholder="Any word..." />
      </form>
      {/* this will compare the input that I submitted and compare with the library. It will show result if the is a library or else it will show an error */}
      {arrayIncludes(library, this.state.items) && <Result correct={this.state.items}/> }
      {!arrayIncludes(library, this.state.items) && this.state.items.length > 0 && <Error /> }
      </div>
     </div>
   )
  }
}
function arrayIncludes(arr1, arr2) {
 return arr1.some(function(item){
  return arr2.includes(item)
 })
}
const Result = (props)  => {
  return <div><p>There is a library called</p><h3> {props.correct + '.js'}</h3><p> Drink! Drink ! Drink! <i className="em em-beers"></i><i className="em em-beers"></i></p></div>;
}

const Error = ()  => {
    return <p>There is no such library. What are you witing for ???? Pick this word and start writing your own library<i className="em em-pencil"></i><i className="em em-pencil"></i></p>;
}

const Instruction = () => {
  return <p>Pick any word and enter it. If there is a javascript library that existed, drink</p>
}

ReactDOM.render(<Main />, document.getElementById('app'));