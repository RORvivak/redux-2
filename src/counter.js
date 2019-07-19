import React, {Component} from 'react'
import {connect} from 'react-redux';

class Counter extends Component {
    render(){
        return(
        <div>    
            <div align = "center">
                <label>{this.props.ctr}</label>
            </div> 
            
            <div align = "center">
                <input type = "text" onChange = {(e) => this.props.change(e)}/>
            </div>
            <div align = "center">    
                <button onClick ={this.props.increment}>ADD</button>
                <button onClick ={this.props.subtractor}>Subtract</button>
                <button onClick ={this.props.multiplier}>Multiply</button>
                <button onClick ={this.props.divider}>Div</button>
            </div>    
        </div>    
        )
    }      
}

const mapStateToProps = (state) => {
    // const {ctr, test} = {...state}
    
    return(
        {
            ctr: state.counter
        }
    )

}

const mapActionToProps = (dispatch) => {
    return(
        {
            increment: (value) => {
                return(dispatch({type: "ADDER", payload: {value}}))
            },

            subtractor: () => {
                return(dispatch({type: "SUB"}))
            },

            multiplier: () => {
                return(dispatch({type: "MULT"}))
            },

            divider: () => {
                return(dispatch({type: "DIV"}))
            },

            change: (event) => {
                return(dispatch({type: "SET", payload: {val: event.target.value}}))
            }




        }
    )
}
export default connect(mapStateToProps, mapActionToProps)(Counter)

