interface ProjectGalleryProps {
	projects: Project[];
	skillsToIcon: { [key: string]: string };
}

interface Project {
	project_name: string;
	source_code: string;
	Technology: string[];
	Description: string;
	company_link: string;
}


function ProjectGallery(props: ProjectGalleryProps) {
  return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10 dark:bg-gray-900">
				{props.projects.map((project, index) => (
					<div
						key={index}
						className="p-6 bg-gray-200 dark:bg-gray-800 rounded-lg"
					>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							{project.project_name}
						</h3>
						<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
							{project.Description}
						</p>
						<div className="flex items-center justify-between mt-4">
							{project.source_code ===
							"Private as it's industry project" ? (
								<p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
									Private
								</p>
							) : (
								<a
									href={project.source_code}
									target="_blank"
									rel="noreferrer"
									className="text-sm font-semibold text-blue-500 dark:text-blue-400"
								>
									Source Code
								</a>
							)}
							{project.company_link === "none" ? (
								<p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
									Private
								</p>
							) : (
								<a
									href={project.company_link}
									target="_blank"
									rel="noreferrer"
									className="text-sm font-semibold text-blue-500 dark:text-blue-400"
								>
									build for
								</a>
							)}
						</div>
						<div className="flex flex-wrap justify-center mt-4">
							{project.Technology.map((tech, index) => (
								<div
									key={index}
									className="flex flex-col items-center justify-center m-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
								>
									<img
										src={props.skillsToIcon[tech]}
										alt={tech}
										className="h-8 w-8"
									/>
									<p className="text-sm dark:text-white">
										{tech}
									</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
  );
}

export default ProjectGallery;