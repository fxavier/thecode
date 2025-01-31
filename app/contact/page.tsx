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
							seu próximo projeto.
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
									content='+55 (11) 3456-7890'
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
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870299553!2d-46.6522977!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzknMDguMyJX!5e0!3m2!1spt-BR!2sbr!4v1635959745167!5m2!1spt-BR!2sbr'
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
