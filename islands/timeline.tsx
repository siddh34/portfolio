import { useEffect, useState } from "preact/hooks";
import TimelineContainer from "../components/timeline_component.tsx";

interface TimelineProps {
    fetchData: string;
}

function Timeline(props: TimelineProps) {
    const [edData, setEdData] = useState([]);
    const [expData, setExpData] = useState([]);
    const [display, _] = useState(props.fetchData);

    useEffect(()=> {
        fetch("/api/timeline")
            .then((res) => res.json())
            .then((data) => {
                setEdData(data.edData);
                setExpData(data.expData);
            });
    })

    return (
        <>
            <TimelineContainer eddata={edData} exprdata={expData} display={display} />
        </>
    );
}

export default Timeline;
