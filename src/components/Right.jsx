import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Table from './Table'

export class Right extends Component {
    render() {
        return (
            <div className='right'>
                <div className='rightHeading'>
                    <h1>All Startups</h1>
                </div>
                <div>
                    <SearchBar />
                </div>
                <div className="tableM">
                    {
                    this.props.startups.map((item) => (
                        <Table 
                        companyName={item.companyName}
                        market={item.market} 
                        location={item.location} 
                        id={item.id}
                        joined={item.joined} 
                        removeStartup = {this.props.removeStartup}
                        editStartup = {this.props.editStartup}
                        editMode = {this.props.editMode}
                        />
                    ))
                    
                    }
                </div>
            </div>
        )
    }
}

export default Right
