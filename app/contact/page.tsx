'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
	return (
		<main className='pt-16 sm:pt-20'>
			{/* Hero Section */}
			<section className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
							Entre em Contacto
						</h1>
						<p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8'>
							Estamos aqui para ajudar. Entre em contato conosco para discutir
							seu próximo projecto.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className='py-12 sm:py-16 bg-white dark:bg-gray-900'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						{/* Contact Information */}
						<div>
							<h2 className='text-2xl sm:text-3xl font-bold mb-6'>
								Informações de Contacto
							</h2>
							<div className='space-y-6'>
								<ContactInfo
									icon={<Mail className='h-6 w-6 text-green-600' />}
									title='Email'
									content='contato@thecodeei.com'
								/>
								<ContactInfo
									icon={<Phone className='h-6 w-6 text-green-600' />}
									title='Telefone'
									content='+258 84 333 3333'
								/>
								<ContactInfo
									icon={<MapPin className='h-6 w-6 text-green-600' />}
									title='Endereço'
									content='Rua da Tecnologia, 123, São Paulo, SP'
								/>
								<ContactInfo
									icon={<Clock className='h-6 w-6 text-green-600' />}
									title='Horário de Funcionamento'
									content='Segunda a Sexta: 9h às 18h'
								/>
							</div>

							{/* <boltAction type="file" filePath="app/contact/page.tsx">              {/* Map */}
							<div className='mt-8'>
								<iframe
									src='https://www.google.com/maps/place/Maputo/@-25.8962586,32.6106835,12z/data=!3m1!4b1!4m6!3m5!1s0x1ee69723b666da55:0x42497f579a6bb442!8m2!3d-25.969248!4d32.5731746!16zL20vMGZxYnk?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D'
									width='100%'
									height='300'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									className='rounded-lg'
								></iframe>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<h2 className='text-2xl sm:text-3xl font-bold mb-6'>
								Envie uma Mensagem
							</h2>
							<form className='space-y-6'>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium mb-2'
										>
											Nome
										</label>
										<Input
											id='name'
											placeholder='Seu nome'
											className='w-full'
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium mb-2'
										>
											Email
										</label>
										<Input
											id='email'
											type='email'
											placeholder='seu@email.com'
											className='w-full'
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor='subject'
										className='block text-sm font-medium mb-2'
									>
										Assunto
									</label>
									<Input
										id='subject'
										placeholder='Assunto da mensagem'
										className='w-full'
									/>
								</div>
								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium mb-2'
									>
										Mensagem
									</label>
									<Textarea
										id='message'
										placeholder='Sua mensagem'
										className='w-full min-h-[150px]'
									/>
								</div>
								<Button className='w-full sm:w-auto'>Enviar Mensagem</Button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-12 sm:py-16 bg-gray-50 dark:bg-gray-800'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl sm:text-3xl font-bold text-center mb-12'>
						Perguntas Frequentes
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
						<FAQItem
							question='Quanto tempo leva para desenvolver um projeto?'
							answer='O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Após nossa análise inicial, forneceremos uma estimativa detalhada.'
						/>
						<FAQItem
							question='Vocês oferecem suporte após o lançamento?'
							answer='Sim, oferecemos diferentes planos de suporte e manutenção para garantir que seu projeto continue funcionando perfeitamente.'
						/>
						<FAQItem
							question='Como funciona o processo de desenvolvimento?'
							answer='Trabalhamos de forma ágil, com sprints semanais e reuniões regulares para manter você atualizado sobre o progresso do projeto.'
						/>
						<FAQItem
							question='Quais tecnologias vocês utilizam?'
							answer='Utilizamos as tecnologias mais modernas e adequadas para cada projeto, incluindo React, Node.js, Python, e várias soluções cloud.'
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

function ContactInfo({
	icon,
	title,
	content,
}: {
	icon: React.ReactNode;
	title: string;
	content: string;
}) {
	return (
		<div className='flex items-start space-x-4'>
			<div className='p-2 bg-green-50 dark:bg-green-900/20 rounded-lg'>
				{icon}
			</div>
			<div>
				<h3 className='font-medium mb-1'>{title}</h3>
				<p className='text-gray-600 dark:text-gray-300'>{content}</p>
			</div>
		</div>
	);
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
	return (
		<div className='bg-white dark:bg-gray-900 p-6 rounded-lg'>
			<h3 className='font-bold mb-2'>{question}</h3>
			<p className='text-gray-600 dark:text-gray-300'>{answer}</p>
		</div>
	);
}
