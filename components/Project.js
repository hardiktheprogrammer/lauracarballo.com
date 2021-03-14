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
      </div>
      <div className="projects__link">
        <StyledLink href={liveLink}>Live</StyledLink>
        <StyledLink href={codeLink}>Code</StyledLink>
      </div>
      <style jsx>{`
        .project {
          padding: 0px 20px;
          max-width: 50%;
        }

        .project__image {
          width: 100%;
          height: auto;
          margin-bottom: 20px;
          min-height: 300px;
        }

        .projects__link {
          margin: 30px 0;
        }

        .project__container {
          min-height: 235px;
        }

        @media only screen and (max-width: 768px) {
          .project {
            max-width: 100%;
            margin: 20px 0;
          }

          .project__image {
            min-height: 0;
          }

          .project__container {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
