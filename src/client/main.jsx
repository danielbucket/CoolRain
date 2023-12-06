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
import WoodGallery from './routes/WoodGallery/WoodGallery';
import MetalGallery from './routes/MetalGallery/MetalGallery';
import Mythta_T from './routes/Mythta_T/Mythta_T';

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
						path: 'wood_gallery/',
						element: <WoodGallery />,
					},
					{
						path: 'metal_gallery/',
						element: <MetalGallery />,
					},
					{
						path: 'mythta_t/',
						element: <Mythta_T />,
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