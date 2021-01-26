import React, { Component } from 'react'
import { Button, Table } from 'reactstrap';

class CartList extends Component {
    renderCart() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Stock</th>
                        <th>Quantity</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(c => (
                            <tr key={c.product.id}>
                                <td>{c.product.id}</td>
                                <td>{c.product.categoryId}</td>
                                <td>{c.product.productName}</td>
                                <td>{c.product.unitPrice}</td>
                                <td>{c.product.unitsInStock}</td>
                                <td>{c.quantity}</td>
                                <td><Button color="danger" onClick={() => this.props.removeFromCart(c.product)}>
                                    Remove</Button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        )
    }
    render() {
        return (
            <div>
                {
                    this.renderCart()
                }
            </div>
        )
    }
}
export default CartList;
