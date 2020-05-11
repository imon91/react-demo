import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import {ButtonContainer} from './Button';
import styled from "styled-components";


class Nevbar extends Component {
    render() {
        return (
           <NavWapper className="navbar navbar-expand-sm   navbar-dark px-sm-5">
               <Link to="/">
                   <div className="col"></div>
                   <img src={logo} alt="brandimg" className="navbar-brand" />
               </Link>
               <ul className="navbar-nav align-item-center" >
                   <li className ="nav-item ml-5">
                      <Link to="/" className="nav-link"> products </Link>
                   </li>
               
               </ul>
               <Link to="/cart" className="ml-auto nav-link">
                   <ButtonContainer>
                   <span className="mr-2">
                    <i className="fas fa-cart-plus " ></i>
                    </span>
                      My Cart
                   </ButtonContainer>
               </Link>
  
           </NavWapper>
        );
    }
}
const NavWapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color:  var(--mainWhite) !important;
  text-transform:capitalize;
  font-size:1.3rem;
}


`
;

export default Nevbar;