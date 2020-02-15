import React, { Component } from 'react'

export class Left extends Component {
    render() {
        return (
            <div>
                <ul className='left-list'>
                    <li>Dashboard</li>
                    <li><button data-toggle="modal" href="#myModal">
                        Add Startup</button></li>
                    <li><button>Startup Details</button></li>
                </ul>
            </div>
        )
    }
}

export default Left
