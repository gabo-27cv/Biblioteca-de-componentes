import '../Css/Botones.css'
const BtnPrimary = ({ text, disabled = false}) => {
  return (
    <button
      className="btn btn-primary sde-btn"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BtnPrimary;
