import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Cards } from "./cards";
import { Carousel } from "./carousel";
import {modal} from "./modal";
import {footer} from "./footer"
let va = [
	"https://thumbs.gfycat.com/CompetentMeekHydra-max-1mb.gif",
	"https://thumbs.gfycat.com/IllinformedRingedAmericanindianhorse-size_restricted.gif",
	"https://66.media.tumblr.com/c3b9d679cb2b1b450bcf913a92488750/3ad4d78bcb030020-0b/s400x600/b4caf3466cf467000c8ceb00f8fbdea4e5331364.gif",
	"https://thumbs.gfycat.com/DecentEnchantedErne-size_restricted.gif"
];

export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="cards-group d-flex justify-content-center">
				{va.map((item, index) => (
					<Cards key={index} myimage={item} />
				))}
			</div>
		</>
	);
}
