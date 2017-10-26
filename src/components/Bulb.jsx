import React from 'react';
import '../css/light.css';


export default class Bulb extends React.Component {

    classList = () => {
        const getColor = (color) => typeof color === 'object' ? Object.keys(color).pop() : color;

        return [
            { class: 'bulb', set: true },
            { class: 'active', set: getColor(this.props.state) === this.props.color }
        ]
            .filter(c => c.set)
            .map(c => c.class)
            .join(' ')
            .trim();
    }

    render() {
        const style = {
            background: this.props.color
        }

        return <div className={this.classList()} style={style}></div>;
    }
}