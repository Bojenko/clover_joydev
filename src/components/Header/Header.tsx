import React, {useState} from 'react';
import styles from './header.module.css'
import {Button} from "antd";
import MenuButtonIcon from "@/components/menu_button/menuButtonIcon";
import Link from "next/link";
import Logo from "@/components/logo/logo";
import Navpath from "@/components/navpath/navpath";

const Header = () => {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_container}>
                    <Logo className={styles.logo}/>
                    <div className={styles.buttons_container}>
                        <Link href={'/indev'}><Button className={styles.header_button}
                                                      type={'primary'}
                                                      shape={'round'}
                                                      size={'large'}
                        >
                            Заказать разработку
                        </Button>
                        </Link>
                        <Button
                            type={'default'}
                            size={'large'}
                            shape={'circle'}
                            icon={<MenuButtonIcon/>}></Button>
                    </div>
                </div>
            </div>
            <hr className={styles.hrline}/>
            <div className={styles.navigate_informer}>
                <div className={styles.navigate_informer_container}>
                    <Navpath active={true} pages={['Главная','Кейсы','Clover Research']} paths={['/','/indev','/']}></Navpath>
                </div>
            </div>
        </>
    );
}
export default Header;
