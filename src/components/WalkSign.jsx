import React from 'react';
import '../css/walk.css';


class WalkSign extends React.Component {
    render() {
        const signal = (state) => typeof state === 'object' ? Object.values(state).pop() : 'stop';

        return (
            <div className="sign">{signal(this.props.state)}</div>
        )
    }
}

export default WalkSign;