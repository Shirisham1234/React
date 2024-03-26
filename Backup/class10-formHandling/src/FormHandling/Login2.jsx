import React from "react"
class Login2 extends React.Component{
    state={
        email:"",
        password:""
    }
    updateHandler=(event)=>{
        this.setState({
         [event.target.name]:event.target.value
        })
    }
   submitHandler=(event)=>{
    event.preventDefault()
    alert(JSON.stringify(this.state))
   }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={this.updateHandler} name="email" placeholder="Email Id"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={this.updateHandler} name="password" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-success"/>
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
export default Login2