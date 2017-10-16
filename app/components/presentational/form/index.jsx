import React from 'react';

export default class Form extends React.Component {
    
    constructor() {
        super();
    }

    render() {
        
        return (<form className={this.props.className} onSubmit={this.props.onSubmit}>{this.props.children }</form>)
    }
}