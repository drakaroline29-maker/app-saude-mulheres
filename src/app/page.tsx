'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Heart, Baby, Activity, Users, Sparkles, ArrowRight, Check } from 'lucide-react'

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [userData, setUserData] = useState({
    isPregnant: false,
    hasPCOS: false,
    isPostpartum: false,
    interests: [] as string[],
  })

  const steps = [
    {
      title: 'Bem-vinda ao Saúde para Mulheres',
      subtitle: 'Seu espaço seguro para cuidar da sua saúde feminina',
      component: (
        <div className="space-y-6 text-center">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Cuidado completo para você</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Acompanhe sua gestação, gerencie sintomas, conecte-se com outras mulheres e tenha suporte de IA especializada.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto pt-6">
            <div className="p-4 bg-pink-50 rounded-2xl">
              <Baby className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Gestação</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-2xl">
              <Activity className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">PCOS</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-2xl">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Pós-parto</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-2xl">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Comunidade</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Personalize sua experiência',
      subtitle: 'Selecione o que se aplica a você',
      component: (
        <div className="space-y-6">
          <div className="space-y-4">
            <button
              onClick={() => setUserData({ ...userData, isPregnant: !userData.isPregnant })}
              className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                userData.isPregnant
                  ? 'border-pink-500 bg-pink-50 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-pink-300 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    userData.isPregnant ? 'bg-pink-500' : 'bg-gray-200'
                  }`}>
                    <Baby className={`w-6 h-6 ${userData.isPregnant ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Estou grávida</p>
                    <p className="text-sm text-gray-600">Acompanhe sua gestação semana a semana</p>
                  </div>
                </div>
                {userData.isPregnant && <Check className="w-6 h-6 text-pink-500" />}
              </div>
            </button>

            <button
              onClick={() => setUserData({ ...userData, hasPCOS: !userData.hasPCOS })}
              className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                userData.hasPCOS
                  ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    userData.hasPCOS ? 'bg-purple-500' : 'bg-gray-200'
                  }`}>
                    <Activity className={`w-6 h-6 ${userData.hasPCOS ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Tenho PCOS</p>
                    <p className="text-sm text-gray-600">Rastreie sintomas e ciclos hormonais</p>
                  </div>
                </div>
                {userData.hasPCOS && <Check className="w-6 h-6 text-purple-500" />}
              </div>
            </button>

            <button
              onClick={() => setUserData({ ...userData, isPostpartum: !userData.isPostpartum })}
              className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                userData.isPostpartum
                  ? 'border-pink-500 bg-pink-50 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-pink-300 hover:bg-pink-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    userData.isPostpartum ? 'bg-pink-500' : 'bg-gray-200'
                  }`}>
                    <Heart className={`w-6 h-6 ${userData.isPostpartum ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Estou no pós-parto</p>
                    <p className="text-sm text-gray-600">Suporte emocional e reabilitação pélvica</p>
                  </div>
                </div>
                {userData.isPostpartum && <Check className="w-6 h-6 text-pink-500" />}
              </div>
            </button>
          </div>
        </div>
      ),
    },
    {
      title: 'Tudo pronto!',
      subtitle: 'Comece sua jornada de autocuidado',
      component: (
        <div className="space-y-6 text-center">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
            <Check className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Você está pronta!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Seu perfil foi configurado. Explore todas as funcionalidades e comece a cuidar da sua saúde hoje mesmo.
            </p>
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl space-y-3">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <p className="text-sm text-gray-700">Diário inteligente de sintomas</p>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <p className="text-sm text-gray-700">IA para responder suas dúvidas</p>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <p className="text-sm text-gray-700">Comunidade de apoio</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      router.push('/dashboard')
    }
  }

  const handleSkip = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Passo {step + 1} de {steps.length}</span>
            <button onClick={handleSkip} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Pular
            </button>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{steps[step].title}</h1>
            <p className="text-gray-600">{steps[step].subtitle}</p>
          </div>

          <div className="py-6">{steps[step].component}</div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Voltar
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>{step === steps.length - 1 ? 'Começar' : 'Continuar'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
