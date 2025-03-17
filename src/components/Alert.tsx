import { ReactNode, useState } from "react";

interface Props {
    children : ReactNode;
    onDismissed : () => void;
}

function Alert({children , onDismissed }  : Props) {


    return <div className="alert alert-primary alert-dismissible" > 
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={ onDismissed }></button>
           </div>;



}


export default Alert;