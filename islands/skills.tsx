import { useEffect, useState } from "preact/hooks";
import SkillsContainer from "../components/skills_container.tsx";

function Skills() {
  const [skillsArray, setSkillsArray] = useState<string[]>([]);
  const [skillsToIcon, setSkillsToIcon] = useState({});

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSkillsArray(data.skills);
        setSkillsToIcon(data.skillsToIcon);
      });
  }, []);

  return skillsArray.length > 0 ? (
    <SkillsContainer skills={skillsArray} skillsToIcon={skillsToIcon} />
  ) : (
    <div>Loading...</div> // Replace this with your actual loader component or markup
  );
}

export default Skills;
