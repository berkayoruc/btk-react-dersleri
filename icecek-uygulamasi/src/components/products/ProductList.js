import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badge, Table } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Button } from "reactstrap";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " eklendi");
  };
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>{" "}
          {this.props.currentCategory.categoryName !== undefined ? (
            <Badge color="success">
              {" "}
              {this.props.currentCategory.categoryName}
            </Badge>
          ) : null}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((p) => (
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
                <td>{p.quantityPerUnit}</td>
                <td>{p.unitsInStock}</td>
                <td>
                  <Button color="success" onClick={() => this.addToCart(p)}>
                    Add
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
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatch2Props(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapState2Props, mapDispatch2Props)(ProductList);
