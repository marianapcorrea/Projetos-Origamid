import React from "react";
import styles from "./PhotoDelete.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../Api";

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    async function handleClick(event) {
        const confirm = window.confirm(
            "Tem certeza de que deseja deletar essa foto?"
        );
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }

    return (
        <>
            {loading ? (
                <button className={styles.delete} disabled>
                    Deletar
                </button>
            ) : (
                <button onClick={handleClick} className={styles.delete}>
                    Deletar
                </button>
            )}
        </>
    );
};

export default PhotoDelete;
