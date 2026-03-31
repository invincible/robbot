import React, { useEffect } from 'react';
import { 
  Bot, Moon, Hourglass, Filter, Star, Database
} from 'lucide-react';

export default function DepthAtmosphere() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div style={{
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      backgroundColor: '#0b1020',
      color: '#f3f7ff',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        .ambient-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1rem;
        }
        .surface-inset {
          box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset;
        }
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
        }
        .mock-tilt {
          transform: perspective(1200px) rotateY(-2deg) rotateX(1deg);
          box-shadow: 0 0 80px -24px rgba(94,234,212,0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mock-tilt:hover {
          transform: perspective(1200px) rotateY(0deg) rotateX(0deg);
          box-shadow: 0 0 100px -20px rgba(94,234,212,0.25);
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(94,234,212,0.4);
        }
      `}} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0b1020]/80 backdrop-blur-md">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-[1.0625rem] tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Bot size={18} />
            </div>
            Роб Бот
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#a6b3cc]">
            <a href="#how" className="hover:text-white transition-colors">Как работает</a>
            <a href="#compare" className="hover:text-white transition-colors">Сравнение</a>
            <a href="#pricing" className="hover:text-white transition-colors">Тарифы</a>
          </nav>
          <a href="#demo" className="hidden md:flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#5eead4] text-[#0b1020] font-semibold text-sm hover:bg-[#2dd4bf] transition-colors shadow-[0_0_24px_-8px_rgba(94,234,212,0.4)]">
            Запросить демо
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">
          {/* Layered radial gradients for depth */}
          <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[70%] rounded-full bg-[#5eead4] opacity-[0.06] blur-[120px] pointer-events-none" />
          
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <div className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#a6b3cc] mb-4">
                <span className="text-[#5eead4]">AI sales</span> · Отдел продаж 24/7
              </div>
              <h1 className="text-[clamp(2.375rem,5vw+1rem,4rem)] font-extrabold leading-[1.12] tracking-tight mb-6 text-white">
                Бот, который продаёт круглосуточно — <span className="text-[#5eead4]">пока команда отдыхает</span>
              </h1>
              <p className="text-[clamp(0.9375rem,0.5vw+0.875rem,1.0625rem)] text-[#a6b3cc] leading-[1.62] mb-10 max-w-[40ch]">
                Агент ловит лиды вне смены, ведёт диалог в тоне бренда и передаёт менеджеру контекст — с перехватом и правками в один клик.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                <a href="#demo" className="px-6 py-4 rounded-xl bg-[#5eead4] text-[#0b1020] font-bold text-[0.9375rem] hover:bg-[#2dd4bf] transition-colors shadow-[0_0_24px_-8px_rgba(94,234,212,0.4)]">
                  Запросить демо за 15 минут
                </a>
                <a href="#demo" className="px-6 py-4 rounded-xl border border-white/10 text-white font-semibold text-[0.9375rem] hover:bg-white/5 transition-colors">
                  Запросить гайд
                </a>
              </div>

              {/* Ambient Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="ambient-card p-5">
                  <div className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold tracking-tight mb-1 text-white">−70%</div>
                  <div className="text-[0.8125rem] text-[#a6b3cc] font-medium">Cost per lead</div>
                </div>
                <div className="ambient-card p-5">
                  <div className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold tracking-tight mb-1 text-white">24/7</div>
                  <div className="text-[0.8125rem] text-[#a6b3cc] font-medium">Без выходных</div>
                </div>
                <div className="ambient-card p-5">
                  <div className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold tracking-tight text-[#5eead4] mb-1 text-glow">2–3 дня</div>
                  <div className="text-[0.8125rem] text-[#a6b3cc] font-medium">До первого ROI</div>
                </div>
              </div>
            </div>

            <div className="relative justify-self-center lg:justify-self-end w-full max-w-[28rem]">
              {/* Point light behind mock */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#5eead4] opacity-[0.08] blur-[80px] pointer-events-none" />
              
              <div className="mock-tilt rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[#151f36] to-[#0b1020] overflow-hidden flex flex-col h-[30rem] relative">
                <div className="flex items-center justify-between p-4 bg-[#11182b]/80 backdrop-blur-md border-b border-white/5 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#151f36] border border-white/10 flex items-center justify-center text-white">
                      <Bot size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">Роб Бот</div>
                      <div className="text-[0.6875rem] text-[#5eead4] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4] animate-pulse shadow-[0_0_8px_rgba(94,234,212,0.8)]"></span> Анализирует лид
                      </div>
                    </div>
                  </div>
                  <button className="text-[0.6875rem] font-bold uppercase tracking-[0.06em] px-3 py-2 rounded-md border border-white/10 text-white hover:bg-white/5 transition-colors">
                    Перехватить
                  </button>
                </div>
                <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 relative z-10">
                  <div className="flex gap-3 max-w-[85%] self-end flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs shrink-0 text-white font-bold">К</div>
                    <div className="bg-[#151f36] border border-white/5 rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed shadow-lg">
                      Нужна система на 50+ человек. Условия и сроки внедрения?
                    </div>
                  </div>
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                      <Bot size={16} />
                    </div>
                    <div className="bg-[#11182b] border border-[#5eead4]/20 text-white rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed shadow-[0_4px_24px_-8px_rgba(94,234,212,0.1)]">
                      Для 50+ подойдёт Enterprise. Внедрение 2–3 дня. При оплате за год — скидка 20%. Забронировать звонок с техдиректором на завтра?
                    </div>
                  </div>
                  <div className="mt-auto self-center bg-[#0b1020]/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-xs text-[#a6b3cc] flex items-center gap-2">
                    <Database size={12} className="text-[#a6b3cc]" />
                    <span>CRM: бюджет зафиксирован, Lead Score 9/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pains Section (Surface, noise, inset) */}
        <section className="py-24 bg-[#11182b] surface-inset border-b border-white/5 relative noise-bg" id="pains">
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-12">
              <h2 className="text-[clamp(1.625rem,2.5vw+1rem,2.25rem)] font-bold tracking-tight mb-4 text-white">
                Когда менеджеры спят — деньги уходят конкурентам
              </h2>
              <p className="text-[#a6b3cc] max-w-[52ch]">
                Три узких места на этапе масштабирования B2B-продаж.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <article className="ambient-card p-8 relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <Moon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Лид пишет в 23:00 — и больше не ждёт</h3>
                <p className="text-sm text-[#a6b3cc] leading-relaxed mb-6">
                  Большая часть B2B-лидов ожидает ответа в первые минуты. Ночью ответ конкурента часто значит потерянную сделку.
                </p>
                <div className="text-xs font-semibold text-[#a6b3cc] bg-black/40 inline-flex px-3 py-1.5 rounded-md border border-white/5">
                  Потеря: $5–50K упущенного дохода
                </div>
              </article>
              <article className="ambient-card p-8 relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <Hourglass size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Время уходит на квалификацию</h3>
                <p className="text-sm text-[#a6b3cc] leading-relaxed mb-6">
                  SDR тратят часы на однотипные вопросы. Менеджерам нужно закрывать, а не читать скрипт.
                </p>
                <div className="text-xs font-semibold text-[#a6b3cc] bg-black/40 inline-flex px-3 py-1.5 rounded-md border border-white/5">
                  + $80–150K на расширение штата
                </div>
              </article>
              <article className="ambient-card p-8 relative overflow-hidden group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <Filter size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Бюджет на лиды без квалификации</h3>
                <p className="text-sm text-[#a6b3cc] leading-relaxed mb-6">
                  До 40% лидов отваливается на этапе квалификации — маркетинг работает вхолостую.
                </p>
                <div className="text-xs font-semibold text-[#a6b3cc] bg-black/40 inline-flex px-3 py-1.5 rounded-md border border-white/5">
                  ~40% маркетингового бюджета
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 border-b border-white/5 relative" id="how">
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16">
              <h2 className="text-[clamp(1.625rem,2.5vw+1rem,2.25rem)] font-bold tracking-tight mb-4 text-white">
                Три шага вместо долгих интеграций
              </h2>
              <p className="text-[#a6b3cc] max-w-[42ch]">
                От первого касания до готовой карточки в CRM — без лишней суеты.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
              
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#11182b] border border-white/10 flex items-center justify-center font-bold text-sm mb-6 relative z-10 text-white">
                  01
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Лид входит</h3>
                <p className="text-sm text-[#a6b3cc] leading-relaxed">
                  Форма, звонок или мессенджер — бот подхватывает за секунду и начинает диалог.
                </p>
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#11182b] border border-[#5eead4]/40 flex items-center justify-center font-bold text-[#5eead4] text-sm mb-6 relative z-10 shadow-[0_0_20px_-4px_rgba(94,234,212,0.3)]">
                  02
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Квалификация</h3>
                <p className="text-sm text-[#a6b3cc] leading-relaxed">
                  Бюджет, сроки, боль — в CRM в реальном времени. Перехват в один клик.
                </p>
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#11182b] border border-white/10 flex items-center justify-center font-bold text-sm mb-6 relative z-10 text-white">
                  03
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Готово к сделке</h3>
                <p className="text-sm text-[#a6b3cc] leading-relaxed">
                  Лид с полями и скором. При высоком score — слот в календаре автоматически.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Table */}
        <section className="py-24 bg-[#11182b] surface-inset noise-bg border-b border-white/5 relative" id="compare">
          <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-12">
              <h2 className="text-[clamp(1.625rem,2.5vw+1rem,2.25rem)] font-bold tracking-tight mb-4 text-white">
                Роб Бот и альтернативы
              </h2>
              <p className="text-[#a6b3cc] max-w-[52ch]">
                Не замена менеджеру — усиление: скорость, база знаний и перехват в один клик.
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-[1.5rem] border border-white/10 bg-[#0b1020]/60 backdrop-blur-md shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 text-sm">
                    <th className="p-6 font-medium text-[#a6b3cc] w-[25%]">Критерий</th>
                    <th className="p-6 font-medium text-white w-[25%]">Нанять менеджера</th>
                    <th className="p-6 font-medium text-white w-[25%]">Обычный чат-бот</th>
                    <th className="p-6 font-semibold w-[25%] relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5eead4]/[0.18] to-[#5eead4]/[0.06] pointer-events-none rounded-tr-[1.5rem]"></div>
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#5eead4]"></div>
                      <span className="relative z-10 text-[#5eead4]">Роб Бот</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="p-6 text-[#a6b3cc]">Стоимость / мес</td>
                    <td className="p-6 text-white">$2 500–3 500</td>
                    <td className="p-6 text-white">$300–800</td>
                    <td className="p-6 font-semibold bg-[#5eead4]/[0.03] text-white">$499</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-6 text-[#a6b3cc]">Квалификация</td>
                    <td className="p-6 text-white">≈ 90%</td>
                    <td className="p-6 text-white">≈ 70%, медленно</td>
                    <td className="p-6 font-semibold bg-[#5eead4]/[0.03] text-white">≈ 95%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-6 text-[#a6b3cc]">24/7</td>
                    <td className="p-6 text-[#a6b3cc]">Нет</td>
                    <td className="p-6 text-white">Да</td>
                    <td className="p-6 font-semibold bg-[#5eead4]/[0.03] text-white">Да</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-6 text-[#a6b3cc]">Ваша база (RAG)</td>
                    <td className="p-6 text-white">Со временем</td>
                    <td className="p-6 text-[#a6b3cc]">Очень ограничено</td>
                    <td className="p-6 font-semibold bg-[#5eead4]/[0.03] text-white">Сразу</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-6 text-[#a6b3cc]">Перехват диалога</td>
                    <td className="p-6 text-white">Да</td>
                    <td className="p-6 text-[#a6b3cc]">Нет</td>
                    <td className="p-6 font-semibold bg-[#5eead4]/[0.03] text-white">Один клик</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-[#a6b3cc]">Скорость ответа</td>
                    <td className="p-6 text-white">5–15 мин</td>
                    <td className="p-6 text-white">2–5 мин</td>
                    <td className="p-6 font-semibold bg-[#5eead4]/[0.03] text-white">&lt; 30 сек</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Focused CTA Section (The emotional peak) */}
        <section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-[#0b1020] z-0"></div>
          {/* Centered radial teal glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#5eead4] opacity-[0.06] blur-[150px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h2 className="text-[clamp(2.25rem,4vw+1rem,3.5rem)] font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
              Начните конвертировать ночные лиды
            </h2>
            <p className="text-[1.125rem] text-[#a6b3cc] mb-10 max-w-xl mx-auto leading-relaxed">
              Интеграция за 1 день. Первые результаты на 2-й день.
            </p>
            
            <a href="#demo" className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-[#5eead4] text-[#0b1020] font-bold text-lg hover:bg-[#2dd4bf] transition-transform hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(94,234,212,0.5)]">
              Запросить демо-доступ
            </a>
            
            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-[#a6b3cc] font-medium opacity-80">
              <span className="flex items-center gap-2"><Star size={16} className="text-[#5eead4] fill-[#5eead4] opacity-80" /> 4.9/5 на G2</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span>150+ внедрений</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span>Гарантия возврата</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 bg-[#0b1020] text-center text-sm text-[#a6b3cc] relative z-10">
        <div className="max-w-[80rem] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-white">
            <Bot size={16} className="text-white opacity-50" /> Роб Бот
          </div>
          <div>© {new Date().getFullYear()} Роб Бот. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}
