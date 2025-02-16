import { useState, createElement } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export function App() {
	// Декларативный
	const date = new Date(Date.now());

	const [count, setCount] = useState(0);

	// Императивный
	return createElement(
		"div",
		{},
		createElement(
			"div",
			{},
			createElement(
				"a",
				{
					href: "https://vite.dev",
					target: "_blank",
				},
				createElement(
					"img",
					{
						src: viteLogo,
						className: "logo",
						alt: "Vite logo",
					}
				)
			),
			createElement(
				"a",
				{
					href: "https://react.dev",
					target: "_blank",
				},
				createElement(
					"img",
					{
						src: reactLogo,
						className: "logo react",
						alt: "React logo"
					}
				)
			)
		),
		createElement(
			"h1",
			{},
			"Vite + React"
		),

		createElement(
			"div",
			{
				className: "card"
			},
			'',
			createElement(
				"button",
				// {},
				{ onClick: () => setCount((count) => count += 1) },
				// "count EDIT"
				`count is ${count}`
			),
			createElement(
				"p",
				{},
				`${date.getFullYear()}`,
				// "EDIT Date time"
			)
		),
		createElement(
			"p",
			{
				className: "read-the-docs"
			},
			"Click on the Vite and React logos to learn more"
		)

	)

}
