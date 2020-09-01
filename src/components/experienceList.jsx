import React from "react";
import ExperienceItem from "./experienceItem";

function ExperienceList(props) {
  const { experiences } = props;

  const experienceThumbs = experiences.map((experience) =>
    <ExperienceItem experience={experience} />
  );

  return (
    <>
      {experienceThumbs}
    </>
  )
}

export default ExperienceList;
