import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchClasses } from "../../actions";
import ClassCard from "./ClientClassCard";

class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: []
    };
  }
  componentDidMount() {
    this.props.fetchClasses();
    this.setState({
      results: this.props.classes
    });
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });

    console.log("value: ", e.target.value);
  };

  render() {
    return (
      <div>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        {this.props.classes.map(data => (
          <ClassCard key={data.id} data={data} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.classes.classes
  };
};

export default connect(mapStateToProps, { fetchClasses })(ClassList);
