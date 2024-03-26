function CompF(props){
    return <div>
        <h2>Component F</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>User Id:{props.prop1.uid}</h3>
    </div>
}
export default CompF