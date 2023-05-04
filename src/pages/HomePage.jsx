import Card from "../components/Card";
import star from "../assets/images/icon-star.svg";
import classes from "./HomePage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
	const [rating, setRating] = useState(null);

	const onRatingClickHandler = (e) => {
		setRating(e.target.textContent);
		console.log(e.target.textContent);
	};

	return (
		<>
			<Card>
				<img src={star} alt="star image" className={classes.star} />
				<h1 className={classes["align-text"]}>How did we do?</h1>
				<p className={classes["align-text"]}>
					Please let us know how we did with your support request. All feedback is appreciated to help us improve our
					offering!
				</p>
				<section>
					<div onClick={onRatingClickHandler} tabindex="0">
						1
					</div>
					<div onClick={onRatingClickHandler} tabindex="0">
						2
					</div>
					<div onClick={onRatingClickHandler} tabindex="0">
						3
					</div>
					<div onClick={onRatingClickHandler} tabindex="0">
						4
					</div>
					<div onClick={onRatingClickHandler} tabindex="0">
						5
					</div>
				</section>

				<Link
					to="/feedback"
					state={{
						value: rating,
					}}
					className={classes["submit-button"]}>
					SUBMIT
				</Link>
			</Card>
			<Footer />
		</>
	);
};

export default HomePage;
