const Card = ({ title, date }) => {
  return (
    <>
      <div className="card">
        <div className="card__main">
          <h3 className="card__title">{title}</h3>
        </div>
        <p className="card__date">{date}</p>
      </div>
      <style jsx>{`
        .card {
          display: block;
          padding: 10px 20px;
          min-width: 300px;
          max-width: 350px;
          margin: 50px 30px;
          background-color: #ffefde;
          border: 2px solid #810000;
          box-shadow: 4px 4px 4px #810000;
          text-align: center;
        }

        .card__main {
          display: flex;
          justify-content: space-between;
        }

        .card__title {
          font-size: 25px;
          padding-right: 10px;
          color: #000;
        }
        .card__date {
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default Card;
