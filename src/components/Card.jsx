import React from 'react';
import { getMessage } from '../apis/index';

class Card extends React.Component {
    state = {
        message: ""
    }
    
    componentDidMount() {
        this.getApiMessage();
    }

    async getApiMessage() {
        const result = await getMessage();
        const message = result.data.message;
        this.setState({
            message: message
        })
    }

    render() {
        return(
            <>
                <h4>I'm a Card</h4>
                <h5>{this.state.message}</h5>
            </>
        );
    }
}

export default Card;