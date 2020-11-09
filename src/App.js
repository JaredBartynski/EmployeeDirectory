import React from "react";
import employees from "./employees.json";
import Header from "./components/Header";
import Search from "./components/Search";
import TableRow from "./components/TableRow";
import TableHead from "./components/TableHead";

class App extends React.Component() {
  state = {
    employees: employees,
    search: "",
    sortOrder: "ASC",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    //search will probably happen here
    // filter results here
    const filteredEmployees = this.state.employees.filter;
    // this is returned as array of objects [{}]

    //use sort order

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {};

  handleClick = (event) => {
    // sort order toggle
  };

  render() {
    return (
      <>
        <Header />
        <Search inputChange={this.handleInputChange} />
        <table className="container">
          <TableHead onSort={this.handleSort} />
          {this.state.employees
            .filter((item) =>
              item.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((person) => (
              <TableRow
                id={person.id}
                key={person.id}
                name={person.name}
                icon={person.image}
                phoneNumber={person.phoneNumber}
                email={person.email}
                DoB={person.DoB}
              />
            ))}
        </table>
      </>
    );
  }
}

export default App;
