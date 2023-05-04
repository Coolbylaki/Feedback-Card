import Card from "../components/Card";
import star from "../assets/images/icon-star.svg";
import classes from "./HomePage.module.css";

const HomePage = () => {
	return (
		<Card>
			<img src={star} alt="star image" className={classes.star} />
			<h1>How did we do?</h1>
			<p>
				Please let us know how we did with your support request. All feedback is appreciated to help us improve our
				offering!
			</p>
			<section>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
			</section>
			<div className={classes["submit-button"]}>SUBMIT</div>
		</Card>
	);
};

export default HomePage;
