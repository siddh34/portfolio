import Skills from "../islands/skills.tsx";
import GithubStats from "../islands/github_stats.tsx";
import TextAnimate from "../islands/text_animate.tsx";
import Timeline from "../islands/timeline.tsx";

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
		<div className="bg-white dark:bg-gray-900 h-full mx-auto">
			<nav class="bg-white border-gray-200 dark:bg-gray-900 mx-auto">
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a
						href="https://github.com/siddh34"
						class="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img
							src="https://avatars.githubusercontent.com/u/85681558?s=400&u=3ddee2e51a7c2ca66f3fcea5972c23f3e380c5ca&v=4"
							class="h-8 w-8 rounded-full mb-2"
							alt="Profile Logo"
						/>
						<span class="self-center text-2xl font-playwrite whitespace-nowrap dark:text-white">
							Siddh34
						</span>
					</a>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div
						class="hidden w-full md:block md:w-auto"
						id="navbar-default"
					>
						<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<a
									href="#"
									class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
									aria-current="page"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									My Story
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Contact Me
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
				<TextAnimate array={arr} />
			</div>
			<div class="bg-white dark:bg-gray-900 flex justify-center items-center m-10">
				<img
					src="/main.jpg"
					className="rounded-xl object-cover h-50 w-96"
				/>
			</div>
			<div className="flex justify-center items-center mb-7 dark:text-white">
				<p>Github Stats</p>
			</div>
			{/* <GithubStats /> */}
			<div className="flex justify-center items-center mb-7 dark:text-white mt-4">
				<p>Below are the skills that I invested in</p>
			</div>
			<Skills />
			<div className="flex justify-center items-center mb-7 mt-7 ml-9 pl-9 mr-5 dark:text-white">
				<p>Educational Timeline</p>
			</div>
			<div className="flex justify-center items-center mb-7 mt-7 dark:text-white">
				<Timeline fetchData="education" />
			</div>
			<div className="flex justify-center items-center mb-7 mt-7 dark:text-white">
				<p>Professional Timeline</p>
			</div>
			<div className="flex justify-center items-center mb-7 mt-7 ml-20 dark:text-white">
				<Timeline fetchData="experience" />
			</div>
		</div>
	);
}
