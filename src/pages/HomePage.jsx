import Card from "../components/Card";
import star from "../assets/images/icon-star.svg";
import classes from "./HomePage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	const [rating, setRating] = useState(null);

	const onRatingClickHandler = (e) => {
		setRating(e.target.textContent);
		console.log(e.target.textContent);
	};

	return (
		<Card>
			<img src={star} alt="star image" className={classes.star} />
			<h1>How did we do?</h1>
			<p>
				Please let us know how we did with your support request. All feedback is appreciated to help us improve our
				offering!
			</p>
			<section>
				<div onClick={onRatingClickHandler}>1</div>
				<div onClick={onRatingClickHandler}>2</div>
				<div onClick={onRatingClickHandler}>3</div>
				<div onClick={onRatingClickHandler}>4</div>
				<div onClick={onRatingClickHandler}>5</div>
			</section>
			<div className={classes["submit-button"]}>
				<Link
					to="/feedback"
					state={{
						value: rating,
					}}>
					SUBMIT
				</Link>
			</div>
		</Card>
	);
};

export default HomePage;
