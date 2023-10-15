import styles from './page.module.css'
import {ConfigProvider} from "antd";
import {theme} from "@/theme";
import Header from "@/components/Header/Header";
import CloverResearchTitle from "@/components/CRTitle/CloverResearchTitle";

export default function Home() {
    let titleSizes = {height: 200, width: 275};
    return (
        <ConfigProvider theme={theme}>
            <Header></Header>
            <main className={styles.main}>
                <div className={styles.background}>
                    <div className={styles.greenlines}>
                        <div className={styles.titlecontainer}>
                                <div className={styles.CRTitle}>
                                    <CloverResearchTitle height={titleSizes.height} width={titleSizes.width}/>
                                </div>
                                <div className={styles.phone}>
                                </div>

                        </div>
                        <div className={styles.bluerect}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>


                </div>
            </main>
        </ConfigProvider>
    )
}
