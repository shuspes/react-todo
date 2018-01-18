import React from 'react';
import "./Form.css";
import Property from "../Property";

class Form extends React.Component {
  render() {
    const {properties = [], formName = "", buttonName = ""} = this.props;
    return (
      <div className="css-form">
        <div className="css-form-name">
          {formName}
        </div>
        <div>
          {
            properties.map(property => <Property key={property.Key} property={property} />)
          }
        </div>
        {
          buttonName !== "" && (<button>{buttonName}</button>)
        }
      </div>
    );
  };
};

export default Form;