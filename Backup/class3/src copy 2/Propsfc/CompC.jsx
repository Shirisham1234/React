import CompD from "./CompD"
let CompC=()=>{
let ename="Anushka"
    return <div>
        <h1>Component C</h1>
        <hr/>
        <CompD one={"Gm"} emp_name={ename}/>
    </div>
}
export default CompC