import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import thanks from "../assets/images/thanks.svg";
import classes from "./FeedbackPage.module.css";
import Footer from "../components/Footer";

const FeedbackPage = () => {
	const location = useLocation();
	const { value } = location.state;

	return (
		<>
			<Card>
				<img src={thanks} alt="thank you image" className={classes["card-img"]} />
				<div className={classes["p--div"]}>
					<p className={classes["feedback-p"]}>You selected {value} out of 5</p>
				</div>
				<h2>Thank you!</h2>
				<p>
					We appreciate you taking the time to give a rating. If you ever need more support don't hesitate to get in
					touch!
				</p>
			</Card>
			<Footer />
		</>
	);
};

export default FeedbackPage;
