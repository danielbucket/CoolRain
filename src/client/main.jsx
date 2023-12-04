import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './routes/Index/Index'
import Home from './routes/Home/Home';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import './main.style.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <Index /> },
				],
			},
		],
	},
]);

ReactDom.createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);