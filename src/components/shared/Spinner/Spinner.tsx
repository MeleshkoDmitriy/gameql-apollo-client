import styles from './Spinner.module.styl'

export const Spinner = () => {
  return (
    <svg
      className={styles.spinner}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.spinnerCircle}
        cx="50"
        cy="50"
        r="45"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};
