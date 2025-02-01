'use client';

import { Button } from '@/components/ui/button';
import { Award, Users, Target, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
	return (
		<main className='pt-16 sm:pt-20'>
			{/* Hero Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
							Sobre a TheCode EI
						</h1>
						<p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8'>
							Somos uma empresa líder em desenvolvimento de software e
							transformação digital, comprometida em impulsionar a inovação e o
							crescimento dos nossos clientes.
						</p>
					</div>
				</div>
			</section>

			{/* Mission and Vision */}
			<section className='py-12 sm:py-16 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						<div className='relative h-[300px] sm:h-[400px]'>
							<Image
								src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070'
								alt='Nossa Missão'
								fill
								className='object-cover rounded-lg'
							/>
						</div>
						<div className='flex flex-col justify-center'>
							<h2 className='text-2xl sm:text-3xl font-bold mb-6'>
								Nossa Missão
							</h2>
							<p className='text-gray-600 dark:text-gray-300 mb-6'>
								Capacitar empresas através da tecnologia, fornecendo soluções
								inovadoras que impulsionam o crescimento e a eficiência
								operacional.
							</p>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<ValueCard
									icon={<Award className='h-6 w-6 text-green-600' />}
									title='Excelência'
									description='Comprometidos com a qualidade em tudo que fazemos'
								/>
								<ValueCard
									icon={<Users className='h-6 w-6 text-green-600' />}
									title='Colaboração'
									description='Trabalhamos juntos para alcançar resultados extraordinários'
								/>
								<ValueCard
									icon={<Target className='h-6 w-6 text-green-600' />}
									title='Inovação'
									description='Sempre buscando as melhores soluções tecnológicas'
								/>
								<ValueCard
									icon={<Heart className='h-6 w-6 text-green-600' />}
									title='Compromisso'
									description='Dedicados ao sucesso dos nossos clientes'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className='py-12 sm:py-16 bg-gray-50 dark:bg-gray-800'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl sm:text-3xl font-bold text-center mb-12'>
						Nossa Equipe
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						<TeamMember
							image='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974'
							name='João Silva'
							role='Engenheiro de Software'
							description='15+ anos de experiência em tecnologia'
						/>
						<TeamMember
							image='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976'
							name='Sara Johnson'
							role='Arquiteta de Software'
							description='Especialista em arquitetura de software'
						/>
						<TeamMember
							image='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974'
							name='Miguel Chen'
							role='Desenvolvedor Líder'
							description='10+ anos em desenvolvimento full-stack'
						/>
						<TeamMember
							image='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961'
							name='Emily Davis'
							role='Gerente de Produto'
							description='Especialista em UX/UI e gestão ágil'
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-12 sm:py-16 bg-green-600'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-2xl sm:text-3xl font-bold text-white mb-6'>
						Faça Parte da Nossa História
					</h2>
					<p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
						Junte-se a nós na missão de transformar o futuro digital das
						empresas.
					</p>
					<Button size='lg' variant='secondary'>
						Entre em Contato
					</Button>
				</div>
			</section>
		</main>
	);
}

function ValueCard({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className='p-4 rounded-lg border border-gray-200 dark:border-gray-700'>
			<div className='mb-2'>{icon}</div>
			<h3 className='font-semibold mb-1'>{title}</h3>
			<p className='text-sm text-gray-600 dark:text-gray-300'>{description}</p>
		</div>
	);
}

function TeamMember({
	image,
	name,
	role,
	description,
}: {
	image: string;
	name: string;
	role: string;
	description: string;
}) {
	return (
		<div className='text-center'>
			<div className='relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4'>
				<Image
					src={image}
					alt={name}
					fill
					className='object-cover rounded-full'
				/>
			</div>
			<h3 className='text-xl font-bold mb-1'>{name}</h3>
			<p className='text-green-600 dark:text-green-400 font-medium mb-2'>
				{role}
			</p>
			<p className='text-sm text-gray-600 dark:text-gray-300'>{description}</p>
		</div>
	);
}
