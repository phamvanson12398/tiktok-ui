import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)


function Button({to , href,primary = false,outline=false ,children, small=false ,text=false,rounded =false ,large=false,disabled=false , onClick , ...passProps}) {
    let Comp = 'button'
    const classes = cx("wrapper",{
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded
    })

    
    let props = {
        onClick,
        ...passProps
    }
    if(disabled){
        Object.keys(props).forEach((key)=>{
            if(key.startsWith('on') && typeof props[key]== 'function'){
                delete props[key]
            }
        })
    }
    if (to){
        props.to = to
        Comp = Link
    }else if (href){
        props.href = href
        Comp = "a"
    }
    return ( 
        <Comp className={classes} {...props}>
            <span >
                {children}
            </span>
        </Comp>
     );
}

export default Button;