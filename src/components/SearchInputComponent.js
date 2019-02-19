import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from  'react-bootstrap/Form';

class SearchInputComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            input:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        if(e.target.value)
        this.setState({input:e.target.value})
    }
    
  render() {
    return (
          <Form className="searchComp">
              <Form.Control className="tInput" placeholder="Search Here" onChange={(e)=>this.handleChange(e)}></Form.Control>
              <Button onClick={()=>this.props.submitResult(this.state.input)}>Search</Button>
            </Form>
      
    );
  }
}

export default SearchInputComponent;
