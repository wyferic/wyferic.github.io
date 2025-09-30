import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background } from "./components/Background";

function App() {
	return (
		<>
			<Header />
			<Background />
			<div className="absolute w-screen top-12 min-h-[calc(100vh-48px)]">
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default App;
