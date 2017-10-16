import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';

export default class Root extends React.Component {

    render() { 
        return <div className="root_container">{this.props.children}</div>
    }
}
