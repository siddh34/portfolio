import TextForwardAnimation from "../components/text_forward_animation.tsx";
import { useEffect, useState, useRef } from "preact/hooks";

interface TextAnimateProps {
  array: string[];
}

function TextAnimate(props: TextAnimateProps) {
	const [text, setText] = useState(props.array[0]);
  const [index, setIndex] = useState(0);
	const animatedTextRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;
		const handleAnimationIteration = () => {
			const randomIndex = Math.floor(Math.random() * props.array.length);
			setIndex(randomIndex);
			const displayTimePerCharacter = 78;
			const timeoutDuration =
				props.array[randomIndex].length * displayTimePerCharacter;
			timeoutId = setTimeout(() => {
        setText(props.array[index]);
			}, timeoutDuration);
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
	}, [index]);

	return (
		<div ref={animatedTextRef}>
			<TextForwardAnimation text={text} />
		</div>
	);
}

export default TextAnimate;
