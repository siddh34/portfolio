interface SocialsProps {
	socials: { [key: string]: string };
	socialsIcon: { [key: string]: string };
}

function Socials(props: SocialsProps) {
	return (
		<div className="flex items-center justify-center space-x-4 mb-4">
			{Object.keys(props.socials).map((social, index) => {
				return (
					<a
						key={index}
						href={props.socials[social]}
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 hover:transform hover:scale-110 transition duration-300"
					>
						<img
							src={props.socialsIcon[social]}
							alt={social}
							className="h-6 w-6"
						/>
					</a>
				);
			})}
		</div>
	);
}

export default Socials;
