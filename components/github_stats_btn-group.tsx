interface GithubStatsProps {
	pr_count: number;
	issue_count: number;
	fork_count: number;
}

function GithubStatsBtnGroup(props: GithubStatsProps) {
    
    console.log("props:", props);

	return (
		<div className="flex justify-center items-center">
			<div class="inline-flex rounded-md shadow-sm" role="group"></div>
			<button
				type="button"
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
			>
				PR count: {props.pr_count}
			</button>
			<button
				type="button"
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
			>
				Issues count: {props.issue_count}
			</button>
			<button
				type="button"
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
			>
				Fork count: {props.fork_count}
			</button>
		</div>
	);
}

export default GithubStatsBtnGroup;
