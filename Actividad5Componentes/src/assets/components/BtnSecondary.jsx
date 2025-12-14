import '../Css/Botones.css'
const BtnSecondary = ({ text, disabled = false }) => {
  return (
    <button
      className="btn btn-outline-secondary sde-btn"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BtnSecondary;
