import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseCounter());
          }}
        >+1</button>
      </div>
    );
  }
}

function mapDispatch2Props(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatch2Props)(IncreaseCounter);
