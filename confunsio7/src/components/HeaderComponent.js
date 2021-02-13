import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export class Header extends Component{

    render(){

        return(

            <>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Dios</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Dios</h1>
                            <p>We put all our faith in God, because in God we trust. Since the head to the feet.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>


            </>
        );
    }

} 

export default Header;
