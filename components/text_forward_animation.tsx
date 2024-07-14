interface text_forward_animationProps {
    text: string;
}

function TextForwardAnimation(props: text_forward_animationProps) {
    return (
		<div className="typewriter dark:text-white">
			<h5 id="animatedText">{props.text}</h5>
		</div>
	);
}

export default TextForwardAnimation;
