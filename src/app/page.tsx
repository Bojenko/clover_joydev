import Image from 'next/image'
import styles from './page.module.css'
import Logo from "@/components/logo/logo";
import {Button, ConfigProvider} from "antd";
import {theme} from "@/theme";
import MenuButtonIcon from "@/components/menu_button/menuButtonIcon";
import Header from "@/components/Header/Header";

export default function Home() {
    return (
        <ConfigProvider theme={theme}>
            <Header></Header>
            <main className={styles.main}>

            </main>
        </ConfigProvider>
    )
}
