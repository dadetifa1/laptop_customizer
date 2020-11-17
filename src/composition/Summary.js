import React from 'react'
import Total from './Total'
import SummaryItem from './SummaryItem'


class Summary extends React.Component{
    render (){
        return(
            <>
                <h2>Your cart</h2>
                <SummaryItem selected={this.props.selected}></SummaryItem>
                <Total selected={this.props.selected}/>
            </>
        );
    }
}

export default Summary;