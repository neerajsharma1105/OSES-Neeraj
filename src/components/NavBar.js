import React, { Component } from 'react'
import './NavBar.css';
export class NavBar extends Component {
    render() {

        const {values} = this.props;
        return (
            <div class="back">
                <nav class="navbar navbar-dark">
                    <h1 class="text-center">StartApplication</h1>
                </nav>
            </div>
        )
    }
}

export default NavBar
