import CompB from "./CompB"
function CompA(){
    var msg="Good Morning"
    var name="Siri"
    return <div>
        <h3>Component A</h3>
        <h5>{msg},{name}</h5>
        <hr/>
        <CompB prop1={msg} prop2={name}/>
    </div>
}
export default CompA
