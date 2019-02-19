import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


class ListComponent extends Component {
  render() {
    return (
      <div className="ltable">
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
            {this.props.data.map((element,index)=>{
            
            return(
            <tr key={index}>
                <td>{element._id}</td>
                <td>{element.name}</td>
                <td>{element.gender}</td>
            </tr>
            )
            })
        }
            </tbody>
        </Table>
      </div>
    );
  }
}

export default ListComponent;
