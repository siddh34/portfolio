import { useEffect, useState } from "preact/hooks";
import Socials from "../components/socials.tsx";

function SocialIsland() {
	const [socials, setSocials] = useState({});
	const [socialsIcon, setSocialsIcon] = useState({});

	useEffect(() => {
		fetch("/api/socials")
			.then((res) => res.json())
			.then((data) => {
				setSocials(data.socials);
				setSocialsIcon(data.socialsIcon);
			});
	}, []);

	return (
		<div>
			<Socials socials={socials} socialsIcon={socialsIcon} />
		</div>
	);
}

export default SocialIsland;
