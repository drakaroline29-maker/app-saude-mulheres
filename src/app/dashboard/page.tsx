'use client'

import Navbar from '@/components/custom/navbar'
import { Heart, BookHeart, Baby, Sparkles, Activity, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Olá, bem-vinda de volta! 💕
          </h1>
          <p className="text-gray-600">Como você está se sentindo hoje?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <BookHeart className="w-6 h-6 text-pink-500" />
              </div>
              <span className="text-2xl font-bold text-gray-800">12</span>
            </div>
            <p className="text-sm text-gray-600">Registros este mês</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Baby className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-2xl font-bold text-gray-800">24</span>
            </div>
            <p className="text-sm text-gray-600">Semanas de gestação</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-pink-500" />
              </div>
              <span className="text-2xl font-bold text-gray-800">85%</span>
            </div>
            <p className="text-sm text-gray-600">Bem-estar geral</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-2xl font-bold text-gray-800">3</span>
            </div>
            <p className="text-sm text-gray-600">Posts na comunidade</p>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Diário de Sintomas */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-pink-300 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <BookHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Diário de Sintomas</h3>
              <p className="text-gray-600 mb-4">Registre como você está se sentindo e acompanhe padrões ao longo do tempo.</p>
              <div className="flex items-center text-pink-500 font-semibold">
                <span>Registrar agora</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Linha do Tempo Gestação */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-purple-300 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Gestação</h3>
              <p className="text-gray-600 mb-4">Acompanhe o desenvolvimento do seu bebê semana a semana com marcos importantes.</p>
              <div className="flex items-center text-purple-500 font-semibold">
                <span>Ver linha do tempo</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* IA para Dúvidas */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-pink-300 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Assistente IA</h3>
              <p className="text-gray-600 mb-4">Tire suas dúvidas sobre saúde feminina com nossa IA especializada.</p>
              <div className="flex items-center text-pink-500 font-semibold">
                <span>Conversar agora</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Pós-parto */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-purple-300 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pós-parto</h3>
              <p className="text-gray-600 mb-4">Suporte emocional e exercícios de reabilitação pélvica para sua recuperação.</p>
              <div className="flex items-center text-purple-500 font-semibold">
                <span>Acessar recursos</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* PCOS Tracking */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-pink-300 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Rastreamento PCOS</h3>
              <p className="text-gray-600 mb-4">Monitore sintomas, ciclos e padrões relacionados à síndrome dos ovários policísticos.</p>
              <div className="flex items-center text-pink-500 font-semibold">
                <span>Registrar dados</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>

          {/* Comunidade */}
          <div className="group cursor-pointer">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-purple-300 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comunidade</h3>
              <p className="text-gray-600 mb-4">Conecte-se com outras mulheres, compartilhe experiências e encontre apoio.</p>
              <div className="flex items-center text-purple-500 font-semibold">
                <span>Explorar posts</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Premium</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">Desbloqueie recursos exclusivos</h2>
              <p className="text-white/90 mb-6">
                Acesse análises avançadas, conteúdo exclusivo, suporte prioritário e muito mais.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span>Relatórios personalizados de saúde</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span>Consultas ilimitadas com IA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span>Acesso a grupos exclusivos</span>
                </li>
              </ul>
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                <span>Assinar agora</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full md:w-auto">
              <div className="w-48 h-48 bg-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
