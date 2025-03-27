import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ButtonPage from "../pages/Button/ButtonPage";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            { path : "button", element : <ButtonPage></ButtonPage> },
            { path : "option2", element : <h1>Option 2 </h1> },
            { path : "/contact", element : <h1>Contact</h1> },
            { path : "*", element : <h1>Not Found</h1> }
        ]
    }
]);