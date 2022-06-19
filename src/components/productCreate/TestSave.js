import React, { Component } from 'react'

export class TestSave extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idUser: "",
            motdepass: "",
            motdepas: "",
            phoneNum: ""
        }
        this.changeIdHand = () => this.changeIdHand();
    }
    changeIdHandler = (event) => {
        this.setState({ id: event.target.value });
    }

    render () {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset -md-3">
                            <br />
                            <h3 className="text-center"><b>Add User </b></h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>
                                            Id :
                                        </label>
                                        <input placeholder="auto-generated" name="id" className="form-control"
                                            disabled />
                                        <label>
                                            UserName :
                                        </label>
                                        <input placeholder="username" name="userid" className="form-control"
                                            required />
                                        <label>
                                            Name :
                                        </label>
                                        <input placeholder="name" name="name" className="form-control"
                                            required />
                                        <label>
                                            Password :
                                        </label>
                                        <input placeholder="password" name="password" className="form-control"
                                            required />
                                        <label>
                                            PhoneNum :
                                        </label>
                                        <input placeholder="phonenum" name="phonenum" className="form-control"
                                            required />
                                    </div>
                                    <button className="btn btn-success" >Save</button>
                                    <br />
                                    <br />
                                    <button className="btn btn-danger" >Cancel</button>
                                    <br />
                                    <br />

                                </form>


                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default TestSave
