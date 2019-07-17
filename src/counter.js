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
                <input type = "text"/>
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
    return(
        {
            ctr: state.counter
        }
    )

}

const mapActionToProps = (dispatch) => {
    return(
        {
            increment: () => {
                return(dispatch({type: "ADDER"}))
            },

            subtractor: () => {
                return(dispatch({type: "SUB"}))
            },

            multiplier: () => {
                return(dispatch({type: "MULT"}))
            },

            divider: () => {
                return(dispatch({type: "DIV"}))
            }


        }
    )
}
export default connect(mapStateToProps, mapActionToProps)(Counter)

