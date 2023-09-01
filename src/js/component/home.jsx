import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./Jumbotron";
import Footer from "./footer";
import { element } from "prop-types";

const arrayOfCards = [
	{
	imgUrl: "https://pngimg.com/uploads/pirate/pirate_PNG39.png",
	title: "Hello",
	description: "Hi",
	buttonUrl: "",
	buttonLabel: "Cool",
},
{
	imgUrl: "https://kidsclubforjesus.org/img/nature/facts/crocodile-full-img.jpg",
	title: "go",
	description: "hey",
	buttonUrl: "",
	buttonLabel: "sup",
},
{
	imgUrl: "https://farm66.static.flickr.com/65535/52949770368_e12f876b6a.jpg",
	title: "nice",
	description: "world",
	buttonUrl: "",
	buttonLabel: "helicopter",
}];

//create your first component
const Home = () => {
	return (
		<>
		<div>
			<Navbar/>
		</div>
		<div>
			<Jumbotron/>
		</div>
		<div className="d-flex container">	
		{arrayOfCards.map((element, i)=> {
			return(
				<Card imgUrl={element.imgUrl}
				title={element.title}
				description={element.description}
				buttonUrl={element.buttonUrl}
				buttonLabel={element.buttonLabel} />
			)
		} )}
		</div>
			<Footer className="mb-0"/>
		</>
	);
};



export default Home;

