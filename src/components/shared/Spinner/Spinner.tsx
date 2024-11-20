export const Spinner = () => {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="blue"
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
