import React from 'react';
import PropTypes from "prop-types";
import { Button } from 'semantic-ui-react';
import "./Form.css";
import { Property } from "../Property";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeSet: this.getDefultChangeSet(props),
      isValid: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if(Object.keys(this.state.changeSet).length === 0 && nextProps.properties.length > 0) {
      const newChangeSet = this.getDefultChangeSet(nextProps);
      this.setState({changeSet: newChangeSet});
      if(this.props.handlePropertyChanged) this.props.handlePropertyChanged(newChangeSet);
    }
  }

  getDefultChangeSet = props => {
    if(props.itemValues) return props.itemValues;
    return props.properties.reduce((set, property) => {
      let value = "";
      if(property.Type === "combo") {
        const firstPossibleValue = (property.PossibleValues || [])[0] || {};
        value = firstPossibleValue.Key || "";
      } else if(property.Type === "dateRange") {
        value = ["", ""];
      } else if(property.Type === "checkbox") {
        value = false;
      }
      return {...set, [property.Key]: value};
    }, {});
  };

  handleChangeProperty = (propertyKey, value) => {    
    const newChangeSet = {...this.state.changeSet, [propertyKey]: value};
    if(this.props.handlePropertyChanged) this.props.handlePropertyChanged(newChangeSet);
    this.setState({changeSet: newChangeSet});
  };

  validateForm = () => {
    return this.props.properties
      .filter(it => typeof it.ValidateFunc === "function")
      .map(it => it.ValidateFunc(this.state.changeSet[it.Key]) ? "" : it.ValidationMessage).filter(it => it !== "");
  };

  handlForm = () => {
    const validationMessages = this.validateForm();
    if(validationMessages.length > 0) {
      this.setState({isValid: false, validationMessages});
    } else {
      if(this.props.handleSubmit) this.props.handleSubmit(this.state.changeSet);
      this.setState({changeSet: this.getDefultChangeSet(this.props), isValid: true, validationMessages: []});
    }
  };

  render() {
    const {properties = [], formName = "", buttonName = "", isDisabled = false, shouldDisplayBorder = true} = this.props;
    const {changeSet = {}, isValid = true, validationMessages = []} = this.state;
    return (
      <div className={"css-form " + (shouldDisplayBorder ? "border" : "")}>
        <div className="css-form-name">
          {formName}
        </div>
        <div>
          {
            properties.map(property => 
                <Property key={property.Key} 
                          isDisabled={isDisabled}
                          property={property} 
                          value={changeSet[property.Key] || ""}
                          onChangeProperty={this.handleChangeProperty.bind(this, property.Key)} />
            )
          }
        </div>
        {
          buttonName !== "" && (<Button className="css-form-actionButton" disabled={isDisabled} color="green" onClick={this.handlForm}>{buttonName}</Button>)
        }
        {
          isValid 
            ? null 
            : validationMessages.map((message, index) => <span key={index} className="css-form-validation-error">{message}</span>)
        }
      </div>
    );
  };
};

Form.propTypes ={
  properties: PropTypes.arrayOf(PropTypes.shape({
    Key: PropTypes.string,
    Type: PropTypes.string,
  })),
  itemValues: PropTypes.object,
  formName: PropTypes.string,
  buttonName: PropTypes.string,
  handleSubmit: PropTypes.func,
  handlePropertyChanged: PropTypes.func,
  isDisabled: PropTypes.bool,
  shouldDisplayBorder: PropTypes.bool
};