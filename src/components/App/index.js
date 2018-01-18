import React from 'react';
import App from "./App";

class AppContainer extends React.Component {
  static defaultProps = {
    actionProperties: [
      {
        Key: "Id",
        DisplayOrder: 1,
        DisplayName: "Id",
        PropertyType: "string",
        IsTableVisible: false,
        IsFormVisible: false
      },
      {
        Key: "IsComplete",
        DisplayOrder: 2,
        DisplayName: "Done",
        PropertyType: "checkbox",
        IsTableVisible: true,
        IsFormVisible: false
      },
      {
        Key: "Title",
        DisplayOrder: 3,
        DisplayName: "Title",
        PropertyType: "string",
        IsTableVisible: true,
        IsFormVisible: true
      },
      {
        Key: "Priority",
        DisplayOrder: 4,
        DisplayName: "Priority",
        PropertyType: "combo",
        PossibleValues: [
          {
            Key: "High",
            DisplayName: "High",
            DisplayOrder: 1
          },
          {
            Key: "Medium",
            DisplayName: "Medium",
            DisplayOrder: 2
          },
          {
            Key: "Low",
            DisplayName: "Low",
            DisplayOrder: 3
          }
        ],
        IsTableVisible: true,
        IsFormVisible: true
      },
      {
        Key: "Date",
        DisplayOrder: 5,
        DisplayName: "Date",
        PropertyType: "date",
        IsTableVisible: true,
        IsFormVisible: true
      },
      {
        Key: "Description",
        DisplayOrder: 6,
        DisplayName: "Description",
        PropertyType: "textarea",
        IsTableVisible: false,
        IsFormVisible: true
      }
    ],
    actionList: [
      {
        Id: "1",
        IsComplete: true,
        Title: "Create todo app",
        Description: "Use create-react-app npm package",
        Priority: "High",
        Date: "2018-01-18"
      },
      {
        Id: "2",
        IsComplete: false,
        Title: "Create components",
        Description: "Create table and form",
        Priority: "High",
        Date: "2018-01-19"
      },
      {
        Id: "3",
        IsComplete: false,
        Title: "Create components v2",
        Description: "Create filter",
        Priority: "Medium",
        Date: "2018-01-19"
      },
      {
        Id: "4",
        IsComplete: true,
        Title: "Create todo repository",
        Description: "",
        Priority: "High",
        Date: "2018-01-17"
      },
      {
        Id: "5",
        IsComplete: false,
        Title: "Complete todo app",
        Description: "",
        Priority: "Low",
        Date: "2018-04-22"
      }
    ],
    filterProperties: [
      {
        Key: "IsComplete",
        DisplayOrder: 1,
        DisplayName: "Show completed",
        PropertyType: "checkbox",
        ShouldDisplayLabel: true
      },
      {
        Key: "DateFrom",
        DisplayOrder: 2,
        DisplayName: "Date from",
        PropertyType: "date"
      },
      {
        Key: "DateTo",
        DisplayOrder: 3,
        DisplayName: "Date to",
        PropertyType: "date"
      },
      {
        Key: "Search",
        DisplayOrder: 4,
        DisplayName: "Text search (title + description)",
        PropertyType: "string"
      },
    ]
  };

  render() {
    const {actionProperties = [], actionList = [], filterProperties = []} = this.props;
    return (
      <App actionProperties={actionProperties} actionList={actionList} filterProperties={filterProperties} />
    );
  };
};

export default AppContainer;