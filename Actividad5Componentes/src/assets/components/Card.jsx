const CardImage = ({ img, title, text }) => {
  return (
    <div className="card sde-card mt-4">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary btn-sm">Ver más</button>
      </div>
    </div>
  );
};

export default CardImage;