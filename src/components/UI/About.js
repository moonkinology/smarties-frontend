import React from "react";

function About() {
  const features = [
    {
      value: "1",
      label: "User Authentication",
    },
    {
      value: "2",
      label: "User Authorization",
    },
    {
      value: "3",
      label: "Wrting Review",
    },
    {
      value: "34",
      label: "Replying to Reviews",
    },
    {
      value: "5",
      label:
        "Like and Dislike featuer for comments and reviews (Logged-in users only)",
    },
    {
      value: "6",
      label: "Filtering Smartphones",
    },
    {
      value: "7",
      label: "Filtering Smartphones",
    },
    {
      value: "8",
      label: "Adminstration panel",
    },
  ];

  const technologies = [
    {
      value: "1",
      label: "React",
      link: "https://reactjs.org/",
    },
    {
      value: " 2",
      label: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      value: "3",
      label: "React Bootstrap",
      link: "https://react-bootstrap.github.io/",
    },
    {
      value: "4",
      label: "Ktor",
      link: "https://ktor.io/",
    },
    {
      value: "5",
      label: "Exposed - MySQL ",
      link: "https://github.com/JetBrains/Exposed",
    },
    {
      value: "6",
      label: "React Router DOM ",
      link: "https://v5.reactrouter.com/web/guides/quick-start",
    },
    {
      value: "7",
      label: "Firebase (Authentication, Cloud Firestore)",
      link: "https://firebase.google.com/",
    },
    {
      value: "8",
      label: "Axios",
      link: "https://github.com/axios/axios",
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Tech Stack
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="list-group">
            {technologies.map((option) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={option.value}
                href={option.link}
                class="list-group-item "
                aria-current="true"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Notable Features
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <ul class="list-group list-group-flush ms-2">
            {features.map((option) => (
              <li className="list-group-item " key={option.value}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
