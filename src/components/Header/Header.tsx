import React from 'react';
import styles from './header.module.css'
import Logo from "@/components/logo/logo";
import {Button} from "antd";
import MenuButtonIcon from "@/components/menu_button/menuButtonIcon";
import Link from "next/link";
import Indev from "@/pages/indev/indev";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <Logo className={styles.logo}/>
                <div className={styles.buttons_container}>
                    <Link to={<Indev></Indev>}><Button className={styles.header_button}
                                  type={'primary'}
                                  shape={'round'}
                                  size={'large'}
                    >
                        Заказать разработку
                    </Button>
                    </Link>
                    <Button
                        type={'secondary'}
                        size={'large'}
                        shape={'circle'}
                        icon={<MenuButtonIcon/>}></Button>
                </div>
            </div>
        </div>
    );
}
export default Header;
