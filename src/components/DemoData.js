import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchClasses } from "../actions";

class DemoData extends Component {
  componentWillMount() {
    this.props.fetchClasses();
  }

  render() {
    return (
      <div>
        <h1>Demo Data</h1>
        {this.props.demo.map(data => (
          <div key={data.id}>
            <h1>{data.title}</h1>
            <br />
            <p> {data.body} </p>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    demo: state.demo.data
  };
};

export default connect(mapStateToProps, { fetchClasses })(DemoData);
