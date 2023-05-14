import { styled } from "styled-components";

interface Course {
  id?: string;
  title?: string;
  description?: string;
  author?: string;
  author_logo?: string;
  author_web?: string;
  img?: string;
  link?: string;
}

const CourseCardContainer = styled.div`
  width: 100%;
  background-color: var(--mediumgray);
  max-width: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .course-card-img {
    width: 100%;
    height: 18rem;
    overflow: hidden;
    img {
      width: 100%;
      height: inherit;
      object-fit: cover;
      object-position: center;
      transition: width 0.3s ease;
    }
    img:hover {
      width: 105%;
    }
  }
  .course-card-title {
    padding: 2rem 0 1.5rem 1rem;
  }
  .course-card-description {
    p {
      font-size: 1.3rem;
      padding: 0 1rem 2rem 1rem;
      text-align: left;
    }
  }
  .course-card-footer {
    display: flex;
    justify-content: right;
  }
  .course-card-footer-container {
    img {
      width: 3rem;
    }
    small {
      font-size: 0.9rem;
    }
    display: flex;
    justify-content: right;
    padding: 1rem;
    gap: 0.8rem;
    align-items: center;
    width: fit-content;
  }
  @media (max-width: 690px) {
    .course-card-description {
      p {
        font-size: 0.9rem;
      }
    }
    .course-card-footer-container {
      img {
        width: 1.2rem;
      }
      small {
        font-size: 0.7rem;
      }
    }
    .course-card-title {
      h5 {
        font-size: 1rem;
      }
    }
  }
`;

function CourseCard({
  img,
  title,
  description,
  author_logo,
  author,
  author_web,
  link,
}: Course) {
  return (
    <CourseCardContainer>
      <div className="course-card-header">
        <a href={link}>
          <div className="course-card-img">
            <img src={img} />
          </div>
        </a>
        <div className="course-card-title">
          <a href={link}>
            <h5>{title}</h5>
          </a>
        </div>
        <div className="course-card-description">
          <p>{description}</p>
        </div>
      </div>
      <div className="course-card-footer">
        <div className="course-card-footer-container">
          <a href={author_web}>
            <small>{author}</small>
          </a>
          <a href={author_web}>
            <img src={author_logo} />
          </a>
        </div>
      </div>
    </CourseCardContainer>
  );
}

export default CourseCard;
