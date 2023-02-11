import React, { Component } from "react";
import "./App.css";
import Module from "./Component/Module/module";
import Read from "./Component/Read/read";

class App extends Component {
  constructor() {
    super();
    this.state = {
      moyen: 0,
      listStudent: [
        { id: 1, fname: "Zakaria", lname: "Oubella", moyen: 12.25 },
        { id: 2, fname: "Charaf", lname: "Zitouni", moyen: 18.25 },
        { id: 3, fname: "Aymane", lname: "Benamer", moyen: 12.25 },
      ],
      oldUser : '',
    };
  }
  getdata = (data) => this.setState({ moyen: data });
  newAdd = () => {
    const firstName_v = document.getElementsByClassName("f_name")[0].value;
    const lastName_v = document.getElementsByClassName("l_name")[0].value;
    console.log(firstName_v, lastName_v);
    return this.setState({
      listStudent: [
        ...this.state.listStudent,
        {
          id: this.state.listStudent.length + 1,
          fname: firstName_v,
          lname: lastName_v,
          moyen: this.state.moyen,
        },
      ],
    });
  };

  edit = (user) => this.setState({oldUser : user})

  delete = (id) => this.setState({
    listStudent : [...this.state.listStudent.filter(std => std.id !== id)]
  })
  render() {
    return (
      <div className="Gestion_De_Note">
        <div className="topAll">
          <div className="name__field">
            <label htmlFor="fname">First Name: </label>
            <input
              className="f_name"
              name="fname"
              type="text"
              placeholder="First Name of your student"
            />
          </div>
          <div className="name__field">
            <label htmlFor="lname">Last Name: </label>
            <input
              className="l_name"
              name="lname"
              type="text"
              placeholder="Last Name of your student"
            />
          </div>
          <div className="addStudent">
            <button onClick={this.newAdd} className="add">
              Add New
            </button>
          </div>
        </div>
        <div className="Modul_1">
          <Module getdata={this.getdata} oldUser={this.state.oldUser} />
        </div>
        <div className="read_1">
          <Read listStudent={this.state.listStudent} edit={this.edit} delete={this.delete} />
        </div>
      </div>
    );
  }
}

export default App;
