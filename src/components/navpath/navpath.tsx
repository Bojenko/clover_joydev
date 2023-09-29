import React, {createElement, ReactNode} from 'react';
import {pages} from "next/dist/build/templates/app-page";
import Link from "next/link";
import {Row, Typography} from "antd";

type Props = {
    pages?: string[],
    paths?: string[],
    active: boolean
}

const NavLink = (text:string, path:string, type:'current'|'default'):ReactNode =>{
    if(type==='current') return (
        <Link href={path} style={{textDecoration:'none'}}>
            <h4 style={{color:'#F86161'}}>{text}</h4>
        </Link>
    )
    else return (
        <Link href={path} style={{color:'black', textDecoration:'none'}}>
            <h4>{text + ' → '}</h4>
        </Link>
    )
}
const Navpath = (props: Props)=> {
    if(props.paths&&props.pages)
    { // @ts-ignore
        // @ts-ignore
        return (
            <Row justify={'start'}>
            {props.pages?.map((value, index) => (NavLink(value, props.paths[index],index===props.pages?.length-1?'current':'default' )))}
            </Row>
        )
    }
}

export default Navpath;