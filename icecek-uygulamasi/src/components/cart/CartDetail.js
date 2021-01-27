import React, { Component } from "react";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import alertify from "alertifyjs";
import { Table, Button } from "reactstrap";

class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " removed");
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((c) => (
              <tr key={c.product.id}>
                <th scope="row">{c.product.id}</th>
                <td>{c.product.productName}</td>
                <td>{c.product.unitPrice}</td>
                <td>{c.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(c.product)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatch2Props(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapState2Props, mapDispatch2Props)(CartDetail);
