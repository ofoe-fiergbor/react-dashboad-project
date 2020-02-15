import React, { Component } from 'react'

export class Modal extends Component {


    render() {
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <center><h4 class="modal-title">ADD STARTUP</h4></center>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" className="form-control" placeholder="Company" name='companyName' onChange={this.props.handleChange} value={this.props.companyName} />
                                </div>
                                <div className="form-group">
                                    <label>Market/Industry</label>
                                    <input type="text" className="form-control" placeholder="Market/Industry" name='market' onChange={this.props.handleChange} value={this.props.market} />
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <input type="text" className="form-control" placeholder="Location" name='location' onChange={this.props.handleChange} value={this.props.location} />
                                </div>
                                <div className="form-group">
                                    <label>Joined</label>
                                    <input type="date" className="form-control" placeholder="Joined" name='joined' onChange={this.props.handleChange} value={this.props.joined} />
                                </div>
                                <button type="button" className="btn btn-default" onClick={this.props.addStartUp}>Add Startup</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
