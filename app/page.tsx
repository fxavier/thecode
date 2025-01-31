'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Laptop, Rocket, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			{/* Hero Section */}
			<section className='relative min-h-[600px] h-[90vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6'>
				<div className='absolute inset-0 z-0'>
					<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
				</div>
				<div className='container mx-auto z-10'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 px-2'>
							Transformando Negócios Através da Inovação em Software
						</h1>
						<p className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-600 dark:text-gray-300 px-2'>
							Ajudamos empresas a evoluir através de soluções de software de
							ponta e estratégias de transformação digital.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center px-2'>
							<Button
								size='lg'
								className='bg-green-600 hover:bg-green-700 w-full sm:w-auto'
							>
								Começar Agora <ArrowRight className='ml-2 h-5 w-5' />
							</Button>
							<Button size='lg' variant='outline' className='w-full sm:w-auto'>
								Ver Nosso Trabalho
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4 sm:px-6'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12'>
						Nossos Serviços
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
						<ServiceCard
							icon={<Code2 className='h-6 w-6 sm:h-8 sm:w-8 text-green-600' />}
							title='Desenvolvimento de Software'
							description='Soluções personalizadas para as necessidades do seu negócio, desde aplicações web até apps móveis.'
						/>
						<ServiceCard
							icon={<Rocket className='h-6 w-6 sm:h-8 sm:w-8 text-green-600' />}
							title='Transformação Digital'
							description='Consultoria estratégica e implementação para modernizar seus processos de negócio.'
						/>
						<ServiceCard
							icon={<Laptop className='h-6 w-6 sm:h-8 sm:w-8 text-green-600' />}
							title='Soluções em Nuvem'
							description='Infraestrutura em nuvem escalável e segura para impulsionar suas iniciativas digitais.'
						/>
					</div>
				</div>
			</section>

			{/* Featured Project Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800'>
				<div className='container mx-auto px-4 sm:px-6'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12'>
						Projecto em Destaque
					</h2>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
						<div className='relative h-[250px] sm:h-[300px] md:h-[400px] w-full'>
							<Image
								src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015'
								alt='Projeto em Destaque'
								fill
								className='object-cover rounded-lg'
							/>
						</div>
						<div className='text-center lg:text-left'>
							<h3 className='text-xl sm:text-2xl font-bold mb-4'>
								Transformação Digital Empresarial
							</h3>
							<p className='text-gray-600 dark:text-gray-300 mb-6'>
								Ajudamos uma empresa Fortune 500 a modernizar seus sistemas
								legados, resultando em um aumento de 40% na eficiência
								operacional e melhor satisfação do cliente.
							</p>
							<Button
								variant='outline'
								className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white w-full sm:w-auto'
							>
								Ler Estudo de Caso
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4 sm:px-6'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12'>
						Nossa Equipe
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						<TeamMember
							image='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974'
							name='João Silva'
							role='Engenheiro de Software'
						/>
						<TeamMember
							image='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976'
							name='Sara Johnson'
							role='Arquitecta de Software'
						/>
						<TeamMember
							image='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974'
							name='Miguel Chen'
							role='Desenvolvedor Líder'
						/>
						<TeamMember
							image='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961'
							name='Emily Davis'
							role='Gerente de Produto'
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-green-600'>
				<div className='container mx-auto px-4 sm:px-6 text-center'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6'>
						Pronto para Transformar seu Negócio?
					</h2>
					<p className='text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2'>
						Vamos discutir como podemos ajudar você a alcançar seus objetivos de
						transformação digital.
					</p>
					<Button size='lg' variant='secondary' className='w-full sm:w-auto'>
						Agendar uma Consulta
					</Button>
				</div>
			</section>
		</main>
	);
}

function ServiceCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className='p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow'>
			<div className='mb-4'>{icon}</div>
			<h3 className='text-lg sm:text-xl font-bold mb-2'>{title}</h3>
			<p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>
				{description}
			</p>
		</div>
	);
}

function TeamMember({
	image,
	name,
	role,
}: {
	image: string;
	name: string;
	role: string;
}) {
	return (
		<div className='text-center'>
			<div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4'>
				<Image
					src={image}
					alt={name}
					fill
					className='object-cover rounded-full'
				/>
			</div>
			<h3 className='text-lg sm:text-xl font-bold mb-1'>{name}</h3>
			<p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>
				{role}
			</p>
		</div>
	);
}
