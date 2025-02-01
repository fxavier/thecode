'use client';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Code2, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
					: 'bg-transparent'
			}`}
		>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between h-16 sm:h-20'>
					<Link href='/' className='flex items-center space-x-2'>
						<Code2 className='h-6 w-6 sm:h-8 sm:w-8 text-green-600' />
						<span className='font-bold text-lg sm:text-xl'>TheCode EI</span>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						<NavLink href='/about'>Quem Somos</NavLink>
						<NavLink href='/services'>Serviços</NavLink>
						<NavLink href='/portfolio'>Portfólio</NavLink>
						<NavLink href='/blog'>Blog</NavLink>
						<NavLink href='/contact'>Contacto</NavLink>
					</div>

					<div className='hidden md:flex items-center space-x-4'>
						<ModeToggle />
						<Button className='bg-green-600 hover:bg-green-700'>
							Começar Agora
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className='flex items-center space-x-4 md:hidden'>
						<ModeToggle />
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className='text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
						>
							{isMobileMenuOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className='md:hidden py-4 border-t border-gray-200 dark:border-gray-700'>
						<div className='flex flex-col space-y-4'>
							<MobileNavLink
								href='/about'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Sobre
							</MobileNavLink>
							<MobileNavLink
								href='/services'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Serviços
							</MobileNavLink>
							<MobileNavLink
								href='/portfolio'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Portfólio
							</MobileNavLink>
							<MobileNavLink
								href='/blog'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Blog
							</MobileNavLink>
							<MobileNavLink
								href='/contact'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Contacto
							</MobileNavLink>
							<Button className='bg-green-600 hover:bg-green-700 w-full'>
								Começar Agora
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className='text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base'
		>
			{children}
		</Link>
	);
}

function MobileNavLink({
	href,
	onClick,
	children,
}: {
	href: string;
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className='text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors px-4 py-2 text-lg'
		>
			{children}
		</Link>
	);
}
