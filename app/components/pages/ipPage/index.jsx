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

class IpPage extends React.Component {

    render() {

        return <div>

            <Row>
                <FormContainer title="IP" icon="fa-keyboard-o">

                    <Form onSubmit={this.onIpSubmit.bind(this)}>

                        <Row>

                            <Column label="IP" size="threeColumn" required={true}>

                                <Input name="IP" value={this.props.data.get("IP")} onChange={this.props.onChange} />

                            </Column>

                            <Column label="Description" size="threeColumn" required={true}>

                                <Input name="Description" value={this.props.data.get("Description")} onChange={this.props.onChange} />

                            </Column>


                        </Row>

                        <Row>

                            <FormButtons onResetForm={this.props.onResetForm}/>


                        </Row>
                    </Form>

                </FormContainer>
            </Row>

            <Row>

                <Grid showFilter={false} dispatch={this.props.dispatch}
                    editAction={this.onEdit.bind(this)}
                    resultsPerPage={20}
                    primaryKey="Id" enableEdit={true} enableDelete={true}
                    data={this.props.data.get("IpList").toArray()}
                    columns={["IP", "Description", "Id"]} />

            </Row>

        </div>
    }

    onIpSubmit(e) {

        e.preventDefault(); 

        let validations = validate(this.props.data.toObject(), { 'IP': { 'presence': true }, 'Description': { 'presence': true } });

        if (!validations) {

            clearValidation();
            this.props.dispatch(ActionBuilder("MASTER_ENTRIES", "IPPAGE_SUBMIT_FORM"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }

    }

    onEdit(id) {

        this.props.dispatch(ActionBuilder("MASTER_ENTRIES", "IPPAGE_SUBMIT_EDIT_CLICK",  { id }));
    }
}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.masterEntries.ipPage)
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch,
        onChange: function (name, value) {
            dispatch(ActionBuilder("MASTER_ENTRIES", "IPPAGE_INPUT_CHANGED", { name, value }));
        },
        onResetForm: function () {
            dispatch(ActionBuilder("MASTER_ENTRIES", "IPPAGE_CLEAR_FORM"));
        }
    }
}

export default connect(
    storeState,
    mapDispatchToProps
)(IpPage);
