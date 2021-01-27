import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseDoubleCounter } from "../redux/actions/counterActions";

class IncreaseDoubleCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseDoubleCounter());
          }}
        >
          +2
        </button>
      </div>
    );
  }
}
function mapDispatch2Props(dispatch) {
  return { actions: bindActionCreators(increaseDoubleCounter, dispatch) };
}

export default connect(mapDispatch2Props)(IncreaseDoubleCounter);
