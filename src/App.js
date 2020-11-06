import React from "react";
import employees from "./employees.json";

class App extends React.Component () {
  state = {
    employees: employees,
    search: "",
    sortOrder: "ASC"
  }

  handleInputChange = event => {
    const {name, value} = event.target;

    //search will probably happen here
    // filter results here
    const filteredEmployees = this.state.employees.filter
    // this is returned as array of objects [{}]

    // sort order

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event =>{

  };

  render(){
    return (
    //header
    //searchbar name="search" handleInputChange= {this.handleInputChange} value={this.state.search}
    //table
    //   table head
    //    icon, name, phone number, email, date of birth
    //       close table head
    //     this.state.employees.map(users =>(){
    //   tablerow
    //      image.png, john doe, 123,456,5432, email.com, dob
    //        close table row
    //       })
   );
  };
}

export default App;
