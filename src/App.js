import React from 'react';
import FurnitureRuleList from './FurnitureRuleList';
import AddFurnitureRule from './AddFurnitureRule';
import './App.css';
import EditFurnitureRule from './EditFurnitureRule';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      type: '',
      cost: '',
      furnitureRule: {},
      furnitureRules: [],
      editing: false
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteFurnitureRule = this.deleteFurnitureRule.bind(this);
    this.addFurnitureRule = this.addFurnitureRule.bind(this);
    this.editFurnitureRule = this.editFurnitureRule.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.updateFurnitureRule = this.updateFurnitureRule.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    this.setState({
      [name]:value
    })
  }

  addFurnitureRule(event){
    event.preventDefault()
    if (!this.state.type) return;
    const furnitureRule = {
      id: this.state.furnitureRules.length + 1,
      type: this.state.type,
      cost: this.state.cost,
      age: this.state.age,
      code: this.state.code,
      userId: this.state.userId,
    };

    console.log(furnitureRule);
    this.setState({
      type: '',
      cost: '',
      furnitureRule: furnitureRule,
      furnitureRules: [...this.state.furnitureRules, furnitureRule]
    })
    console.log(this.state.furnitureRules);
  }

  deleteFurnitureRule(id) {
    const furnitureRules = this.state.furnitureRules.filter( item => item.id !== id );
    this.setState({furnitureRules: furnitureRules});
    if(this.state.editing === true) {
      window.location.reload();
    }
  }



  editFurnitureRule(furnitureRule) {
    this.setEditing(true);
    this.setState({
      type:furnitureRule.type,
      cost:furnitureRule.cost,
      furnitureRule: furnitureRule
    });
    console.log(furnitureRule);
  }

  setEditing(value) {
    if(typeof value !== 'boolean') { throw " This value must either be true or false"}
    this.setState({
      editing: value
    })
  }

  updateFurnitureRule(event) {
    event.preventDefault();
    const updatedFood = this.state.type;
    const updatedCost = this.state.cost;
    const updatedFurnitureRule = Object.assign({}, this.state.furnitureRule, { type: updatedFood, cost: updatedCost })
    const furnitureRules = this.state.furnitureRules.map((furnitureRule) => (furnitureRule.id === this.state.furnitureRule.id ? updatedFurnitureRule : furnitureRule));
    this.setState({ type:'', cost: '', furnitureRules: furnitureRules});
  }

  render() {
    const { cost, type, furnitureRules, editing } = this.state;
      return (
        <div className="App">
          <div className="row App-main">
            <FurnitureRuleList 
              furnitureRules= {furnitureRules} 
              deleteFurnitureRule={this.deleteFurnitureRule}
              editFurnitureRule={this.editFurnitureRule}
            />
          </div>
          <div className="row App-main">
          { 
            editing  ? (
            <EditFurnitureRule 
             type={this.state.type}
             cost={this.state.cost} 
             age={this.state.age}
             code={this.state.code}
             handleInputChange={this.handleInputChange}
             setEditing={this.setEditing}
             updateFurnitureRule={this.updateFurnitureRule}
            />
            ) : (
            <AddFurnitureRule 
              type={this.state.type}
              cost={this.state.cost} 
              handleInputChange={this.handleInputChange} 
              addFurnitureRule={this.addFurnitureRule}
            />
            )
          }
          </div>
        </div>
      );
    }
}


/*function App(data) {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}*/

export default App;
