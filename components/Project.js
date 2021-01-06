import StyledLink from "./StyledLink";

export default function Project({
  image,
  title,
  subtitle,
  description,
  liveLink,
  codeLink,
}) {
  return (
    <div className="project">
      <img className="project__image" src={image} alt="project screenshot" />
      <div className="project__container">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <div className="project__description">
          <span>{description}</span>
        </div>
        <div className="projects__link">
          <StyledLink href={liveLink}>Live</StyledLink>
          <StyledLink href={codeLink}>Code</StyledLink>
        </div>
      </div>
      <style jsx>{`
        .project {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: 80px 0;
        }

        .project__image {
          width: 40vw;
          height: auto;
        }

        .project__container {
          padding: 0 40px;
        }

        .projects__link {
          margin: 30px 0;
        }

        @media only screen and (max-width: 768px) {
          .project {
            display: flex;
            flex-direction: column;
          }

          .project__image {
            width: 80vw;
            height: auto;
          }

          .project__container {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
