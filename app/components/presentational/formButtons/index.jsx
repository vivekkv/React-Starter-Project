import React from 'react';

export default class FormButtons extends React.Component {

    render() {
        
        return (<div className="form_button_wrapper">
            <button type="reset" onClick={this.props.onResetForm}><i className="fa fa-eraser" /> RESET</button>
            <button type="submit"><i className="fa fa-plus" /> SUBMIT</button>
        </div>)
    }
}