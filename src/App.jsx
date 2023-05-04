import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FeedbackPage from "./pages/FeedbackPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/feedback",
		element: <FeedbackPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
