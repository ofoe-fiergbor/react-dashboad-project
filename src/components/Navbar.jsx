/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <header>
                <h1>Dashboard</h1>
                <div className="btn-group drpDown">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="modal" aria-haspopup="true" aria-expanded="false"
                     href="#myModal">
                        Add StartUp
                    </button>
                    {/* <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul> */}
                </div>
            </header>
        )
    }
}

export default Navbar
