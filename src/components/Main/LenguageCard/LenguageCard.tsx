import { styled } from "styled-components";
import CourseCard from "../CourseCard/CourseCard";

interface Course {
  id?: string;
  img?: string;
  title?: string;
  description?: string;
  link?: string;
  author?: string;
  author_logo?: string;
  author_web?: string;
  video_link?: string;
}

interface LenguageCard {
  img?: string;
  number?: string;
  title?: string;
  description?: string;
  color?: string;
  courses?: Course[];
}

const LenguageCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 0 5rem 0;
  .lenguage-card-image {
    display: flex;
    align-items: start;
  }
  .lenguage-card-description {
    small {
      font-size: 1.7rem;
      color: lightgray;
    }
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .lenguage-card-resp-description,
  .lenguage-card-resp-title {
    display: none;
  }
  @media (max-width: 690px) {
    display: inherit;
    .lenguage-card-description {
      display: none;
    }
    .lenguage-card-resp-description {
      margin-top: 2rem;
      display: block;
    }
    .lenguage-card-resp-title {
      display: block;
      small {
        font-size: 1.7rem;
        color: lightgray;
      }
    }
  }
`;

const LenguageCardContent = styled.div`
  margin: 2rem 0;
  li {
    list-style: none;
    margin: 1rem 0;
  }
  h4 {
    width: 25%;
    padding: 1rem 0 0.2rem 0;
    border-radius: 2px;
    border-bottom: 0.5rem solid;
    margin-bottom: 1.5rem;
  }
`;

const LenguageCardCourses = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

function LenguageCard(props: LenguageCard) {
  return (
    <LenguageCardContainer>
      <div className="lenguage-card-image">
        <img src={props.img} width={"100px"} />
        <div className="lenguage-card-resp-title">
          <small>{props.number}</small>
          <h3>{props.title}</h3>
        </div>
      </div>
      <p className="lenguage-card-resp-description">{props.description}</p>
      <div className="lenguage-card-header">
        <div className="lenguage-card-description">
          <div>
            <small>{props.number}</small>
            <h3>{props.title}</h3>
          </div>
          <p>{props.description}</p>
        </div>
        <LenguageCardContent>
          <h4 style={{ borderColor: props.color }}>Cursos</h4>
          <LenguageCardCourses>
            {props.courses &&
              props.courses.map(
                ({
                  img,
                  title,
                  description,
                  author_logo,
                  author,
                  author_web,
                  link,
                }) => {
                  return (
                    <>
                      <CourseCard
                        img={img}
                        title={title}
                        description={description}
                        author_logo={author_logo}
                        author={author}
                        author_web={author_web}
                        link={link}
                      />
                    </>
                  );
                }
              )}
          </LenguageCardCourses>
        </LenguageCardContent>
      </div>
    </LenguageCardContainer>
  );
}

export default LenguageCard;
