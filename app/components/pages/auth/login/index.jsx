import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Form from '../../../presentational/form';
import Input from '../../../presentational/input';
import Row from '../../../presentational/row';
import Column from '../../../presentational/column';
import SubmitBtn from '../../../presentational/button/submit'
import ActionBuilder from '../../../../reduxImplementations/actionBuilder'
import { showValidations, clearValidation } from '../../../../utils/validation'
import validate from 'validate.js';
import Styles from './styles.css';

class Login extends React.Component {

    render() {

        return <div className={Styles.login_wrapper}>

            <div className={Styles.login_content}>

                <div className={Styles.login_logo_wrapper}>

                    <img src="/assets/img/logo.png" title="Apvera Login" />

                </div>

                <div className={Styles.login_form_content}>

                    <Form onSubmit={this.loginSubmit.bind(this)}>

                        <Row className={Styles.row}>

                            <Column label=" " size="full">

                                <Input className={Styles.login_form_input} name="UserName" value={this.props.data.get("UserName")} placeholder="Enter username" onChange={this.props.onChange} />

                            </Column>

                        </Row>

                        <Row className={Styles.row}>

                            <Column label=" " size="full">


                                <Input type="password" className={Styles.login_form_input} name="Password" value={this.props.data.get("Password")} placeholder="Enter password" onChange={this.props.onChange} />

                            </Column>

                        </Row>

                        <Row className={Styles.row}>

                            <SubmitBtn className={Styles.login_form_submitbtn}><i className="fa fa-bars" aria-hidden="true"></i> Sign In</SubmitBtn>

                        </Row>

                    </Form>

                </div>


            </div>

        </div>
    }

    loginSubmit(e) {

        e.preventDefault();

        let validations = validate(this.props.data.toObject(), { 'UserName': { 'presence': true }, 'Password': { 'presence': true } });

        if (!validations) {

            clearValidation();
            this.props.dispatch(ActionBuilder("AUTH", "LOGIN_SUBMIT_FORM"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }    
    }
}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.auth.login)
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch,
        onChange: function(name, value) {
            dispatch(ActionBuilder("AUTH", "LOGIN_INPUT_CHANGED", { name, value }));
        }
    }
}

export default connect(
    storeState,
    mapDispatchToProps
)(Login);
