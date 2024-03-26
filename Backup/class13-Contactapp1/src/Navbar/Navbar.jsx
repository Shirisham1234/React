import React from "react"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
render(){
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">React-ContactApp</Link> 
        <div className="ml-auto">
        <ul className="navbar-nav">
        <li><Link to="/users" className="nav-link">Users</Link></li>

        </ul>
        </div>
        
    </nav>
}
}
export default Navbar