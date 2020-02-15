import React, { Component } from 'react'

export class Table extends Component {


    render(props) {
        const{ companyName, market, location, joined, id} = this.props;
        return (
            <div>
                <table className='table table-striped '>

                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Market/Industry</th>
                            <th>Location</th>
                            <th>Joined</th>
                            <th>Approve</th>
                            <th colSpan='2' className='text-center'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td><img src='https://via.placeholder.com/70x70.png' alt='placeholder' /><b style={{marginLeft:10}}>{companyName}</b></td>
                            <td>{market}</td>
                            <td>{location}</td>
                            <td>{joined}</td>
                            <td>
                                <button id='tick1' className='text-center tb-btn'>
                                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                </button>
                            </td>
                            <td>
                                <button id='tick2' className='text-center tb-btn' onClick={this.props.editStartup} >
                                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </button>
                            </td>
                            <td>
                                <button id='tick3' className='text-center tb-btn' onClick={()=>this.props.removeStartup(id)}> 
                                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Table
