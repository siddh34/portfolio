import { useEffect, useState } from "preact/hooks";
import ExperienceTimeline from "../components/experience_timeline.tsx";

function Experience() {
	const [exData, setExData] = useState([]);

    useEffect(()=> {
        fetch("/api/timeline")
            .then((res) => res.json())
            .then((data) => {
                setExData(data.expData);
            });
    }, []);

	return <ExperienceTimeline experience={exData} />;
}

export default Experience;
