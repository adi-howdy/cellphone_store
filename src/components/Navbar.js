import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';  
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class Navbar extends Component {
    render() { 
        return (  
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-Link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus" />
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}
 

const NavWrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-Link{
        color:var(--mainWhite) !important;
        font-size:1.3rem; 
        text-transform: capitalize;
    }
`
export default Navbar;