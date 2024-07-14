import { useEffect, useState } from "preact/hooks";
import GithubStatsBtnGroup from "../components/github_stats_btn-group.tsx";

interface githubStatsResponse {
    PRs: number;
    Issues: number;
    Forks: number;
}

function GithubStats() {
    const [prCount, setPrCount] = useState(0);
    const [issueCount, setIssueCount] = useState(0);
    const [forkCount, setForkCount] = useState(0);


    useEffect(() => {
        fetch("/api/github")
            .then((response) => response.json())
            .then((data: githubStatsResponse) => {
                setPrCount(data.PRs);
                setIssueCount(data.Issues);
                setForkCount(data.Forks);
            });
    }, []);


	return (<>
        <GithubStatsBtnGroup pr_count={prCount} issue_count={issueCount} fork_count={forkCount} />
    </>);
}

export default GithubStats;
