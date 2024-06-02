import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from './ui/pages/login/LoginPage.tsx'
import RegisterUserPage from './ui/pages/login/RegisterUserPage.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />
	},
	{
		path: "/login",
		element: <LoginPage />
	},
	{
		path: "/registerUser",
		element: <RegisterUserPage />
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
