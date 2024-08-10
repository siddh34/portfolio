interface experience {
	company: string;
	position: string;
	startDate: string;
	endDate: string;
	description: string[];
}

interface ExperienceTimelineProps {
	experience: experience[];
}

function ExperienceTimeline(props: ExperienceTimelineProps) {
	return (
		<div class="timeline mx-auto my-5 p-5">
			{props.experience.map((exp) => {
				return (
					<div class="space-y-6 border-l-2 border-dashed">
						<div class="relative w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
							>
								<circle cx="10" cy="10" r="10" />
							</svg>
							<div class="ml-6">
								<h4 class="font-bold text-blue-500">
									{exp.position} @ {exp.company}
								</h4>
								{exp.description.map((desc) => {
									return (
										<p class="mt-2 max-w-screen-sm text-sm text-gray-500">
											{desc}
										</p>
									);
								})}
								<span class="mt-1 block text-sm font-semibold text-blue-500">
									{exp.startDate} - {exp.endDate}
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ExperienceTimeline;
