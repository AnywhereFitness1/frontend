import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchReservedClasses } from "../../actions";
import ClassCard from "../ClassCard";

class MyReservations extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchReservedClasses();
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
          <ClassDetail key={data.id} data={data} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state reserved class: ", state);
  return {
    classes: state.classes.reservedClasses
  };
};

export default connect(mapStateToProps, { fetchReservedClasses })(
  MyReservations
);

function ClassDetail({ data }) {
  return (
    <>
      <Link to={`/Client-Class/${data.id}`}>
        <ClassCard key={data.id} data={data} />
      </Link>
    </>
  );
}
