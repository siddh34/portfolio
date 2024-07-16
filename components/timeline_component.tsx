
interface TimelineComponentProps {
	display: string;
	eddata: Education[];
	exprdata: experience[];
}

interface Education {
	startDate: string;
	endDate: string;
	degree: string;
	major: string;
	institution: string;
}

interface experience {
	company: string;
	position: string;
	startDate: string;
	endDate: string;
	description: string[];
}

function TimelineComponent(props: TimelineComponentProps) {
	if (props.display === "education") {
		return (
			<>
				<ol class="relative border-s border-gray-200 dark:border-gray-700">
					{props.eddata.map((item: Education, index: number) => (
						<li key={index} className="mb-10 ms-4">
							<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
							<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								{item.startDate} - {item.endDate}
							</time>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								{item.degree} in {item.major}
							</h3>
							<p className="text-base font-normal text-gray-500 dark:text-gray-400">
								{item.institution}
							</p>
						</li>
					))}
				</ol>
			</>
		);
	} else {
		return (
			<>
				<div className="overflow-auto max-h-[400px] flex">
					<ol className="flex items-center space-x-4">
						{props.exprdata.map((item, index) => (
							<li key={index} className="flex-none">
								<div className="flex items-center">
									<div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
										{/* Icon or visual representation */}
									</div>
									<div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 ml-4">
									</div>
								</div>
								<div className="mt-3">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{item.position} at {item.company}
									</h3>
									<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
										{item.startDate} - {item.endDate}
									</time>
								</div>
							</li>
						))}
					</ol>
				</div>
			</>
		);
	}
}

export default TimelineComponent;
