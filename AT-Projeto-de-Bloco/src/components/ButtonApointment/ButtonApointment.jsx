import styles from "./ButtonApointment.module.css";
function ButtonAppointment() {
    return (
        <button className={styles.buttonAppointment}>
            Agende sua consulta
            <i className={`${styles.icon} fa-brands fa-whatsapp`}></i>
        </button>
    )
}

export default ButtonAppointment;