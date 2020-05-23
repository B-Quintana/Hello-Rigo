import React from "react";

<Carousel>
	<Carousel.Item>
		<img
			className="d-block w-100",
			src="https://thumbs.gfycat.com/CompetentMeekHydra-max-1mb.gif"
			alt="First slide"
		/>
		<Carousel.Caption>
			<h3>First slide label</h3>
			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
		<img
			className="d-block w-100"
			src="https://thumbs.gfycat.com/IllinformedRingedAmericanindianhorse-size_restricted.gif"
			alt="Third slide holder.js"
		/>

		<Carousel.Caption>
			<h3>Second slide label</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
		<img
			className="d-block w-100"
			src="https://thumbs.gfycat.com/DecentEnchantedErne-size_restricted.gif"
			alt="Third slide"
		/>

		<Carousel.Caption>
			<h3>Third slide label</h3>
			<p>
				Praesent commodo cursus magna, vel scelerisque nisl consectetur.
			</p>
		</Carousel.Caption>
	</Carousel.Item>
</Carousel>;
function ControlledCarousel() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(null);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
		setDirection(e.direction);
	};

	return (
		<Carousel
			activeIndex={index}
			direction={direction}
			onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="holder.js/800x400?text=First slide&bg=373940"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="holder.js/800x400?text=Second slide&bg=282c34"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://i.ebayimg.com/images/g/cFMAAOSwQYZWt5KZ/s-l1600.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

render(<ControlledCarousel />);
