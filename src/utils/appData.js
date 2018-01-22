/*
propertyTemplate = {
  Key,
  DisplayOrder,  
  DisplayName,
  Type, (checkbox|string|combo|date|textarea)
  PossibleValues, (for combo, [] by default)
  ForForm, (add task, edit task)
  ForTable,
  ShouldDisplayLabel, (false by default)
}
*/

export const createGuid = _ => {
  const S4 = _ => (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

export const tasksProperties = [
  {
    Key: "Id", 
    DisplayOrder: 1,
    DisplayName: "Id",
    Type: "string",
    ForForm: false,
    ForTable: false
  },
  {
    Key: "IsComplete",
    DisplayOrder: 2,
    DisplayName: "Done",
    Type: "checkbox",
    ForForm: false,
    ForTable: true
  },
  {
    Key: "Title",
    DisplayOrder: 3,
    DisplayName: "Title",
    Type: "string",
    ForForm: true,
    ForTable: true
  },
  {
    Key: "Priority",
    DisplayOrder: 4,
    DisplayName: "Priority",
    Type: "combo",
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
    ForForm: true,
    ForTable: true
  },
  {
    Key: "Date",
    DisplayOrder: 5,
    DisplayName: "Date",
    Type: "date",
    ForForm: true,
    ForTable: true
  },
  {
    Key: "Description",
    DisplayOrder: 6,
    DisplayName: "Description",
    Type: "textarea",
    ForForm: true,
    ForTable: false    
  }
];

export const tasksList = [
  {
    Id: createGuid(),
    IsComplete: true,
    Title: "Create todo app",
    Description: "Use create-react-app npm package",
    Priority: "High",
    Date: "2018-01-18"
  },
  {
    Id: createGuid(),
    IsComplete: false,
    Title: "Create components",
    Description: "Create table and form",
    Priority: "High",
    Date: "2018-01-19"
  },
  {
    Id: createGuid(),
    IsComplete: false,
    Title: "Create components v2",
    Description: "Create filter",
    Priority: "Medium",
    Date: "2018-01-19"
  },
  {
    Id: createGuid(),
    IsComplete: true,
    Title: "Create todo repository",
    Description: "",
    Priority: "High",
    Date: "2018-01-17"
  },
  {
    Id: createGuid(),
    IsComplete: false,
    Title: "Complete todo app",
    Description: "",
    Priority: "Low",
    Date: "2018-04-22"
  }
];

export const filterProperties = [
  {
    Key: "IsComplete",
    DisplayOrder: 1,
    DisplayName: "Show completed",
    Type: "checkbox",
    ShouldDisplayLabel: true
  },
  {
    Key: "DateFrom",
    DisplayOrder: 2,
    DisplayName: "Date from",
    Type: "date"
  },
  {
    Key: "DateTo",
    DisplayOrder: 3,
    DisplayName: "Date to",
    Type: "date"
  },
  {
    Key: "Search",
    DisplayOrder: 4,
    DisplayName: "Text search (title + description)",
    Type: "longString"
  }
];