import React, { Component } from "react";
import { Link } from "react-router-dom";
import ClassList from "./ClientClassList";
import axiosWithAuth from "../../axiosWithAuth";

import ClassCard from "../ClassCard";

export default class ClientDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: false,
      searchTerm: "",
      resultData: []
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/search`, {
        name: this.state.searchTerm
      })
      .then(res => {
        this.setState({
          resultData: res.data
        });
      })
      .catch(err => console.log(err));

    if (this.state.searchTerm !== "") {
      this.setState({
        results: true
      });
    }
  };

  handleClasses = e => {
    e.preventDefault();
    this.setState({
      results: false,
      searchTerm: ""
    });
  };

  header = () => {
    return (
      <main>
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
          {localStorage.getItem("user")}
        </h1>
        <h1 className="primaryHeading">My Dashboard</h1>
        Search
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
      </main>
    );
  };
  render() {
    if (this.state.resultData.length === 0 && this.state.results === true) {
      return (
        <div>
          {this.header()}
          there is no search results
          <button onClick={this.handleClasses}>
            Click here to see all classes
          </button>
        </div>
      );
    } else if (
      this.state.resultData.length >= 1 &&
      this.state.results === true
    ) {
      return (
        <div>
          {this.header()}
          <button onClick={this.handleClasses}>
            Click Here to Go Back to Class List{" "}
          </button>
          {this.state.resultData.map(data => (
            <ClassCard key={data.id} data={data} />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {this.header()}
          <ClassList />
        </div>
      );
    }
  }
}
