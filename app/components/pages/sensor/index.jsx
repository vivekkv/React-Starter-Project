import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import FormContainer from '../../presentational/formContainer';
import Row from '../../presentational/row';
import Column from '../../presentational/column';
import Input from '../../presentational/input';
import FormButtons from '../../presentational/formButtons';

class Sensor extends React.Component {

    render() {

        return <div>

            <FormContainer title="Sensor" icon="fa-plug">

                <Row>

                    <Column label="Sensor Name" size="small" required={true}>

                        <Input  name="SensorName" value={this.props.data.SensorName}  onChange={this.props.onChange} />

                    </Column>

                    <Column label="Sensor Type" size="small"  required={true}>

                        <Input  name="SensorType" value={this.props.data.SensorType} onChange={this.props.onChange} />

                    </Column>

                    <Column label="Sensor Model" size="small"  required={true}>

                        <Input  name="SensorModel" value={this.props.data.SensorModel}  onChange={this.props.onChange} />

                    </Column>

                    <Column label="Mac Address" size="small"  required={true}>

                        <Input  name="MacAddress" value={this.props.data.MacAddress} onChange={this.props.onChange} />

                    </Column>


                </Row>

                <Row>

                    <Column label="UUID" size="small"  required={true}>

                        <Input  name="UUID" value={this.props.data.UUID}  onChange={this.props.onChange} />

                    </Column>

                    <Column label="Customer" size="small"  required={true}> 

                        <Input  name="Customer" value={this.props.data.Customer} onChange={this.props.onChange} />

                    </Column>

                    <Column label="Installed Location" size="small"  required={true}>

                        <Input  name="InstalledLocation" value={this.props.data.InstalledLocation}  onChange={this.props.onChange} />

                    </Column>

                    <Column label="Serial Number" size="small"  required={true}>

                        <Input  name="SerialNumber" value={this.props.data.SerialNumber} onChange={this.props.onChange} />

                    </Column>

            
                </Row>
                
                <Row>


                    <Column label="Activated Date" size="small"  required={true}>

                        <Input  name="ActivatedDate" value={this.props.data.ActivatedDate}  onChange={this.props.onChange} />

                    </Column>

                    <Column label="Status" size="small">

                        <Input  name="Status" value={this.props.data.Status} onChange={this.props.onChange} />

                    </Column>

                </Row>

                <Row>

                    <FormButtons />


                </Row>

            </FormContainer>

        </div>
    }
}

const storeState = (state, ownProps) => {
    return {
        'data': Map(state.masterEntries.sensor)
    }
}

const mapDispatchToProps = (dispatch, ownState) => {

    return {
        dispatch
    }
}

export default connect(
    storeState,
    mapDispatchToProps
)(Sensor);
