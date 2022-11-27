function input(props) {
    const {label,onChange, disabled, required, min, max,type, value} = props;
    return <input  value={value}  type = {type} placeholder= {label} onChange={onChange}/>;
}



function Button(props) {
    const {label, onClick} = props; 
    return <>
    <button   onClick = {onClick}> {label}</button>
    </>
}

export {input, Button} ;









