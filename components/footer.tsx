import { Code2, Facebook, Github, Linkedin, X } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
	return (
		<footer className='bg-gray-50 dark:bg-gray-900 py-12'>
			<div className='container mx-auto px-4 sm:px-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12'>
					<div>
						<Link href='/' className='flex items-center space-x-2 mb-4'>
							<Code2 className='h-6 w-6 sm:h-8 sm:w-8 text-green-600' />
							<span className='font-bold text-lg sm:text-xl'>TheCode EI</span>
						</Link>
						<p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4'>
							Transformando empresas através de soluções de software inovadoras
							e estratégias digitais.
						</p>
						<div className='flex space-x-4'>
							<SocialLink href='#' icon={<X className='h-5 w-5' />} />
							<SocialLink href='#' icon={<Linkedin className='h-5 w-5' />} />
							<SocialLink href='#' icon={<Github className='h-5 w-5' />} />
							<SocialLink href='#' icon={<Facebook className='h-5 w-5' />} />
						</div>
					</div>

					<div>
						<h3 className='font-bold text-lg mb-4'>Serviços</h3>
						<FooterLinks
							links={[
								{
									href: '/services/software-development',
									label: 'Desenvolvimento de Software',
								},
								{
									href: '/services/digital-transformation',
									label: 'Transformação Digital',
								},
								{
									href: '/services/cloud-solutions',
									label: 'Soluções em Nuvem',
								},
								{ href: '/services/consulting', label: 'Consultoria em TI' },
							]}
						/>
					</div>

					<div>
						<h3 className='font-bold text-lg mb-4'>Empresa</h3>
						<FooterLinks
							links={[
								{ href: '/about', label: 'Sobre Nós' },
								{ href: '/portfolio', label: 'Portfólio' },
								{ href: '/blog', label: 'Blog' },
								{ href: '/careers', label: 'Carreiras' },
							]}
						/>
					</div>

					<div>
						<h3 className='font-bold text-lg mb-4'>Contacto</h3>
						<div className='space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300'>
							<p>Rua da Resistência, 123</p>
							<p>Cidade de Maputo</p>
							<p>contato@thecodeei.co.mz</p>
							<p>+258 84 333 3333</p>
						</div>
					</div>
				</div>

				<div className='border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm sm:text-base text-gray-600 dark:text-gray-300'>
					<p>
						&copy; {new Date().getFullYear()} TheCode EI. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
	return (
		<a
			href={href}
			className='text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors'
		>
			{icon}
		</a>
	);
}

function FooterLinks({ links }: { links: { href: string; label: string }[] }) {
	return (
		<ul className='space-y-2'>
			{links.map((link) => (
				<li key={link.href}>
					<Link
						href={link.href}
						className='text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors'
					>
						{link.label}
					</Link>
				</li>
			))}
		</ul>
	);
}
