import { useState } from "react";

interface Props {
    children: string;
    maxChar ? : number;
}






function ExpandableText({ children, maxChar = 100 }: Props) {

    const [  isExpanded , setExpanded ] = useState( false );


    if (children.length <= maxChar) return <p> { children } </p>;

    const content = isExpanded ? children : children.substring(0, maxChar) + ' ...';

    return <>
           <p> { content } </p> 
           <button className="btn btn-primary" onClick={ () => { setExpanded(!isExpanded) } }> { isExpanded ? 'less' : 'more'} </button>
           </>;





}

export default ExpandableText