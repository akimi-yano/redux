import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// connect is a function which returns a higher order component / a function which takes then a component as input 
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }


    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />

                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                
                {/* <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  /> */}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />

                {/* <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  /> */}
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                
                {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  /> */}
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}   />
                
                <hr/>

                {/* this button will display the array of results and if you click whats on the array, it will delete from tge array */}
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    ))}
                </ul>
                <img style={{width: '8%', height: '19%', position: 'absolute',left: 660+this.props.ctr*10}} src={process.env.PUBLIC_URL + 'pikachu.png'} /> 
            </div>
        );
    }
}

// the state is the state of our global store which has a property . counter which we can aceess in the component
const mapStateToProps = state  => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val:15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result:result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
}

// connect is a function that returns a function that takes a component as an argument 
// conect the component Counter with the function that returns {ctr: state.counter}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);