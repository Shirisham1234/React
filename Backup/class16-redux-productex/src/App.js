import React from "react"
import Product from "./Product/Product"
import {store} from "./redux/store"
import { Provider } from "react-redux"
let App=()=>{
    return <div>
        <Provider store={store}>
    <h2>App Component</h2>
    <hr></hr>
    <Product/>
    </Provider>
    
    </div>
}
export default App