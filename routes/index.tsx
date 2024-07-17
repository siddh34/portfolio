import Skills from "../islands/skills.tsx";
import Navbar from "../islands/navbar.tsx";
import GithubStats from "../islands/github_stats.tsx";
import TextAnimate from "../islands/text_animate.tsx";
import Timeline from "../islands/timeline.tsx";
import Projects from "../islands/projects.tsx";

const arr = [
	"Hello, myself Siddharth Sutar",
	"I'm a software engineer",
	"I love to code",
	"I'm a full stack developer",
	"I'm a web developer",
	"I'm a mobile developer",
];

export default function Home() {
	return (
		<div className="bg-white dark:bg-gray-900  h-full mx-auto">
			<Navbar />
			<div className="bg-white dark:bg-gray-900 flex justify-center items-center">
				<TextAnimate array={arr} />
			</div>
			<div className="bg-white dark:bg-gray-900 flex justify-center items-center m-10">
				<img
					src="/main.jpg"
					className="rounded-xl object-cover h-50 w-96"
				/>
			</div>
			<div className="flex justify-center items-center pb-3 dark:text-white dark:bg-gray-900">
				<p>Github Stats</p>
			</div>
			<GithubStats />
			<div className="flex justify-center items-center pb-7 dark:text-white mt-4 dark:bg-gray-900">
				<p>Below are the skills that I invested in</p>
			</div>
			<Skills />
			<div
				className="flex justify-center items-center dark:text-white dark:bg-gray-900 dark:border-slate-900"
				id="story"
			>
				<p>Educational Timeline</p>
			</div>
			<div className="flex justify-center items-center  dark:text-white dark:bg-gray-900">
				<Timeline fetchData="education" />
			</div>
			<div className="flex justify-center items-center pt-4 pb-4 dark:text-white dark:bg-gray-900">
				<p>Professional Timeline</p>
			</div>
			<div className="flex justify-center items-center pl-20 pr-20 dark:text-white dark:bg-gray-900">
				<Timeline fetchData="experience" />
			</div>
			<div
				className="flex justify-center items-center pt-3 dark:text-white dark:bg-gray-900"
				id="projects"
			>
				<p>My Projects</p>
			</div>
			<div className="flex justify-center items-center dark:text-white dark:bg-gray-900">
				<Projects />
			</div>
		</div>
	);
}
