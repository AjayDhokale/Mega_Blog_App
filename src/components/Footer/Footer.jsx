import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container'


const Footer = () => {
    return (
        <footer className="bg-[#020617] border-t border-slate-800">
            <Container>
                <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Logo width="w-[120px]" />
                        <p className="mt-4 text-sm text-slate-400">
                            © 2025 Mega Blog App
                            Crafted with ❤️ using React & Appwrite
                        </p>
                    </div>

                    {["Company", "Support", "Legal"].map((title) => (
                        <div key={title}>
                            <h3 className="text-sm font-semibold text-slate-300 mb-4">
                                {title}
                            </h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li className="hover:text-white cursor-pointer">About</li>
                                <li className="hover:text-white cursor-pointer">Contact</li>
                                <li className="hover:text-white cursor-pointer">Privacy</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </footer>
    )
}


export default Footer