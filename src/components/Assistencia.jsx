
import {
  FaCarBattery,
  FaCarSide,
  FaCircleDot,
  FaGasPump,
  FaKey,
  FaScrewdriverWrench,
  FaTaxi,
  FaTruckFast
} from 'react-icons/fa6';

// Lista de dados estruturada: agora cada serviço tem seu próprio ícone e texto
const DADOS_ASSISTENCIA = [
  { titulo: 'Reboque', descricao: 'Guincho disponível 24h para levar seu veículo até a oficina ou sua casa.', Icone: FaTruckFast },
  { titulo: 'Chaveiro', descricao: 'Abertura do veículo ou confecção de chave reserva em emergências.', Icone: FaKey },
  { titulo: 'Pane Seca', descricao: 'Combustível emergencial para você conseguir chegar ao posto mais próximo.', Icone: FaGasPump },
  { titulo: 'Borracharia', descricao: 'Atendimento para troca de pneu furado ou reboque até o borracheiro.', Icone: FaCircleDot },
  { titulo: 'Socorro Mecânico', descricao: 'Reparo rápido no local para problemas mecânicos simples.', Icone: FaScrewdriverWrench },
  { titulo: 'Socorro Elétrico', descricao: 'Carga de bateria e pequenos reparos elétricos onde você estiver.', Icone: FaCarBattery },
  { titulo: 'Carro Amigo', descricao: 'Veículo substituto para você não ficar a pé enquanto o seu repara.', Icone: FaCarSide },
  { titulo: 'Táxi Emergencial', descricao: 'Transporte seguro para você e seus passageiros em caso de pane.', Icone: FaTaxi }
];

export default function Assistencia() {
  return (
    <section id="assistencia-24h" className="py-20 px-6 bg-slate-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Título da Seção */}
        <h2 className="text-4xl font-extrabold mb-12 text-[#002b5e]">
          Assistência <span className="text-[#f26522]">24 Horas</span>
        </h2>
        
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DADOS_ASSISTENCIA.map((servico, i) => {
            const Icone = servico.Icone;

            return (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#002b5e]/20 flex flex-col gap-4 transition-all duration-300 items-start text-left group"
              >
                {/* Ícone */}
                <div className="w-12 h-12 rounded-full bg-[#f26522]/10 text-[#f26522] flex items-center justify-center group-hover:bg-[#002b5e] group-hover:text-white transition-colors">
                  <Icone size={22} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                </div>

                {/* Textos */}
                <div>
                  <h3 className="text-lg font-bold text-[#002b5e] mb-1">
                    {servico.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {servico.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
