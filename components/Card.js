const Card = ({ title, date }) => {
  return (
    <>
      <div className="card">
        <div className="card__main">
          <h3 className="card__title">{title}</h3>
          <img className="card__img" src="/next-js-logo.png" alt="" />
        </div>
        <p className="card__date">{date}</p>
      </div>
      <style jsx>{`
        .card {
          display: block;
          padding: 0px 20px;
          min-width: 300px;
          max-width: 350px;
          margin: 50px 5px;
          background-color: #ffd5a5;
          border: 2px solid #810000;
          box-shadow: 4px 4px 4px #810000;
        }

        .card__main {
          display: flex;
          justify-content: space-between;
        }
        .card__img {
          height: 50px;
          width: 80px;
          margin-top: 10px;
        }

        .card__title {
          font-size: 25px;
          padding-right: 10px;
        }
        .card__date {
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default Card;
