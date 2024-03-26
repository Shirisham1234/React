import React from "react"
class Registration extends React.Component{
    state={
        name:"",
        email:"",
        mobnum:""
    }
    updateHandler=(event)=>{
       this.setState({
        [event.target.name]:event.target.value
       })
    }
    submitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="please enter Name" value={this.state.name} onChange={this.updateHandler} name="name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="please enter Email Id" value={this.state.email} onChange={this.updateHandler} name="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="please enter Mobilenum" value={this.state.mobnum} onChange={this.updateHandler} name="mobnum"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-primary"/>
                                </div>
                                </form>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    }
}
export default Registration