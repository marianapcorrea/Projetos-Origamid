import React from "react";
import styles from "./Contato.module.css";
import image from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
    return (
        <section className={styles.contato + " animeLeft"}>
            <Head title="Ranek | Contato" description="Entre em contato" />
            <img src={image} alt="Máquina de Escrever" />
            <div>
                <h1>Entre em contato</h1>
                <ul className={styles.dados}>
                    <li>contato@contato.com</li>
                    <li>31 99999-9999</li>
                    <li>Rua dos Alfeneiros, nº 4, Little Whinging, Surrey </li>
                </ul>
            </div>
        </section>
    );
};

export default Contato;
