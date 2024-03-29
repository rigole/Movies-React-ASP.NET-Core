

function Button(props: buttonProps){

    return(
            <button 
            className={props.className}
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
    className: string;
}
  
Button.defaultProps = {
    type: "button",
    disabled: false,
    className: "btn btn-primary"
}
   

export default Button