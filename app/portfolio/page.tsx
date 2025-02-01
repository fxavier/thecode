'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioPage() {
	return (
		<main className='pt-16 sm:pt-20'>
			{/* Hero Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
							Nosso Portfólio
						</h1>
						<p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8'>
							Conheça alguns dos projetos transformadores que realizamos para
							nossos clientes.
						</p>
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className='py-12 sm:py-16 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<ProjectCard
							image='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015'
							title='Transformação Digital Bancária'
							category='Setor Financeiro'
							description='Modernização completa do sistema bancário digital, resultando em 40% de aumento na eficiência operacional.'
						/>
						<ProjectCard
							image='https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2070'
							title='E-commerce Omnichannel'
							category='Varejo'
							description='Plataforma integrada de e-commerce que aumentou as vendas online em 150%.'
						/>
						<ProjectCard
							image='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070'
							title='Sistema de Gestão Hospitalar'
							category='Saúde'
							description='Software integrado para gestão hospitalar que reduziu o tempo de atendimento em 30%.'
						/>
						<ProjectCard
							image='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068'
							title='Plataforma Educacional'
							category='Educação'
							description='Sistema de ensino online que atende mais de 50.000 alunos simultaneamente.'
						/>
					</div>
				</div>
			</section>

			{/* Technologies Section */}
			<section className='py-12 sm:py-16 bg-gray-50 dark:bg-gray-800'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl sm:text-3xl font-bold text-center mb-12'>
						Tecnologias que Utilizamos
					</h2>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
						<TechBadge name='React' />
						<TechBadge name='Angular' />
						<TechBadge name='Node.js' />
						<TechBadge name='Python' />
						<TechBadge name='Java' />
						<TechBadge name='C#' />
						<TechBadge name='Flutter' />
						<TechBadge name='Spring Framework' />
						<TechBadge name='Quarkus' />
						<TechBadge name='AWS' />
						<TechBadge name='Docker' />
						<TechBadge name='Kubernetes' />
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-12 sm:py-16 bg-green-600'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-2xl sm:text-3xl font-bold text-white mb-6'>
						Vamos Criar Algo Incrível Juntos?
					</h2>
					<p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
						Conte-nos sobre seu projecto e descubra como podemos ajudar.
					</p>
					<Button size='lg' variant='secondary'>
						Iniciar Projecto
					</Button>
				</div>
			</section>
		</main>
	);
}

function ProjectCard({
	image,
	title,
	category,
	description,
}: {
	image: string;
	title: string;
	category: string;
	description: string;
}) {
	return (
		<div className='group relative overflow-hidden rounded-lg'>
			<div className='relative h-[300px] w-full'>
				<Image
					src={image}
					alt={title}
					fill
					className='object-cover transition-transform duration-300 group-hover:scale-110'
				/>
				<div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
					<div className='p-6 h-full flex flex-col justify-end'>
						<p className='text-green-400 font-medium mb-2'>{category}</p>
						<h3 className='text-white text-xl font-bold mb-2'>{title}</h3>
						<p className='text-white/90 text-sm mb-4'>{description}</p>
						<Button variant='secondary' size='sm' className='w-fit'>
							Ver Detalhes <ExternalLink className='ml-2 h-4 w-4' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function TechBadge({ name }: { name: string }) {
	return (
		<div className='flex items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-900 shadow-sm'>
			<span className='font-medium text-gray-900 dark:text-white'>{name}</span>
		</div>
	);
}
