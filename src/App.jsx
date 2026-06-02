import { useState } from 'react';
import 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-[#002b5e] font-['Inter'] selection:bg-[#f26522] selection:text-white flex flex-col">
      
      {/* HEADER / NAVBAR */}
      <header className="bg-[#002b5e] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-3xl font-extrabold tracking-tight">
                21<span className="text-[#f26522]">GO</span>
              </span>
              <span className="hidden sm:block text-[10px] font-medium border-l border-white/20 pl-2 ml-2 text-blue-200 uppercase tracking-widest leading-tight">
                Proteção<br/>Veicular
              </span>
            </div>

            {/* Links de Navegação */}
            <nav className="hidden lg:flex space-x-8 items-center">
              <a href="#" className="text-sm font-medium hover:text-[#f26522] transition-colors">Início</a>
              <a href="#" className="text-sm font-medium hover:text-[#f26522] transition-colors">Benefícios</a>
              <a href="#" className="text-sm font-medium hover:text-[#f26522] transition-colors">Coberturas</a>
              <a href="#" className="text-sm font-medium hover:text-[#f26522] transition-colors">Assistência 24h</a>
              <a href="#" className="text-sm font-medium hover:text-[#f26522] transition-colors">Cotação</a>
            </nav>

            {/* Botão CTA Desktop */}
            <div className="hidden md:flex">
              <button className="bg-[#f26522] hover:bg-[#d9531e] text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300">
                Faça sua Cotação
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#002b5e] py-24 px-6 relative overflow-hidden flex flex-col items-center text-center text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f26522] rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-200 text-xs font-bold tracking-wider mb-6 border border-white/20">
            21GO PROTEÇÃO VEICULAR
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Proteção Veicular <br />
            <span className="text-[#f26522]">Completa</span> para Quem <br />
            Não Pode Parar
          </h1>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Mais segurança, economia e tranquilidade para você e seu veículo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#f26522] hover:bg-[#d9531e] px-8 py-4 rounded-xl font-bold shadow-xl transition-all">
              Fazer Cotação Agora
            </button>
            <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.582 1.894.882 3.145.882 3.182 0 5.767-2.587 5.767-5.766 0-3.18-2.585-5.766-5.767-5.766..."></path></svg>
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* COBERTURAS (Proteção que Vai Além) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#f26522] text-sm font-bold tracking-widest uppercase mb-2">Coberturas</h4>
            <h2 className="text-4xl font-extrabold text-[#002b5e]">Proteção que Vai <span className="text-[#f26522]">Além</span></h2>
            <p className="text-gray-600 mt-4 text-lg">Conheça todas as coberturas incluídas no plano de proteção veicular 21GO.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Roubo', 'Furto', 'Colisão', 'Incêndio', 'Fenômenos da Natureza', 'Danos a Terceiros', 'Rastreamento Veicular', 'Assistência 24h'].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#f26522]/30 p-6 rounded-2xl transition-all group">
                <div className="w-12 h-12 bg-[#002b5e]/5 text-[#002b5e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f26522] group-hover:text-white transition-colors">
                  <div className="w-6 h-6 border-2 border-current rounded-md"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#002b5e]">{item}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cobertura completa e garantida para a sua tranquilidade.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSISTÊNCIA 24 HORAS */}
      <section className="py-20 px-6 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-[#002b5e]">Assistência <span className="text-[#f26522]">24 Horas</span></h2>
            <p className="text-gray-600 text-lg">Precisou, ligou. Estamos disponíveis a qualquer hora, em qualquer lugar do Brasil.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Reboque', 'Chaveiro', 'Pane Seca', 'Borracharia', 'Socorro Mecânico', 'Socorro Elétrico', 'Carro Amigo', 'Táxi Emergencial'].map((servico, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3 hover:-translate-y-1 transition-transform">
                <div className="text-[#f26522]">
                  <div className="w-10 h-10 rounded-full bg-[#f26522]/10 flex items-center justify-center text-sm font-bold">A</div>
                </div>
                <h3 className="text-lg font-bold text-[#002b5e]">{servico}</h3>
                <p className="text-sm text-gray-500">Atendimento rápido e especializado para qualquer emergência.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPOS DE VEÍCULO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#f26522] text-sm font-bold tracking-widest uppercase mb-2">Para Todo Tipo de Veículo</h4>
            <h2 className="text-4xl font-extrabold text-[#002b5e]">Proteção para <span className="text-[#f26522]">Todos</span></h2>
            <p className="text-gray-600 mt-4 text-lg">Não importa qual veículo você tenha, a 21GO protege.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Carros', 'Motos', 'Táxis', 'Motoristas de Aplicativo', 'Utilitários', 'Veículos de Trabalho'].map((tipo, i) => (
              <div key={i} className="relative h-64 rounded-2xl overflow-hidden group border border-gray-200 shadow-md">
                {/* Degradê Escuro para dar leitura ao texto, mesmo no tema claro */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b5e] via-[#002b5e]/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div> 
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full text-white">
                  <h3 className="text-2xl font-bold mb-1">{tipo}</h3>
                  <p className="text-blue-100 text-sm mb-4">Proteção sob medida para você.</p>
                  <button className="bg-[#f26522] hover:bg-[#d9531e] text-white text-xs font-bold py-2 px-5 rounded-full transition-colors">
                    Cotar Agora →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUBE DE BENEFÍCIOS */}
      <section className="py-20 px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-[#f26522] text-sm font-bold tracking-widest uppercase mb-2">Clube de Benefícios</h4>
          <h2 className="text-4xl font-extrabold mb-12 text-[#002b5e]">Vantagens <span className="text-[#f26522]">Premium</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {['Descontos em Parceiros', 'Rastreamento', 'Benefícios Exclusivos', 'Atendimento Especializado', 'Programas de Fidelidade'].map((beneficio, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#002b5e]/5 text-[#f26522] rounded-2xl flex items-center justify-center mb-4">
                  ★
                </div>
                <h3 className="font-bold mb-2 leading-tight text-[#002b5e]">{beneficio}</h3>
                <p className="text-xs text-gray-500">Vantagens pensadas exclusivamente para você.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEU CONSULTOR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-xl">
          <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border-4 border-slate-50 shadow-lg">
            {/* Foto do Anselmo */}
            <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">Foto Anselmo</div>
          </div>
          <div>
            <h4 className="text-[#f26522] text-sm font-bold tracking-widest uppercase mb-2">Seu Consultor</h4>
            <h2 className="text-4xl font-extrabold mb-4 text-[#002b5e]">Anselmo Silva</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Consultor especializado em proteção veicular 21GO, atendendo clientes em todo o Brasil com foco em segurança, economia e atendimento personalizado.
            </p>
            <div className="flex flex-col gap-3 mb-8 text-sm text-[#002b5e] font-medium">
              <span className="flex items-center gap-2">
                <span className="text-[#f26522]">✉</span> 21goprotecao.anselmo@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#f26522]">📍</span> Rio de Janeiro e todo o Brasil
              </span>
            </div>
            <button className="bg-[#002b5e] hover:bg-[#001f44] text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all">
              Falar com Anselmo
            </button>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE COTAÇÃO */}
      <section className="py-20 px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#002b5e] mb-2">Faça sua Cotação</h2>
            <p className="text-gray-600">Preencha os dados abaixo e receba sua simulação em minutos.</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Nome Completo *</label>
              <input type="text" placeholder="Seu nome completo" className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Telefone / WhatsApp *</label>
              <input type="text" placeholder="(21) 99999-9999" className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Cidade</label>
              <input type="text" placeholder="Sua cidade" className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Estado</label>
              <select className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all appearance-none">
                <option>Selecione</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Modelo do Veículo *</label>
              <input type="text" placeholder="Ex: Honda Civic 2022" className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Ano</label>
              <input type="text" placeholder="2024" className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Placa</label>
              <input type="text" placeholder="ABC-1D23" className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Câmbio</label>
              <select className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all appearance-none">
                <option>Selecione</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#002b5e]">Número de Portas</label>
              <select className="w-full bg-slate-50 border border-gray-300 rounded-xl px-4 py-3 text-[#002b5e] focus:outline-none focus:ring-2 focus:ring-[#f26522]/50 focus:border-[#f26522] transition-all appearance-none">
                <option>Selecione</option>
              </select>
            </div>
            
            <div className="col-span-1 md:col-span-2 mt-6">
              <button type="submit" className="w-full bg-[#f26522] hover:bg-[#d9531e] text-white font-bold py-4 rounded-xl shadow-lg transition-all text-lg">
                Receber Simulação
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}

export default App;