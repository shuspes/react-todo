import React from 'react';
import PropTypes from "prop-types";
import "./Form.css";
import { Property } from "../Property";

export class Form extends React.Component {
  onSubmit = ev => {
    ev.preventDefault();
    const obj = [...ev.target.querySelectorAll("[name]")].reduce((result, item) => {
      return {
        ...result,
        [item.getAttribute("name")]: item.value
      }
    }, {});
    if(this.props.handleSubmit) this.props.handleSubmit(obj);
  };

  render() {
    const {properties = [], formName = "", buttonName = ""} = this.props;
    return (
      <form className="css-form" onSubmit={this.onSubmit}>
        <div className="css-form-name">
          {formName}
        </div>
        <div>
          {
            properties.map(property => <Property key={property.Key} property={property} />)
          }
        </div>
        {
          buttonName !== "" && (<input type="submit" value={buttonName} />)
        }
      </form>
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