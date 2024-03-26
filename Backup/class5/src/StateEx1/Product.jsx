import React,{Fragment} from "react"
class Product extends React.Component{
    state={
        product_name:"REDMI 12 5G",
        price:12999,
        img:"https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/x/0/4/-original-imagxaqu3samghjd.jpeg?q=70&crop=false",
        qty:1
        }
        incrHandler=()=>{
            this.setState({
                qty:this.state.qty +1

            })
        }
            decrHandler=()=>{
                this.setState({
                    qty:this.state.qty -1

                })
            }
        
    render(){
        return <Fragment>
<div className="container">
    <div className="row">
        <div className="col-md-10">
            <table className="table">
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Qty</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.product_name}</td>
                        <td>{this.state.price}</td>
                        <td><img src={this.state.img} height="100px" alt=""/></td>
                        
                         <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td> 
                        <td>{this.state.price * this.state.qty}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
        </Fragment>
    }
}
export default Product