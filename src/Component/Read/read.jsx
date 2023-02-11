import React from "react";
import { Component } from "react";
import "./read.css";

class Read extends Component {
  render() {
    return (
      <div className="read_1">
        <table className="tbl_read">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Moyen</th>
              <th>Properties</th>
            </tr>
          </thead>
          {this.props.listStudent.map((srt) => (
            <tbody key={srt.id}>
              <tr>
                <td>{srt.fname}</td>
                <td>{srt.lname}</td>
                <td>{srt.moyen}</td>
                <td>
                  <button onClick={() => this.props.delete(srt.id)}>
                    Delete
                  </button>
                  <button onClick={() => this.props.edit(srt)}>Update</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Read;
