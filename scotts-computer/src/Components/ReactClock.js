import React  from 'react';
import Clock from 'react-live-clock';

export default class ReactClock extends React.Component {
    render() {
        return <Clock format={'HH:mm'} ticking={true} timezone={'US/Eastern'} />
    }
}