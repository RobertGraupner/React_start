//import Hero from "./components/Hero/Hero.js";
//import SearchForm from "./components/SearchForm/SearchForm.js";
import List from "./components/List/List.js";
import Container from "./components/Container/Container.js";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Favorite from "./components/Favorite/Favorite.js"
import NotFound from "./components/NotFound/NotFound.js";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<main>
			<NavBar />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/favorite" element={<Favorite />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/list/:listId" element={<List />} />
				</Routes>
			</Container>
		</main>
	);
};

export default App;