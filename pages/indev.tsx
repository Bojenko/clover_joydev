import React from 'react';
import {Button, ConfigProvider, Typography} from "antd";
import Header from "@/components/Header/Header";
import Link from "next/link";
import styles from "./indev.module.css"
import {theme} from "@/theme";

const Indev = () => {
    return (
        <ConfigProvider theme={theme}>
        <div>
            <Header></Header>
            <Typography.Title className={styles.indev_title}>Страница в разработке</Typography.Title>
            <Link href={'/'} className={styles.indev_button}><Button>Вернуться на главную</Button></Link>
        </div>
        </ConfigProvider>
    );
};

export default Indev;
