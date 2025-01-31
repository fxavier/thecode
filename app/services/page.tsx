'use client';

import { Button } from '@/components/ui/button';
import {
	Code2,
	Laptop,
	Cloud,
	LineChart,
	Shield,
	Users,
	Rocket,
	Smartphone,
} from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
	return (
		<main className='pt-16 sm:pt-20'>
			{/* Hero Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
							Nossos Serviços
						</h1>
						<p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8'>
							Oferecemos uma gama completa de serviços de tecnologia para
							impulsionar seu negócio para o futuro digital.
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className='py-12 sm:py-16 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<ServiceCard
							icon={<Code2 className='h-8 w-8 text-green-600' />}
							title='Desenvolvimento Web'
							description='Criamos aplicações web modernas e responsivas usando as mais recentes tecnologias.'
						/>
						<ServiceCard
							icon={<Smartphone className='h-8 w-8 text-green-600' />}
							title='Desenvolvimento Mobile'
							description='Apps nativos e híbridos para iOS e Android que encantam seus usuários.'
						/>
						<ServiceCard
							icon={<Cloud className='h-8 w-8 text-green-600' />}
							title='Cloud Computing'
							description='Soluções em nuvem escaláveis e seguras para seu negócio.'
						/>
						<ServiceCard
							icon={<LineChart className='h-8 w-8 text-green-600' />}
							title='Análise de Dados'
							description='Transforme dados em insights acionáveis para seu negócio.'
						/>
						<ServiceCard
							icon={<Shield className='h-8 w-8 text-green-600' />}
							title='Segurança Digital'
							description='Proteja seus ativos digitais com nossas soluções de segurança.'
						/>
						<ServiceCard
							icon={<Users className='h-8 w-8 text-green-600' />}
							title='Consultoria em TI'
							description='Orientação estratégica para sua jornada de transformação digital.'
						/>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className='py-12 sm:py-16 bg-gray-50 dark:bg-gray-800'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl sm:text-3xl font-bold text-center mb-12'>
						Nosso Processo
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<ProcessStep
							number='01'
							title='Descoberta'
							description='Entendemos suas necessidades e objetivos de negócio'
						/>
						<ProcessStep
							number='02'
							title='Planejamento'
							description='Desenvolvemos uma estratégia personalizada'
						/>
						<ProcessStep
							number='03'
							title='Execução'
							description='Implementamos as soluções com agilidade'
						/>
						<ProcessStep
							number='04'
							title='Evolução'
							description='Monitoramos e otimizamos continuamente'
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-12 sm:py-16 bg-green-600'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-2xl sm:text-3xl font-bold text-white mb-6'>
						Pronto para Começar?
					</h2>
					<p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
						Entre em contacto para discutir como podemos ajudar sua empresa.
					</p>
					<Button size='lg' variant='secondary'>
						Solicitar Orçamento
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
		<div className='p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow'>
			<div className='mb-4'>{icon}</div>
			<h3 className='text-xl font-bold mb-2'>{title}</h3>
			<p className='text-gray-600 dark:text-gray-300'>{description}</p>
		</div>
	);
}

function ProcessStep({
	number,
	title,
	description,
}: {
	number: string;
	title: string;
	description: string;
}) {
	return (
		<div className='text-center'>
			<div className='w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>
				{number}
			</div>
			<h3 className='text-xl font-bold mb-2'>{title}</h3>
			<p className='text-gray-600 dark:text-gray-300'>{description}</p>
		</div>
	);
}
