"use client";

import { Button } from "@/components/ui/button";
import { Code2, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Code2 className="h-24 w-24 text-green-600 animate-pulse" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              404
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Página Não Encontrada
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Ops! Parece que você encontrou um bug no sistema.
          A página que você está procurando não existe ou foi movida.
        </p>

        {/* Helpful Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Voltar ao Início
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <Search className="mr-2 h-5 w-5" />
              Precisa de Ajuda?
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p className="mb-2">Você também pode tentar:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/services" 
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Nossos Serviços
            </Link>
            <Link 
              href="/portfolio" 
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Portfólio
            </Link>
            <Link 
              href="/blog" 
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Sobre Nós
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}