import React from 'react';
import Bulb from './Bulb';
import '../css/light.css';

class Light extends React.Component {

    bulbs = () => {
        return ['red', 'yellow', 'green'].map((color) => {
            return <Bulb key={color} color={color} state={this.props.state} />
        })
    }

    render() {
        return (
            <div className="light">
                {this.bulbs()}
            </div>
        )
    }
}

export default Light;