import React from 'react';
import PropTypes from "prop-types";
import "./Form.css";
import { Property } from "../Property";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeSet: this.getDefultChangeSet(props)
    };
  }

  getDefultChangeSet = props => {
    return props.properties.reduce((set, property) => ({...set, [property.Key]: ""}), {});
  };

  handleChangeProperty = (propertyKey, value) => {    
    this.setState({changeSet: {...this.state.changeSet, [propertyKey]: value}});
  };

  handlrForm = _ => {
    if(this.props.handleSubmit) this.props.handleSubmit(this.state.changeSet);
    this.setState({changeSet: this.getDefultChangeSet(this.props)});
  };

  render() {
    const {properties = [], formName = "", buttonName = ""} = this.props;
    const {changeSet = {}} = this.state;
    return (
      <div className="css-form">
        <div className="css-form-name">
          {formName}
        </div>
        <div>
          {
            properties.map(property => 
                <Property key={property.Key} 
                          property={property} 
                          value={changeSet[property.Key] || ""}
                          onChangeProperty={this.handleChangeProperty.bind(this, property.Key)} />
            )
          }
        </div>
        {
          buttonName !== "" && (<button onClick={this.handlrForm}>{buttonName}</button>)
        }
      </div>
    );
  };
};

Form.propTypes ={
  properties: PropTypes.arrayOf(PropTypes.shape({
    Key: PropTypes.string
  })),
  formName: PropTypes.string,
  buttonName: PropTypes.string,
  handleSubmit: PropTypes.func
};