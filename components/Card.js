export default function Card({ title, date, likes, comments, views }) {
  return (
    <>
      <div className="card">
        <h3 className="card__title">{title}</h3>
        <div className="card__row">
          {/* <span className="card__date">{date}</span> */}
          <div className="card__interactions">
            <svg
              className="svg"
              viewBox="0 0 1024 1024"
              width="20px"
              height="20px"
            >
              <path d="M895.032 194.328c-20.906-21.070-46.492-37.316-76.682-48.938-30.104-11.71-63.986-17.39-101.474-17.39-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.264-30.366-27.22-56.236-48.398-77.33z" />
            </svg>
            <span>{likes}</span>
          </div>
          <div className="card__interactions">
            <svg
              className="svg"
              viewBox="0 0 1024 1024"
              width="20px"
              height="20px"
            >
              <path d="M936 85l6 1c22 3 39 21 39 44v709c0 8-2 15-5 21l-2 4c-9 12-23 20-38 20H427l-131 127c-9 9-21 13-34 13-25 0-46-20-46-45v-95H88c-25 0-45-20-45-45V130a45 45 0 0145-45zm-46 89H134v620h756V174zM768 544c25 0 46 20 46 44 0 25-21 45-46 45H256c-25 0-46-20-46-45 0-24 21-44 46-44zm0-208c25 0 46 20 46 44 0 25-21 45-46 45H256c-25 0-46-20-46-45 0-24 21-44 46-44z" />
            </svg>
            <span>{comments}</span>
          </div>
          <div className="card__interactions">
            <svg
              className="svg"
              viewBox="0 0 1024 1024"
              width="20px"
              height="20px"
            >
              <path d="M1008.714 490.522c-9.002-12.594-223.276-308.808-496.684-308.808-273.444 0-487.682 296.214-496.684 308.808l-15.316 21.49 15.316 21.466c9.002 12.618 223.24 308.808 496.684 308.808 273.408 0 487.682-296.19 496.684-308.808l15.316-21.466-15.316-21.49zM807.68 631.688c-46 39.142-92.558 70.064-138.382 91.904-53.874 25.676-106.786 38.694-157.266 38.694-50.49 0-103.406-13.018-157.282-38.696-45.826-21.838-92.382-52.758-138.378-91.902-53.708-45.706-94.302-92.122-116.61-119.672 22.36-27.602 63.028-74.094 116.612-119.696 45.996-39.146 92.554-70.068 138.378-91.908 53.876-25.678 106.792-38.698 157.28-38.698 50.48 0 103.39 13.020 157.264 38.696 45.824 21.842 92.382 52.764 138.382 91.91 53.602 45.614 94.264 92.098 116.624 119.696-22.306 27.544-62.898 73.954-116.622 119.672zM692.032 512.036c0 99.41-80.588 180-180 180s-180-80.59-180-180c0-99.406 80.588-179.998 180-179.998s180 80.59 180 179.998z" />
            </svg>
            <span>{views}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          padding: 20px;
          min-width: 350px;
          max-width: 350px;
          min-height: 200px;
          margin: 50px 30px;
          background-color: #ffefde;
          border: 2px solid #810000;
          box-shadow: 4px 4px 4px #810000;
          text-align: left;
          justify-content: space-between;
        }

        .card span {
          margin-left: 5px;
        }

        .svg {
          display: block;
        }
        .card__row {
          display: flex;
        }

        .card__interactions {
          display: flex;
          align-items: center;
          margin-right: 20px;
        }
        .card__title {
          font-size: 25px;
          padding-right: 10px;
          color: #000;
          margin-block-start: 0em;
          margin-block-end: 0em;
        }
        .card__date {
          font-size: 18px;
        }
        @media only screen and (max-width: 768px) {
          .card {
            margin: 50px 15px;
          }
        }
      `}</style>
    </>
  );
}

export function MarkdownCard({ title, date }) {
  return (
    <>
      <div className="card">
        <h3 className="card__title">{title}</h3>
        <div className="card__row">
          <span className="card__date">{date}</span>
        </div>
      </div>
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          padding: 20px;
          min-width: 350px;
          max-width: 350px;
          min-height: 200px;
          margin: 50px 30px;
          background-color: #ffefde;
          border: 2px solid #810000;
          box-shadow: 4px 4px 4px #810000;
          text-align: left;
          justify-content: space-between;
        }

        .card__title {
          font-size: 25px;
          padding-right: 10px;
          color: #000;
          margin-block-start: 0em;
          margin-block-end: 0em;
        }
        .card__date {
          font-size: 18px;
        }
        @media only screen and (max-width: 768px) {
          .card {
            margin: 50px 15px;
          }
        }
      `}</style>
    </>
  );
}
