import styles from "./styles.module.css";

export const About = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Informações</h1>

            <p className={styles.description}>
                Sistema criado utilizando React, Angular e Single-Spa, voltado para administração de parceiros e companhias externas.
            </p>
        </main>
    );
};
