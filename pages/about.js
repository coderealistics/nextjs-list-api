import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <h1 className={styles.title}>About</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi assumenda in libero nam neque placeat, quae quia tempora?</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi assumenda in libero nam neque placeat, quae quia tempora?</p>
            <Link href="/ninjas">
                <a className={styles.btn}>See Ninja Listing</a>
            </Link>
        </>
    );
};

export default About;