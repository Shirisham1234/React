import React from "react"
import User from "./User/User"
import { Provider } from "react-redux"
import {store} from "./redux/store"
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom"
let App=()=>{
    return <div>
        <Provider store={store}>
            <Router>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="#" className="navbar-brand">User Component</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li><Link to="/user" className="nav-link">User</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/user" element={<User/>}/>
            </Routes>
            </Router>
    <User/>
    </Provider>
    </div>
}
export default App