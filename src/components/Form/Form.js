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

  componentWillReceiveProps(nextProps) {
    if(Object.keys(this.state.changeSet).length === 0 && nextProps.properties.length > 0) {
      const newChangeSet = this.getDefultChangeSet(nextProps);
      this.setState({changeSet: newChangeSet});
      if(this.props.handlePropertyChanged) this.props.handlePropertyChanged(newChangeSet);
    }
  }

  getDefultChangeSet = props => {
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
    Key: PropTypes.string,
    Type: PropTypes.string,
  })),
  formName: PropTypes.string,
  buttonName: PropTypes.string,
  handleSubmit: PropTypes.func,
  handlePropertyChanged: PropTypes.func
};