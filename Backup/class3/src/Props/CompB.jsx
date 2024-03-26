function CompB(props){
    
    return <div>
      <h2>Component B</h2> 
        <h3>{JSON.stringify(props)}</h3>
        <h3>Message:{props.prop1}</h3>
        <h3>Name:{props.prop2}</h3>
    </div>

}
export default CompB