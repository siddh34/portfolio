import { useEffect, useState } from "preact/hooks";
import ProjectGallery from "../components/project_gallery.tsx";

interface Project {
	project_name: string;
	source_code: string;
	Technology: string[];
	Description: string;
	Company_link: string;
}

interface skiilsToIcon {
    [key: string]: string;
}

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [skillsToIcon, setSkillsToIcon] = useState<skiilsToIcon>({});

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data.projects);
                setSkillsToIcon(data.skillsToIcon);
            });
    }, []);

    return projects.length > 0 ? (
        <ProjectGallery projects={projects} skillsToIcon={skillsToIcon} />
    ) : (
        <div>Loading...</div>
    );
}

export default Projects;