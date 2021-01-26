import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";


export default class CartSummary extends Component {
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map((product) => (
                            <DropdownItem key={product.product.id}>
                                <Badge color="danger" onClick={() => this.props.removeFromCart(product.product)}>X</Badge>
                                <Badge color="success">{product.quantity}</Badge>
                                {product.product.productName}
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider/>
                    <DropdownItem>
                        <Link to="cart">Go to cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Cart empty</NavLink>
            </NavItem>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
            </div>
        )
    }
}
