import styles from './GoogleMap.module.css';

function GoogleMap() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0239441021367!2d-46.676690199999996!3d-23.531641199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b3ad383aad%3A0x87ca6cb2a69541f8!2sVital%20Spine!5e0!3m2!1spt-BR!2sbr!4v1761156624279!5m2!1spt-BR!2sbr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
