import { useState } from "preact/hooks";

function NavbarComponent() {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

    return (
		<nav className="sticky top-0 bg-white border-gray-200 dark:bg-gray-900 p-2 w-screen">
			<div className="max-w-screen-1350 flex flex-wrap items-center justify-between ">
				<a
					href="https://github.com/siddh34"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img
						src="https://avatars.githubusercontent.com/u/85681558?s=400&u=3ddee2e51a7c2ca66f3fcea5972c23f3e380c5ca&v=4"
						className="h-8 w-8 rounded-full mb-2"
						alt="Profile Logo"
					/>
					<span className="self-center text-2xl font-playwrite whitespace-nowrap dark:text-white">
						Siddh34
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded={isNavbarExpanded}
					onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
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
					className={`${
						isNavbarExpanded ? "block" : "hidden"
					} w-full md:block md:w-auto`}
					id="navbar-default"
				>
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<a
								href="#projects"
								className="block py-5 px-5 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
								aria-current="page"
								onClick={() => setIsNavbarExpanded(false)}
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#story"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:bg-gray-900"
								onClick={() => setIsNavbarExpanded(false)}
							>
								My Story
							</a>
						</li>
						<li>
							<a
								href="mailto:ssiddharthsutar@gmail.com"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:bg-gray-900"
								onClick={() => setIsNavbarExpanded(false)}
							>
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavbarComponent;
