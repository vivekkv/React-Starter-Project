import React from 'react';

export default class FormContainer extends React.Component {

    render() {
        
        return (<div className="form_content_wrapper">

            <span className="font_header">
                <i className={"fa " + this.props.icon} aria-hidden="true"></i>{this.props.title}
            </span>

            <div className="form_content">

                {this.props.children}

            </div>

        </div>)
    }
}