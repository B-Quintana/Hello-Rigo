import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from "./navbar";
import { Cards } from "./cards";
//import { Carousel } from "./carousel";

let va = [ "https://thumbs.gfycat.com/CompetentMeekHydra-max-1mb.gif",
            "https://thumbs.gfycat.com/IllinformedRingedAmericanindianhorse-size_restricted.gif",
            "https://lh3.googleusercontent.com/proxy/EPK6AAIoSkc0_ANWIXJs2MSM-MIWWYdzGbqwTGehxhQBSeC2YzMVk2hDwimbYONldS1I8A_Z5YfaD1pF0SbozbG3cKJOHBz_YFXXT2JmkVwEU5__ClXrJydJGKqZmlcKF5TMiso",
            "https://thumbs.gfycat.com/DecentEnchantedErne-size_restricted.gif"
]

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
