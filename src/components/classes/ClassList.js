import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchClasses } from "../../actions";
import ClassCard from "./ClassCard";

class ClassList extends Component {
  componentWillMount() {
    this.props.fetchClasses();
  }

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
