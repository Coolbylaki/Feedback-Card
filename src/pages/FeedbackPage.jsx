import { useLocation } from "react-router-dom";

const FeedbackPage = () => {
	const location = useLocation();
	const { value } = location.state;

	return <h1>{value}</h1>;
};

export default FeedbackPage;
