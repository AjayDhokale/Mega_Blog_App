import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { useState } from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'


function App() {

	const [loading, setLoading] = useState(true)
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	authService.getCurrentUser()
	// 		.then((userData) => {
	// 			if (userData) {
	// 				dispatch(login(userData))
	// 			} else {
	// 				dispatch(logout())
	// 			}
	// 		}).finally(() => setLoading(false))
	// }, [])

	useEffect(() => {
		let isMounted = true;

		const checkAuth = async () => {
			try {
				const user = await authService.getCurrentUser();
				if (!isMounted) return;

				if (user) {
					dispatch(login(user));
				} else {
					dispatch(logout());
				}
			} catch {
				dispatch(logout());
			} finally {
				if (isMounted) setLoading(false);
			}
		};

		checkAuth();

		return () => {
			isMounted = false;
		};
	}, []);



	return !loading ? (
		<div className="min-h-screen bg-[#0b0f19] text-slate-100">
			<Header />
			<main className="min-h-[80vh]">
				<Outlet />
			</main>
			<Footer />
		</div>
	) : null



}

export default App
