
import { FaShieldHalved, FaCar, FaFire, FaCloudRain, FaHandshake, FaMapLocationDot } from 'react-icons/fa6';

// A lista de dados vem para cá, pois só este componente precisa dela
const DADOS_COBERTURAS = [
  { titulo: 'Roubo e Furto', descricao: 'Indenização de até 100% da tabela FIPE para garantir seu patrimônio.', icone: FaShieldHalved },
  { titulo: 'Colisão', descricao: 'Cobertura completa para reparos em caso de acidentes e colisões.', icone: FaCar },
  { titulo: 'Incêndio', descricao: 'Proteção financeira contra danos causados por incêndios acidentais.', icone: FaFire },
  { titulo: 'Fenômenos da Natureza', descricao: 'Garantia contra enchentes, chuva de granizo e queda de árvores.', icone: FaCloudRain },
  { titulo: 'Danos a Terceiros', descricao: 'Cobertura de prejuízos materiais e corporais a outras pessoas.', icone: FaHandshake },
  { titulo: 'Rastreamento Veicular', descricao: 'Monitoramento 24 horas em tempo real para maior segurança.', icone: FaMapLocationDot }
];

export default function Coberturas() {
  return (
    <section id="coberturas" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-[#f26522] text-sm font-bold tracking-widest uppercase mb-2">Coberturas</h4>
        <h2 className="text-4xl font-extrabold mb-12 text-[#002b5e]">Proteção que Vai <span className="text-[#f26522]">Além</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DADOS_COBERTURAS.map((item, i) => {
            const IconComponent = item.icone;
            return (
            <div key={i} className="border border-gray-100 bg-white shadow-sm hover:shadow-xl p-8 rounded-2xl transition-all duration-300 group text-left hover:-translate-y-1">
              <div className="w-14 h-14 bg-slate-50 text-2xl rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#f26522] group-hover:scale-110 transition-all duration-300 shadow-sm border border-gray-100 group-hover:border-[#f26522] text-[#002b5e] group-hover:text-white">
                <IconComponent size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#002b5e] group-hover:text-[#f26522] transition-colors">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.descricao}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
