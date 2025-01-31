'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
	return (
		<main className='pt-16 sm:pt-20'>
			{/* Hero Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
							Blog e Insights
						</h1>
						<p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8'>
							Acompanhe as últimas tendências em tecnologia e transformação
							digital.
						</p>
					</div>
				</div>
			</section>

			{/* Featured Post */}
			<section className='py-12 sm:py-16 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
						<div className='relative h-[300px] sm:h-[400px]'>
							<Image
								src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072'
								alt='Post em Destaque'
								fill
								className='object-cover rounded-lg'
							/>
						</div>
						<div>
							<span className='text-green-600 dark:text-green-400 font-medium'>
								Em Destaque
							</span>
							<h2 className='text-2xl sm:text-3xl font-bold mt-2 mb-4'>
								O Futuro da Inteligência Artificial nas Empresas
							</h2>
							<p className='text-gray-600 dark:text-gray-300 mb-4'>
								Descubra como a IA está revolucionando os processos empresariais
								e como sua empresa pode se beneficiar dessa tecnologia.
							</p>
							<div className='flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6'>
								<span className='flex items-center'>
									<Calendar className='h-4 w-4 mr-1' /> 15 Mar 2024
								</span>
								<span className='flex items-center'>
									<Clock className='h-4 w-4 mr-1' /> 5 min de leitura
								</span>
							</div>
							<Button>
								Ler Mais <ChevronRight className='ml-2 h-4 w-4' />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Recent Posts Grid */}
			<section className='py-12 sm:py-16 bg-gray-50 dark:bg-gray-800'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl sm:text-3xl font-bold mb-8'>
						Posts Recentes
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<BlogCard
							image='https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070'
							title='Tendências em Desenvolvimento Web para 2024'
							excerpt='As principais tecnologias e práticas que estão moldando o desenvolvimento web moderno.'
							date='12 Mar 2024'
							readTime='4 min'
						/>
						<BlogCard
							image='https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070'
							title='Segurança Cibernética: Protegendo seu Negócio'
							excerpt='Guia completo sobre como proteger sua empresa contra ameaças digitais.'
							date='10 Mar 2024'
							readTime='6 min'
						/>
						<BlogCard
							image='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015'
							title='Cloud Computing: Guia para Iniciantes'
							excerpt='Entenda os fundamentos da computação em nuvem e seus benefícios.'
							date='8 Mar 2024'
							readTime='5 min'
						/>
					</div>
				</div>
			</section>

			{/* Categories Section */}
			<section className='py-12 sm:py-16 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl sm:text-3xl font-bold mb-8'>Categorias</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						<CategoryCard name='Desenvolvimento' count={12} />
						<CategoryCard name='Cloud Computing' count={8} />
						<CategoryCard name='Segurança' count={6} />
						<CategoryCard name='IA & Machine Learning' count={9} />
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className='py-12 sm:py-16 bg-green-600'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-2xl sm:text-3xl font-bold text-white mb-6'>
						Inscreva-se em Nossa Newsletter
					</h2>
					<p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
						Receba as últimas novidades sobre tecnologia e transformação
						digital.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'>
						<input
							type='email'
							placeholder='Seu e-mail'
							className='px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 w-full'
						/>
						<Button variant='secondary' className='whitespace-nowrap'>
							Inscrever-se
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}

function BlogCard({
	image,
	title,
	excerpt,
	date,
	readTime,
}: {
	image: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
}) {
	return (
		<div className='bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
			<div className='relative h-48'>
				<Image src={image} alt={title} fill className='object-cover' />
			</div>
			<div className='p-6'>
				<h3 className='text-xl font-bold mb-2'>{title}</h3>
				<p className='text-gray-600 dark:text-gray-300 mb-4'>{excerpt}</p>
				<div className='flex items-center justify-between text-sm text-gray-500 dark:text-gray-400'>
					<span className='flex items-center'>
						<Calendar className='h-4 w-4 mr-1' /> {date}
					</span>
					<span className='flex items-center'>
						<Clock className='h-4 w-4 mr-1' /> {readTime}
					</span>
				</div>
			</div>
		</div>
	);
}

function CategoryCard({ name, count }: { name: string; count: number }) {
	return (
		<div className='bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer'>
			<h3 className='font-bold mb-2'>{name}</h3>
			<p className='text-gray-600 dark:text-gray-400'>{count} posts</p>
		</div>
	);
}
