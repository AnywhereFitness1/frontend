import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchClasses } from "../../actions";
import ClassCard from "../ClassCard";

class ClassList extends Component {
  constructor(props) {
    super(props);
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
