import { useState } from 'react';
import Coberturas from './components/Coberturas';
import Assistencia from './components/Assistencia';
import { FaPhone, FaMapPin, FaEnvelope, FaInstagram, FaCar, FaMotorcycle, FaTruck, FaVanShuttle } from 'react-icons/fa6';

// Listas de dados estruturadas para facilitar futuras atualizações
const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Coberturas', href: '#coberturas' },
  { label: 'Assistência 24h', href: '#assistencia-24h' }
];
const WHATSAPP_LINK = 'https://wa.me/5521983462049?text=Ol%C3%A1%2C%20Consultor%2021GO%20Anselmo.%20Quero%20fazer%20uma%20simula%C3%A7%C3%A3o.';
const INSTAGRAM_LINK = 'https://www.instagram.com/21goprotecao.anselmo?utm_source=qr&igsh=ZWRyOGl2bHY1eXB2';
const EMAIL_LINK = 'mailto:21goprotecao.anselmo@gmail.com';
const VEICULOS_ICONS = {
  'Carros': FaCar,
  'Motos': FaMotorcycle,
  'Utilitários': FaTruck,
  'Frotas': FaVanShuttle
};
const VEICULOS = ['Carros', 'Motos', 'Utilitários', 'Frotas'];

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    tipoVeiculo: 'carro',
    placaVeiculo: '',
    AnoVeiculo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da cotação enviados:', formData);
    alert(`Obrigado, ${formData.nome}! Em breve entraremos em contato.`);
  };

  // Configuração dos campos para renderização dinâmica
  const formInputs = [
    { name: 'nome', label: 'Nome Completo', type: 'text', placeholder: 'Ex: Anselmo Silva', required: true },
    { name: 'whatsapp', label: 'WhatsApp / Telefone', type: 'tel', placeholder: '(00) 00000-0000', required: true },
    { name: 'email', label: 'E-mail', type: 'email', placeholder: 'exemplo@email.com', required: true },
    { name: 'placaVeiculo', label: 'Placa do Veículo', type: 'text', placeholder: 'Digite a placa...', required: false },
    { name: 'AnoVeiculo', label: 'Ano do Veículo', type: 'text', placeholder: 'Digite o ano...', required: false }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-[#002b5e] font-['Inter'] selection:bg-[#f26522] selection:text-white flex flex-col scroll-smooth">
      
      {/* HEADER / NAVBAR */}
      <header className="bg-[#002b5e] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold tracking-tight">21<span className="text-[#f26522]">GO</span></span>
            <span className="hidden sm:block text-[10px] font-medium border-l border-white/20 pl-2 ml-2 text-blue-200 uppercase tracking-widest leading-tight">
              Proteção<br/>Veicular
            </span>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:text-[#f26522] transition-colors">{link.label}</a>
            ))}
          </nav>

          <a href="#simulacao" className="hidden md:block bg-[#f26522] hover:bg-[#d9531e] text-white px-6 py-2.5 rounded-full font-bold shadow-md transition-all">
            Faça sua Simulação
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="bg-[#002b5e] py-24 px-6 relative overflow-hidden flex flex-col items-center text-center text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f26522] rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-200 text-xs font-bold tracking-wider mb-6 border border-white/20">
            21GO PROTEÇÃO VEICULAR
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Proteção Veicular <br />
            <span className="text-[#f26522]">Completa</span> para Quem <br /> Não Pode Parar
          </h1>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">Mais segurança, economia e tranquilidade para você e seu veículo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#simulacao" className="bg-[#f26522] hover:bg-[#d9531e] px-8 py-4 rounded-xl font-bold shadow-xl transition-all">Fazer Simulação Agora</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-transparent border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              <FaPhone size={18} /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* COBERTURAS */}
      <Coberturas />

      {/* ASSISTÊNCIA 24 HORAS */}
      <Assistencia />

      {/* TIPOS DE VEÍCULO */}
      <section id="assistência 24h" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h4 className="text-[#f26522] text-sm font-bold uppercase mb-2">Para Todo Tipo de Veículo</h4>
          <h2 className="text-4xl font-extrabold mb-12">Proteção para <span className="text-[#f26522]">Todos</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VEICULOS.map((veiculo, i) => {
              const IconComponent = VEICULOS_ICONS[veiculo];
              return (
                <div key={i} className="bg-slate-50 border border-gray-200 p-6 rounded-2xl shadow-sm hover:border-[#f26522] transition-all">
                  <div className="text-4xl mb-2 text-[#f26522]">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="font-bold text-lg">{veiculo}</h3>
                  <p className="text-xs text-gray-500 mt-1">Planos sob medida com ampla cobertura.</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE SIMULAÇÃO */}
      <section id="simulacao" className="py-20 px-6 bg-[#002b5e] text-white relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Solicite uma <span className="text-[#f26522]">Simulação Grátis</span></h2>
            <p className="text-blue-100 mt-3">Preencha os campos abaixo e receba uma simulação personalizada em poucos minutos.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-white text-[#002b5e] p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {formInputs.map((input) => (
                <div key={input.name} className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#002b5e]/80">{input.label}</label>
                  <input 
                    type={input.type} 
                    name={input.name}
                    required={input.required}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                    placeholder={input.placeholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#f26522] bg-slate-50 text-sm transition-colors"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#002b5e]/80">Tipo do Veículo</label>
                <select 
                  name="tipoVeiculo"
                  value={formData.tipoVeiculo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#f26522] bg-slate-50 text-sm transition-colors"
                >
                  <option value="carro">Carro</option>
                  <option value="moto">Moto</option>
                  <option value="utilitario">Utilitário / Comercial</option>
                  <option value="frota">Frota Corporativa</option>
                  <option value="Caminhão/Microonibus">Caminhão / Micro-ônibus</option>
                </select>
              </div>

            </div>
            
            <button type="submit" className="w-full bg-[#f26522] hover:bg-[#d9531e] text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 mt-2">
              Enviar Simulação
            </button>
          </form>
        </div>
      </section>

      {/* CONTATO / RODAPÉ INTEGRADO */}
      <footer className="bg-[#002b5e] w-full px-6 py-10 md:px-12 md:py-16 font-sans">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-8">
          
          {/* INFORMAÇÕES PRINCIPAIS */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
              Anselmo Silva
            </h3>
            <p className="font-bold text-[#f26522] uppercase tracking-wider text-sm md:text-base">
              Consultor especializado em proteção patrimonial veicular – 21GO
            </p>
            <p className="mt-2 text-gray-300 leading-relaxed max-w-md text-sm md:text-base">
              Proteção patrimonial em todo o Brasil, com foco em segurança, economia e atendimento personalizado.
            </p>
            
            <div className="mt-5 flex flex-col gap-3 text-gray-300 text-sm md:text-base">
              <p className="flex items-center gap-3">
                <FaMapPin className="text-[#f26522] text-lg" />
                <span>Rio de Janeiro – RJ | Atendimento nacional</span>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#f26522] text-lg" />
                <a 
                  href={EMAIL_LINK}
                  className="hover:text-[#f26522] transition-colors duration-300"
                >
                  21goprotecao.anselmo@gmail.com
                </a>
              </p>
            </div>
            
            <div className="flex gap-4 mt-6 font-medium text-sm md:text-base">
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-[#f26522] hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>
            </div>
          </div>

          {/* INFORMAÇÕES LEGAIS */}
          <div className="flex flex-col justify-end text-left md:text-right border-t border-[#f26522]/30 md:border-none pt-6 md:pt-0">
            <div className="text-gray-400 text-xs md:text-sm flex flex-col gap-2">
              <p className="font-semibold text-gray-300">
                Razão social: 21GO – Associação de Proteção Patrimonial Mutualista
              </p>
              <p>
                &copy; {new Date().getFullYear()} 21GO Proteção Veicular. Todos os direitos reservados.
              </p>
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}
