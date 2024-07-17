interface skillsContainerProps {
  skills: string[];
  skillsToIcon: { [key: string]: string };
}

function SkillsContainer(props: skillsContainerProps) {
  console.log(props.skills);
  return (
		<>
			<div className="flex flex-wrap justify-center dark:bg-gray-900">
				{props.skills.map((skill, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center m-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
						>
							<img
								src={props.skillsToIcon[skill]}
								alt={skill}
								className="h-8 w-8"
							/>
							<p className="text-sm dark:text-white">{skill}</p>
						</div>
					);
				})}
			</div>
		</>
  );
}

export default SkillsContainer;