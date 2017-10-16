import React from 'react';

export default class SubmitButton extends React.Component {

    render() {
        return <button type={"submit"} onClick={this.props.onClick} className={this.props.className} >{this.props.children}</button>
    }
}