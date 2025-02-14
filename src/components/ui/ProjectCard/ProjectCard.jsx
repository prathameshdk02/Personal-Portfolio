import React from "react";
import Card from "../Card/Card";
import InfoPill from "../InfoPill/InfoPill";

const ProjectCard = ({
  imgSrc,
  imgAlt,
  head,
  subHead,
  lineDesc,
  pointDesc,
  skills,
}) => {
  return (
    <Card className="bg-black">
      <div className="img-vignette">
        <img className="project-img" src={imgSrc} alt={imgAlt} />
      </div>
      <h2 className="text-xl font-medium">{head}</h2>
      <h3 className="text-sm text-secondarytext font-medium">{subHead}</h3>

      <p>{lineDesc}</p>

      <ul className="text-primarytext text-base list-disc ps-5">
        {pointDesc.map((e, i) => (
          <li key={i + 1}>{e}</li>
        ))}
      </ul>

      <div className="!mt-3">
        {skills.map((e, i) => (
          <InfoPill key={i + 1}>{e}</InfoPill>
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
