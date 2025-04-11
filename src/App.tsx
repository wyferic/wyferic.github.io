import "./App.css";
import "./styles/styles.css";
import "./styles/background.css";
import "./styles/header.css";
import "./styles/hover-text.css";
import "./styles/section.css";
import "./styles/contact.css";
import "./styles/footer.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Hobbies } from "./components/Hobbies";
import { Contact } from "./components/Contact";
import { startFog } from "./components/background";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		startFog();
	}, []);

	return (
		<>
			<div id="background"></div>
			<Header />
			<div
				id="sections"
				style={{
					marginTop: "64px",
					display: "flex",
					gap: "20px",
					flexDirection: "column",
				}}
			>
				<About />
				<Hobbies />
				<Contact />
			</div>
			<div
				style={{
					width: "100vw",
					height: "48px",
					position: "absolute",
					zIndex: 1,
					bottom: "0px",
					left: 0,
					backgroundColor: "red",
				}}
			>
				{/* <!-- <footer>&copy; 2024 WYF</footer> --> */}
			</div>
		</>
	);
}

export default App;
