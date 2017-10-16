import React from 'react';

export default class Input extends React.Component {

    render() {
        return (<input tabIndex={this.props.tabIndex}
            value={this.props.value ? this.props.value : ""}
            onChange={this.onChange.bind(this)}
            type={this.props.type}
            maxLength={this.props.maxLength}
            name={this.props.name}
            disabled={this.props.disabled}
            autoFocus={this.props.autoFocus}
            className={this.props.className}
            checked={this.props.checked}
            placeholder={this.props.placeholder}
        />)
    }

    onChange(e) {

        if (this.props.onChange && this.props.type != "checkbox") {

            this.props.onChange(this.props.name, e.target.value);
        } 
    }

}