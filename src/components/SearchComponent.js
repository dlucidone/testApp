import React, { Component } from 'react';
import SearchInputComponent from './SearchInputComponent';
import ListComponent from './ListComponent';
import ProgressBar from 'react-bootstrap/ProgressBar'
import response from '../mock/response'
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: response,
            foundResult:true,
            searching:false
        }
        this.submitResult = this.submitResult.bind(this);
    }

    filterResult(val){
        let data =  this.state.data.filter(el=>{
            if(el._id == val || el.name === val ||el.gender === val){
                return el;
            }
        })
        if(
            data.length ){
            this.setState({searching:false})
             this.setState({data:data})

             } else{

            this.setState({searching:false})
            this.setState({foundResult:false})
            }
    }
    submitResult(val) {
        this.setState({searching:true})
        setTimeout(()=> this.filterResult(),3000);
        
    }
    render() {
        return (
            <div >
                <SearchInputComponent submitResult={this.submitResult} />
                {this.state.searching ? <ProgressBar now={60} /> :null}
                {this.state.foundResult && !this.state.searching ? <ListComponent data={this.state.data} /> : <p>Sorry No Match Found</p>}
            </div>
        );
    }
}

export default SearchComponent;
