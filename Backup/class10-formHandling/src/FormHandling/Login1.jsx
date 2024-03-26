import React from "react"
class Login1 extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
   this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
    event.preventDefault()
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
                        <div className="form-group" >
                        <input type="text" onChange={this.emailHandler} className="form-control" placeholder="Email Id"/>
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={this.passwordHandler}className="form-control" placeholder="Password"/>
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
export default Login1