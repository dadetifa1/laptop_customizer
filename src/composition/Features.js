import React from 'react'
import Parts from './Parts'


class Features extends React.Component{
    render(){
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Parts 
                onFeatureChange={this.props.onFeatureChange}
                selected={this.props.selected}
                features={this.props.features} />
          </form>
        )
    }
}

export default Features; 