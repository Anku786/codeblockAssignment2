import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newItem:'',
      list:[]
    }
  }

  addItem(){
    const newItem={
      id: 1+ Math.random(),
      value: this.state.newItem
    };

    const list=[...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem:''
    });
  }

  add(key,value){
    this.setState({
      [key]:value
    });
  }

  deleteItem(id){
    const list=[...this.state.list];
    const newList=list.filter(item=> item.id!==id);
    this.setState({
      list: newList
    });
  }

  render(){
    return(
      <div>
        <div>
        <h3>
          Todo List
        </h3>
        <input type="text"
        placeholder="Add a Task"
        value={this.state.newItem}
        onChange={(e)=>this.add('newItem',e.target.value)}
        />
        <button
        onClick={(e)=>this.addItem()}
        ><b>Add Todo</b></button>
        <br/>
      </div>
      <div>
      <ol>
          {this.state.list.map(item => {
            return(
            <li key={item.id}
            >        
              {item.value}  
              <button
              onClick={() => this.deleteItem(item.id)}
              >Delete Todo</button>
            </li>
            )
          })}
        </ol>
      </div>
      </div>
    )
  }
}

export default App;