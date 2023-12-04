import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import './main.style.css';
import Home from './routes/Home/Home';
import Index from './routes/Index/Index'
import ErrorPage from './routes/ErrorPage/ErrorPage';
import Collection from './routes/Collection/Collection';

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
					{
						path: 'collection/',
						element: <Collection />,
					},
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