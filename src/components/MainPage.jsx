import React, { Component } from 'react'
import Left from './Left'
import  Right  from './Right'
import Modal from './Modal'

export class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyName: '',
            market: '',
            location: '',
            joined: '',
            id: '',


            startups: [
                {
                    companyName: 'Company Name',
                    market: 'Real Estate',
                    location: 'Lagos',
                    joined: 'Oct 12,2014',
                    id: '1',

                },
                {
                    companyName: 'CompanyName',
                    market: 'Financial Services',
                    location: 'Accra',
                    joined: 'Oct 12,2014',
                    id: '2'

                }
            ]
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addStartUp=e=>{
        const{companyName, market, joined, location}=this.state;
        this.setState({
            startups:[...this.state.startups, {
                companyName, market, joined, location,
            id: this.state.startups.length+1}]
        })
        this.setState({
            companyName: '',
            market: '',
            location: '',
            joined: '',
            id: ''
        })
    }
    removeStartup = (itemId) =>{
        this.setState(() =>{
            const startups = this.state.startups.filter( items=> items.id !== itemId)
            return {startups}
        })
    }
    editStartup = () =>{
        alert('edit startup')
    }
    

    render() {
        return (
            <div className='mainPage'>
                <div className="col-md-3">
                    <Left />
                </div>
                <div className="col-md-9 ">
                    <Right startups={this.state.startups} removeStartup={this.removeStartup} editStartup= {this.editStartup} editMode={this.state.isInEditMode}/>
                </div>
                <div>
                    <Modal handleChange={this.handleChange}
                    companyName={this.state.companyName}
                    market={this.state.market}
                    location={this.state.location}
                    joined={this.state.joined}
                    addStartUp={this.addStartUp}/>
                </div>
            </div>
                )
            }
        }
        
        export default MainPage
