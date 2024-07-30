import "./Button.scss"

function Button (props) {
    return(
        <button onClick={props.buttonFn}>{props.name}</button>
    )
}

export default Button