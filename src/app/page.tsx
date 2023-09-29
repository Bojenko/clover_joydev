import styles from './page.module.css'
import {ConfigProvider} from "antd";
import {theme} from "@/theme";
import Header from "@/components/Header/Header";

export default function Home() {
    return (
        <ConfigProvider theme={theme}>
            <Header></Header>
            <main className={styles.main}>
                <div className={styles.background}>
                </div>
            </main>
        </ConfigProvider>
    )
}
