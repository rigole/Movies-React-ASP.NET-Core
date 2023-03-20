

function Button(props: buttonProps){

    return(
            <button 
            className="btn btn-primary" 
            type={props.type} 
            onClick={props.onClick}
            disabled={props.disabled}
            >
                {props.children}
            </button>
    )
}

interface buttonProps{
    children: React.ReactNode;
    onClick?(): void;
    type: "button" | "submit";
    disabled: boolean;
}
  
Button.defaultProps = {
    type: "button",
    disabled: false
}
   

export default Button