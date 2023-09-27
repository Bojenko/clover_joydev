import React from 'react';
import {Button, Typography} from "antd";
import Header from "@/components/Header/Header";
import Link from "next/link";
import Home from "@/app/page";

const Indev = () => {
    return (

        <div>
            <Header></Header>
            <Typography.Title>Страница в разработке</Typography.Title>
            <Link to={<Home></Home>}><Button>Вернуться на главную</Button></Link>
        </div>
    );
};

export default Indev;
