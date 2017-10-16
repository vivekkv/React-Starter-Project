import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import FormContainer from '../../presentational/formContainer';
import Row from '../../presentational/row';
import Column from '../../presentational/column';
import Input from '../../presentational/input';
import FormButtons from '../../presentational/formButtons';
import Form from '../../presentational/form';
import Grid from '../../presentational/grid';
import ActionBuilder from '../../../reduxImplementations/actionBuilder';
import { showValidations, clearValidation } from '../../../utils/validation';
import validate from 'validate.js';

class UserPage extends React.Component {

    render() {

        return <div>

            <Row>

                <FormContainer title="Users" icon="fa-user">

                    <Form onSubmit={this.onUserSubmit.bind(this)}>
                        <Row>

                            <Column label="Name" size="threeColumn" required={true}>

                                <Input name="Name" value={this.props.data.get("Name")} onChange={this.props.onChange} />

                            </Column>

                            <Column label="Password" size="threeColumn" required={true}>

                                <Input name="Password" value={this.props.data.get("Password")} onChange={this.props.onChange} />

                            </Column>

                            <Column label="Role" size="threeColumn" required={true}>

                                <Input name="Role" value={this.props.data.get("Role")} onChange={this.props.onChange} />

                            </Column>

                        </Row>

                        <Row>

                            <FormButtons onResetForm={this.props.onResetForm} />


                        </Row>
                    </Form>

                </FormContainer>

            </Row>

            <Row>

                <Grid showFilter={false} dispatch={this.props.dispatch}
                    editAction={this.onEdit.bind(this)}
                    resultsPerPage={20}
                    primaryKey="Id" enableEdit={true} enableDelete={true}
                    data={this.props.data.get("UserList").toArray()}
                    columns={["Name", "Password", "Role", "Id"]} />

            </Row>

        </div>
    }

    onUserSubmit(e) {

        e.preventDefault();

        let validations = validate(this.props.data.toObject(), { 'Name': { 'presence': true }, 'Password': { 'presence': true }, 'Role': { 'presence': true } });

        if (!validations) {

            clearValidation();
            this.props.dispatch(ActionBuilder("MASTER_ENTRIES", "USERS_SUBMIT_FORM"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }

    }

    onEdit(id) {

        this.props.dispatch(ActionBuilder("MASTER_ENTRIES", "USERS_SUBMIT_EDIT_CLICK", { id }));
    }
}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.masterEntries.users),
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch,
        onChange: function (name, value) {
            dispatch(ActionBuilder("MASTER_ENTRIES", "USERS_INPUT_CHANGED", { name, value }));
        },
        onResetForm: function () {
            dispatch(ActionBuilder("MASTER_ENTRIES", "USERS_CLEAR_FORM"));
        }
    }
}

export default connect(
    storeState,
    mapDispatchToProps
)(UserPage);
