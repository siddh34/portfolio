import TextForwardAnimation from "../components/text_forward_animation.tsx";
import { useEffect, useState, useRef } from "preact/hooks";

interface TextAnimateProps {
	array: string[];
}

function TextAnimate(props: TextAnimateProps) {
	const [text, setText] = useState(props.array[0]);
	const animatedTextRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;
		const handleAnimationIteration = () => {
			timeoutId = setTimeout(() => {
				const randomIndex = Math.floor(
					Math.random() * props.array.length
				);
				setText(props.array[randomIndex]);
			}, 5000);
		};

		const animatedText = animatedTextRef.current;
		if (animatedText) {
			animatedText.addEventListener(
				"animationiteration",
				handleAnimationIteration
			);
		}

		return () => {
			if (animatedText) {
				animatedText.removeEventListener(
					"animationiteration",
					handleAnimationIteration
				);
			}
			clearTimeout(timeoutId);
		};
	}, [props.array]);

	return (
		<div ref={animatedTextRef}>
			<TextForwardAnimation text={text} />
		</div>
	);
}

export default TextAnimate;
