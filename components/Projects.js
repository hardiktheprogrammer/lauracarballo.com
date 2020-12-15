export default function Projects({ name, description, website }) {
  return (
    <div className="projects__item">
      <div className="projects__item-name">{name}</div>
      <div className="projects__item-description">
        <span>{description}</span>
        <div className="projects__item-learn-more-container">
          <a className="projects__item-learn-more" href={website}>
            <div className="projects__item-learn-more-text">Learn more</div>
            <div className="link-arrow-container">
              <span className="link_arrow-first">
                <i className="fas fa-arrow-right"></i>
              </span>
              <span className="link_arrow-second">
                <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .projects__item {
          display: grid;
          grid-template-columns: 40% 60%;
          margin-top: 50px;
          text-align: left;
        }

        .projects__item-name {
          font-weight: 700;
          font-size: 1.5rem;
        }

        .projects__item-learn-more {
          display: flex;
          position: relative;
          max-width: 140px;
          font-size: 17px;
          font-weight: 700;
          margin-top: 15px;
        }

        .projects__item-learn-more:after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: black;
          transform: scaleX(1);
          transform-origin: left center;
          transition: transform 0.33s linear;
        }
        .projects__item-learn-more:hover:after {
          transform: scaleX(0);
          transform-origin: right center;
        }

        .link-arrow-container {
          display: inline-block;
          position: relative;
          overflow: hidden;
          width: 15px;
        }

        .link_arrow-first {
          position: absolute;
          left: 0;
          transform: translateX(0%);
        }

        .projects__item-learn-more:hover .link_arrow-first {
          transform: translateX(200%);
          transition: transform 0.33s linear;
        }

        .link_arrow-second {
          position: absolute;
          transform: translateX(-150%);
          left: 8px;
        }

        .projects__item-learn-more:hover .link_arrow-second {
          transform: translateX(-50%);
          transition: transform 0.33s linear;
        }

        .projects__item-learn-more-text {
          text-transform: uppercase;
        }

        @media only screen and (max-width: 767px) {
          .projects__item {
            grid-template-rows: 50% 50%;
            grid-template-columns: none;
            font-size: 16px;
            text-align: center;
          }

          .projects__item-description {
            margin-left: 0px;
            text-align: center;
          }

          .projects__item-learn-more {
            left: 30%;
          }
        }
      `}</style>
    </div>
  );
}
