
import React from "react";
import { Component } from "react";
import './module.css';

class Module extends Component {
    constructor() {
        super()
        this.state = {
            modul:[
                {id:1 , Modul: 'React JS', Cfs: 6},
                {id:2 , Modul: 'Laravel', Cfs: 6},
                {id:3 , Modul: 'MySQL pros', Cfs: 3},
                {id:4 , Modul: 'MongoDB', Cfs: 1}
            ],
            moyen:0
        }
    }
    
    avrege = () =>{
        const inputs = document.querySelectorAll('.note')
        const note_01 = inputs[0].value ? inputs[0].value * 6 : 0;
        const note_02 = inputs[1].value ? inputs[1].value * 6 : 0;
        const note_03 = inputs[2].value ? inputs[2].value * 3 : 0;
        const note_04 = inputs[3].value ? inputs[3].value * 1 : 0;
        let nm = (note_01 + note_02 + note_03 + note_04)/16;
        console.log(nm)
        this.setState({moyen : nm})
        this.props.getdata(this.state.moyen)
}
    render() {
        return <div className="table">
            <table className="MoCfMy">
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Cfs</th>
                        <th>Note</th>
                    </tr>
                </thead>
                {
                    this.state.modul.map(inf =>
                        <tbody key={inf.id}>
                            <tr>
                                <td>{inf.Modul}</td>
                                <td>{inf.Cfs}</td>
                                <td className="notes"><input onChange={this.avrege} defaultValue={this.props.oldUser.moyen} type="number" max={20} min={0} className="note" /></td>
                            </tr>
                        </tbody>
                    )
                }
            </table>

            <div className="moyen">
                <label htmlFor="moyen">Moyen:</label>
                <input className="readMoyen" defaultValue={this.state.moyen} readOnly  type="text" />
            </div>
        </div>
    }
}




export default Module;