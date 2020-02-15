import React, { Component } from 'react'
import Navbar from './Navbar'
import MainPage from './MainPage'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="heading"><h1>Dashboard</h1></div>
                <MainPage/>
            </div>
        )
    }
}

export default Dashboard
