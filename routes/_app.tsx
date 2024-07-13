import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
		<html>
			<head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>Siddharth Sutar</title>
				<link rel="stylesheet" href="/styles.css" />

				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');
				</style>
			</head>
			<body>
				<Component />
			</body>
		</html>
  );
}
