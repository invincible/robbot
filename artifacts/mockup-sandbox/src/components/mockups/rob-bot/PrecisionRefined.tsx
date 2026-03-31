import React, { useEffect, useRef, useState } from 'react';
import { 
  Bot, Menu, Moon, Hourglass, Filter, Star, TrendingUp, Target, 
  Hand, Edit, ClipboardCheck, User, ArrowDown, Database, List, Check, DollarSign 
} from 'lucide-react';

export default function PrecisionRefined() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const wrap = spotRef.current;
    if (!wrap || window.matchMedia('(max-width: 1023px)').matches) return;

    const setSpot = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = ((e.clientX - r.left) / Math.max(r.width, 1)) * 100;
      const y = ((e.clientY - r.top) / Math.max(r.height, 1)) * 100;
      wrap.style.setProperty('--spot-x', `${Math.max(0, Math.min(100, x))}%`);
      wrap.style.setProperty('--spot-y', `${Math.max(0, Math.min(100, y))}%`);
    };

    const handleMove = (e: PointerEvent) => {
      setSpot(e);
      wrap.classList.add('is-spot-active');
    };
    
    const handleLeave = () => {
      wrap.classList.remove('is-spot-active');
    };

    wrap.addEventListener('pointermove', handleMove as any, { passive: true });
    wrap.addEventListener('pointerleave', handleLeave);

    return () => {
      wrap.removeEventListener('pointermove', handleMove as any);
      wrap.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <div className="rob-bot-page">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

        .rob-bot-page {
          --bg: #0b1020;
          --bg-elevated: #0e1426;
          --surface: #11182b;
          --surface-2: #151f36;
          --border: rgba(255, 255, 255, 0.08);
          --border-strong: rgba(255, 255, 255, 0.12);
          --text: #f3f7ff;
          --text-muted: #a6b3cc;
          --text-faint: rgba(166, 179, 204, 0.65);
          --accent: #5eead4;
          --accent-hover: #2dd4bf;
          --accent-muted: rgba(94, 234, 212, 0.14);
          --accent-on-accent: #0b1020;
          --accent-glow: rgba(94, 234, 212, 0.22);

          --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
          --tracking-tight: -0.025em;
          --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
          --duration-ui: 180ms;

          font-family: var(--font-sans);
          font-size: 1rem;
          line-height: 1.62;
          color: var(--text);
          background-color: var(--bg);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .rob-bot-page * {
          box-sizing: border-box;
        }

        .rob-bot-page a {
          text-decoration: none;
          color: inherit;
        }

        .rob-bot-page button {
          font: inherit;
          cursor: pointer;
          border: none;
          background: none;
          padding: 0;
        }

        /* Layout */
        .page-container {
          width: 100%;
          max-width: 80rem;
          margin-inline: auto;
          padding-inline: 1.5rem;
        }
        @media (min-width: 1024px) {
          .page-container { padding-inline: 2rem; }
        }

        .page-section { padding-block: clamp(4rem, 8vw, 7.5rem); }
        .page-section--surface { background-color: var(--surface); border-block: 1px solid var(--border); }
        .page-section--surface-2 { background-color: var(--surface-2); }
        .page-section--tight { padding-block: clamp(3rem, 6vw, 4.5rem); }

        /* Typography */
        .h-display {
          font-size: clamp(2.375rem, 5.5vw + 1rem, 4rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: var(--tracking-tight);
          margin: 0 0 1.5rem;
        }
        .h-display__accent { color: var(--accent); }
        
        .h2 {
          font-size: clamp(1.625rem, 2.5vw + 1rem, 2.25rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: var(--tracking-tight);
          margin: 0 0 1.5rem; /* T001: Consistent bottom margin */
        }
        
        .h3 {
          font-size: clamp(1.125rem, 1vw + 0.875rem, 1.375rem);
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: var(--tracking-tight);
          margin: 0 0 0.75rem;
        }

        .t-lead {
          font-size: clamp(1rem, 1vw + 0.875rem, 1.125rem);
          color: var(--text-muted);
          line-height: 1.62;
          margin: 0 0 2rem;
          max-width: 44ch;
        }
        .t-prose { color: var(--text-muted); margin: 0; max-width: 44ch; }
        .t-small { font-size: 0.8125rem; color: var(--text-faint); }

        .eyebrow {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-muted);
          border: 1px solid rgba(94, 234, 212, 0.22);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          margin-bottom: 1rem;
        }

        /* Buttons */
        .rbtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9375rem;
          padding: 0.75rem 1.25rem;
          border-radius: 0.875rem;
          transition: all var(--duration-ui) var(--ease-premium);
        }
        .rbtn--primary {
          background: var(--accent);
          color: var(--accent-on-accent);
          box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset, 0 16px 48px -24px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06);
        }
        .rbtn--primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.05) inset, 0 16px 48px -24px rgba(0,0,0,0.55), 0 0 24px -8px var(--accent-glow);
        }
        .rbtn--ghost {
          border: 1px solid var(--border-strong);
          color: var(--text);
        }
        .rbtn--ghost:hover {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.03);
          transform: translateY(-1px);
        }
        .rbtn--lg {
          padding: 1rem 1.5rem;
          font-size: 1rem;
          border-radius: 1.25rem;
        }
        .rbtn--block { width: 100%; }

        /* Header */
        .site-header {
          position: sticky; top: 0; z-index: 100;
          transition: all var(--duration-ui) var(--ease-premium);
          border-bottom: 1px solid transparent;
        }
        .site-header.is-scrolled {
          background: rgba(11, 16, 32, 0.86);
          border-bottom-color: var(--border);
          backdrop-filter: blur(14px);
        }
        .site-header__inner {
          display: flex; align-items: center; justify-content: space-between;
          min-height: 4.5rem;
        }
        .logo { display: flex; align-items: center; gap: 0.75rem; font-weight: 700; letter-spacing: var(--tracking-tight); }
        .logo__mark {
          width: 2rem; height: 2rem; border-radius: 0.5rem;
          background: var(--accent-muted); border: 1px solid rgba(94, 234, 212, 0.25);
          display: flex; align-items: center; justify-content: center; color: var(--accent);
        }
        .site-nav { display: none; }
        @media (min-width: 900px) {
          .site-nav { display: flex; align-items: center; gap: 2rem; }
          .site-nav a { font-size: 0.9375rem; font-weight: 600; color: var(--text-muted); transition: color 0.2s; }
          .site-nav a:hover { color: var(--text); }
        }

        /* Hero */
        .hero { position: relative; overflow: hidden; padding-top: 3rem; }
        .hero::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 90% 55% at 18% -8%, rgba(94, 234, 212, 0.055) 0%, transparent 58%);
        }
        .hero-grid { display: grid; gap: 4rem; }
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; }
        }

        .kicker { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 1rem; }
        .kicker span { color: var(--accent); }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 3rem; }

        /* T001: Tightened Hero Stats */
        .hero-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
          padding-block: 2rem; border-top: 1px solid var(--border);
        }
        @media (max-width: 640px) { .hero-stats { grid-template-columns: 1fr; gap: 1.5rem; } }
        
        .stat-item {
          padding-left: 1rem;
          border-left: 2px solid var(--accent); /* T001: thin teal left-border */
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .stat-val {
          font-size: clamp(1.75rem, 3vw, 2.25rem); /* T001: larger values (>= 2rem) */
          font-weight: 700;
          letter-spacing: var(--tracking-tight);
          line-height: 1;
        }
        .stat-val--accent { color: var(--accent); }
        .stat-lbl { font-size: 0.875rem; color: var(--text-faint); font-weight: 500; }

        /* T001: Refined Hero Mock */
        .mock-wrap { position: relative; --spot-x: 50%; --spot-y: 50%; }
        .mock-wrap::after {
          content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 2;
          background: radial-gradient(circle 140px at var(--spot-x) var(--spot-y), rgba(94, 234, 212, 0.075) 0%, transparent 72%);
          opacity: 0; transition: opacity 0.2s;
        }
        .mock-wrap.is-spot-active::after { opacity: 1; }
        
        .hero-mock {
          border-radius: 1.5rem; /* T001: Increased border-radius */
          border: 1px solid var(--border-strong);
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.04) 0%, transparent 42%), var(--surface);
          box-shadow: 0 0 60px -20px rgba(94, 234, 212, 0.12), 0 24px 56px -20px rgba(0,0,0,0.55); /* T001: Added glow */
          overflow: hidden;
          display: flex; flex-direction: column; min-height: 28rem; max-height: 32rem;
        }
        
        .mock-bar {
          display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, var(--surface-2) 100%);
          border-bottom: 1px solid var(--border);
        }
        .mock-user { display: flex; align-items: center; gap: 0.75rem; }
        .mock-av { width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--accent-muted); border: 1px solid rgba(94,234,212,0.3); display: flex; align-items: center; justify-content: center; color: var(--accent); }
        .mock-thread { flex: 1; padding: 1.25rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; background: rgba(0,0,0,0.15); }
        .bubble { display: flex; gap: 0.75rem; max-width: 85%; }
        .bubble--out { align-self: flex-end; flex-direction: row-reverse; }
        .bubble-text { padding: 0.75rem 1rem; border-radius: 1rem; font-size: 0.9375rem; background: var(--surface-2); border: 1px solid var(--border); }
        .bubble--out .bubble-text { background: var(--accent-muted); border-color: rgba(94,234,212,0.2); }
        .bubble-av { width: 1.75rem; height: 1.75rem; border-radius: 50%; background: var(--surface-2); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; flex-shrink: 0; }
        .bubble-av--bot { background: var(--accent); color: var(--bg); }
        .mock-crm { margin-top: auto; font-size: 0.75rem; color: var(--text-faint); display: flex; align-items: center; gap: 0.5rem; padding-top: 1rem; }

        /* Pains Grid */
        .pains-grid { display: grid; gap: 1.5rem; margin-top: 3rem; }
        @media (min-width: 768px) { .pains-grid { grid-template-columns: repeat(3, 1fr); } }
        
        .pain-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: 1.25rem;
          padding: 2rem; position: relative; overflow: hidden;
          display: flex; flex-direction: column;
        }
        /* T001: Top accent line for lead card */
        .pain-card--lead {
          border-top: 2px solid rgba(94,234,212,0.45);
        }
        .pain-icon { color: var(--text-faint); margin-bottom: 1.25rem; width: 1.5rem; height: 1.5rem; }
        .pain-card--lead .pain-icon { color: var(--accent); }
        .pain-desc { color: var(--text-muted); font-size: 0.9375rem; line-height: 1.6; margin-bottom: 1.5rem; flex: 1; }
        
        /* T001: Metric chip for tag */
        .pain-tag {
          display: inline-flex; align-items: center; gap: 0.375rem;
          font-size: 0.8125rem; font-weight: 600; color: var(--accent);
          background: var(--accent-muted); padding: 0.375rem 0.75rem;
          border-radius: 0.5rem; margin-top: auto; align-self: flex-start;
          border: 1px solid rgba(94,234,212,0.15);
        }

        /* ROI Strip - T001: more vertical room */
        .roi-strip {
          text-align: center;
        }
        .roi-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 2.5rem; margin-top: 2rem; opacity: 0.5; font-weight: 700; letter-spacing: 0.05em; }
        .roi-metrics { display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin-top: 3rem; font-size: 0.9375rem; font-weight: 500; }
        .roi-metrics span { display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); }
        .roi-metrics svg { color: var(--accent); width: 1.125rem; height: 1.125rem; }

        /* Steps */
        .steps { display: grid; gap: 2rem; margin-top: 4rem; position: relative; }
        @media (min-width: 768px) {
          .steps { grid-template-columns: repeat(3, 1fr); }
          .step { position: relative; }
          /* T001: Connector line gradient fading to transparent */
          .step:not(:last-child)::after {
            content: ""; position: absolute; top: 1.5rem; right: -1rem; width: calc(100% - 3rem); height: 1px;
            background: linear-gradient(to right, var(--accent) 0%, transparent 100%);
            opacity: 0.3;
          }
        }
        .step-num { width: 3rem; height: 3rem; border-radius: 50%; background: var(--surface-2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent); margin-bottom: 1.5rem; }
        
        /* Hitl Split */
        .hitl-split { display: grid; gap: 4rem; align-items: center; }
        @media (min-width: 1024px) { .hitl-split { grid-template-columns: 1fr 1fr; } }
        .feat-list { list-style: none; padding: 0; margin: 2rem 0 0; display: grid; gap: 1.5rem; }
        .feat-item { display: flex; gap: 1rem; }
        .feat-icon { width: 2.5rem; height: 2.5rem; border-radius: 0.75rem; background: var(--surface-2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0; }
        .feat-item h4 { font-weight: 600; margin: 0 0 0.25rem; }
        .feat-item p { font-size: 0.9375rem; color: var(--text-muted); margin: 0; }
        
        .diagram { background: var(--surface-2); border: 1px solid var(--border); border-radius: 1.5rem; padding: 3rem 2rem; text-align: center; position: relative; }
        .diagram-node { background: var(--surface); border: 1px solid var(--border); border-radius: 1rem; padding: 1rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem; margin: 0 auto; }
        .diagram-node--accent { border-color: rgba(94,234,212,0.3); background: rgba(94,234,212,0.05); color: var(--accent); display: inline-flex; flex-direction: column; padding: 1rem 1.5rem; }
        .diagram-arrow { color: var(--text-muted); margin: 1rem 0; display: block; }

        /* Compare Table */
        .table-wrap { overflow-x: auto; margin-top: 3rem; background: var(--surface); border-radius: 1rem; border: 1px solid var(--border); }
        .compare-table { width: 100%; min-width: 600px; border-collapse: collapse; text-align: left; }
        .compare-table th, .compare-table td { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border); font-size: 0.9375rem; }
        .compare-table th { font-weight: 600; color: var(--text-muted); }
        /* T001: Compare table highlight column tightened */
        .compare-table .highlight { background: var(--accent-muted); position: relative; }
        .compare-table th.highlight { color: var(--accent); border-top: 3px solid var(--accent); }
        .compare-table td.highlight { font-weight: 600; }
        .compare-table tr:last-child td { border-bottom: none; }

        /* Pricing */
        .pricing-grid { display: grid; gap: 2rem; margin-top: 3rem; }
        @media (min-width: 1024px) { .pricing-grid { grid-template-columns: repeat(3, 1fr); align-items: start; } }
        .pricing-card { background: var(--surface); border: 1px solid var(--border); border-radius: 1.25rem; padding: 2.5rem; display: flex; flex-direction: column; gap: 2rem; }
        .pricing-card--featured { border-color: rgba(94,234,212,0.3); position: relative; }
        .pricing-badge { position: absolute; top: -1rem; left: 50%; transform: translateX(-50%); background: var(--accent); color: var(--bg); font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 999px; }
        .pricing-price { font-size: 2.5rem; font-weight: 800; letter-spacing: var(--tracking-tight); margin: 0.5rem 0; }
        .pricing-price span { font-size: 1rem; color: var(--text-faint); font-weight: 500; }
        .pricing-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; }
        .pricing-list li { display: flex; gap: 0.75rem; font-size: 0.9375rem; color: var(--text-muted); }
        .pricing-list svg { width: 1.25rem; height: 1.25rem; color: var(--accent); flex-shrink: 0; }

        /* T001: Dedicated CTA Section */
        .cta-section {
          position: relative;
          padding-block: 6rem;
          background: var(--bg);
          text-align: center;
          border-top: 1px solid var(--border);
          overflow: hidden;
        }
        .cta-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(94, 234, 212, 0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 48rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cta-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 3rem;
          opacity: 0.6;
        }

        /* Footer */
        .site-footer { border-top: 1px solid var(--border); padding-block: 4rem; background: var(--surface); }
        .footer-grid { display: grid; gap: 3rem; grid-template-columns: 1fr; }
        @media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr; } }
        .footer-links { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem; }
        .footer-links a { color: var(--text-muted); font-size: 0.9375rem; }
        .footer-links a:hover { color: var(--text); }
        .footer-bottom { border-top: 1px solid var(--border); margin-top: 4rem; padding-top: 2rem; display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--text-faint); }
      `}} />

      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="page-container site-header__inner">
          <a href="#" className="logo">
            <span className="logo__mark"><Bot size={18} /></span>
            Роб Бот
          </a>
          <nav className="site-nav">
            <a href="#how">Как работает</a>
            <a href="#hitl">Контроль</a>
            <a href="#rag">Умная база</a>
            <a href="#roi">ROI</a>
            <a href="#pricing">Тарифы</a>
          </nav>
          <a href="#demo" className="rbtn rbtn--primary hidden sm:flex">Запросить демо</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="page-container hero-grid">
            <div className="hero-intro">
              <p className="kicker"><span>AI sales</span> · Отдел продаж 24/7</p>
              <h1 className="h-display">Бот, который продаёт круглосуточно — <span className="h-display__accent">пока команда отдыхает</span></h1>
              <p className="t-lead">Агент ловит лиды вне смены, ведёт диалог в тоне бренда и передаёт менеджеру контекст — с перехватом и правками в один клик.</p>
              
              <div className="hero-actions">
                <a href="#demo" className="rbtn rbtn--primary rbtn--lg">Запросить демо за 15 минут</a>
                <a href="#demo" className="rbtn rbtn--ghost rbtn--lg">Запросить гайд</a>
              </div>
              
              {/* T001: Tightened Hero Stats */}
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-val">−70%</div>
                  <div className="stat-lbl">Cost per lead</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">24/7</div>
                  <div className="stat-lbl">Без выходных</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val stat-val--accent">2–3 дня</div>
                  <div className="stat-lbl">До первого ROI</div>
                </div>
              </div>
            </div>

            {/* T001: Refined Hero Mock */}
            <div className="mock-wrap" ref={spotRef}>
              <div className="hero-mock">
                <div className="mock-bar">
                  <div className="mock-user">
                    <div className="mock-av"><Bot size={18} /></div>
                    <div>
                      <div style={{fontWeight: 600, fontSize: '0.875rem'}}>Роб Бот</div>
                      <div style={{fontSize: '0.6875rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                        <span style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)'}}></span> Анализирует лид
                      </div>
                    </div>
                  </div>
                  <button style={{fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', border: '1px solid var(--border-strong)'}}>Перехватить</button>
                </div>
                <div className="mock-thread">
                  <div className="bubble">
                    <div className="bubble-av">К</div>
                    <div className="bubble-text">Нужна система на 50+ человек. Условия и сроки внедрения?</div>
                  </div>
                  <div className="bubble bubble--out">
                    <div className="bubble-av bubble-av--bot"><Bot size={14} /></div>
                    <div className="bubble-text">Для 50+ подойдёт Enterprise. Внедрение 2–3 дня. При оплате за год — скидка 20%. Забронировать звонок с техдиректором на завтра?</div>
                  </div>
                  <div className="mock-crm"><Database size={12} /> CRM: бюджет зафиксирован, Lead Score 9/10</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section page-section--surface" id="pains">
          <div className="page-container">
            <h2 className="h2">Когда менеджеры спят — деньги уходят конкурентам</h2>
            <p className="t-prose">Три узких места на этапе масштабирования B2B-продаж.</p>
            
            <div className="pains-grid">
              <article className="pain-card pain-card--lead">
                <Moon className="pain-icon" />
                <h3 className="h3">Лид пишет в 23:00 — и больше не ждёт</h3>
                <p className="pain-desc">Большая часть B2B-лидов ожидает ответа в первые минуты. Ночью ответ конкурента часто значит потерянную сделку.</p>
                {/* T001: Metric chip */}
                <div className="pain-tag"><DollarSign size={14} /> 5–50K упущенного дохода</div>
              </article>
              <article className="pain-card">
                <Hourglass className="pain-icon" />
                <h3 className="h3">Время уходит на квалификацию</h3>
                <p className="pain-desc">SDR тратят часы на однотипные вопросы. Менеджерам нужно закрывать, а не читать скрипт.</p>
                <div className="pain-tag"><DollarSign size={14} /> 80–150K на штат</div>
              </article>
              <article className="pain-card">
                <Filter className="pain-icon" />
                <h3 className="h3">Бюджет на лиды без квалификации</h3>
                <p className="pain-desc">До 40% лидов отваливается на этапе квалификации — маркетинг работает вхолостую.</p>
                <div className="pain-tag"><DollarSign size={14} /> 40% бюджета впустую</div>
              </article>
            </div>
          </div>
        </section>

        {/* T001: ROI strip gets more breathing room */}
        <section className="page-section page-section--surface-2 page-section--tight roi-strip" id="roi">
          <div className="page-container">
            <h2 className="h2" style={{margin: 0}}>150+ компаний снижают стоимость лида до 70%</h2>
            <div className="roi-logos">
              <span>ACME Corp</span>
              <span>TechFlow</span>
              <span>SaaSify</span>
              <span>GlobalIt</span>
              <span>FinStart</span>
            </div>
            <div className="roi-metrics">
              <span><Star /> 4.9 на G2</span>
              <span><TrendingUp /> 2 400+ лидов в месяц</span>
              <span><Target /> ROI в среднем на 2–3-й день</span>
            </div>
          </div>
        </section>

        <section className="page-section" id="how">
          <div className="page-container">
            <h2 className="h2">Три шага вместо долгих интеграций</h2>
            <p className="t-prose">От первого касания до готовой карточки в CRM — без лишней суеты.</p>
            
            <div className="steps">
              <div className="step">
                <div className="step-num">01</div>
                <h3 className="h3">Лид входит</h3>
                <p className="t-small" style={{fontSize: '0.9375rem'}}>Форма, звонок или мессенджер — бот подхватывает за секунду и начинает диалог.</p>
              </div>
              <div className="step">
                <div className="step-num">02</div>
                <h3 className="h3">Квалификация</h3>
                <p className="t-small" style={{fontSize: '0.9375rem'}}>Бюджет, сроки, боль — в CRM в реальном времени. Перехват в один клик.</p>
              </div>
              <div className="step">
                <div className="step-num">03</div>
                <h3 className="h3">Готово к сделке</h3>
                <p className="t-small" style={{fontSize: '0.9375rem'}}>Лид с полями и скором. При высоком score — слот в календаре автоматически.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section page-section--surface" id="hitl">
          <div className="page-container hitl-split">
            <div>
              <span className="eyebrow">Контроль</span>
              <h2 className="h2">Помощник с полным контролем, а не чёрный ящик</h2>
              <p className="t-lead">Менеджер видит диалог, может перехватить или подправить поведение бота без остановки разговора.</p>
              
              <ul className="feat-list">
                <li className="feat-item">
                  <div className="feat-icon"><Hand size={20} /></div>
                  <div>
                    <h4>Перехват в реальном времени</h4>
                    <p>Сложный запрос — кнопка «Перехватить»: бот уступает линию.</p>
                  </div>
                </li>
                <li className="feat-item">
                  <div className="feat-icon"><Edit size={20} /></div>
                  <div>
                    <h4>Промпт на лету</h4>
                    <p>Корректировка промпта во время чата — следующий ответ с учётом правки.</p>
                  </div>
                </li>
                <li className="feat-item">
                  <div className="feat-icon"><ClipboardCheck size={20} /></div>
                  <div>
                    <h4>QA после диалога</h4>
                    <p>Правки в CRM и заметки боту обучают модель на каждом лиде.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="diagram">
              <div className="diagram-node"><User size={16} /> Ваш менеджер</div>
              <ArrowDown className="diagram-arrow" style={{margin: '1rem auto'}} />
              <div className="diagram-node--accent">
                <strong><Bot size={16} style={{display: 'inline', marginBottom: -3}} /> Роб Бот</strong>
                <span className="t-small" style={{color: 'inherit'}}>Первичный диалог</span>
              </div>
              <ArrowDown className="diagram-arrow" style={{margin: '1rem auto'}} />
              <div className="diagram-node"><User size={16} /> Клиент</div>
            </div>
          </div>
        </section>

        <section className="page-section" id="compare">
          <div className="page-container">
            <h2 className="h2">Роб Бот и альтернативы</h2>
            <p className="t-prose">Не замена менеджеру — усиление: скорость, база знаний и перехват в один клик.</p>
            
            <div className="table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Критерий</th>
                    <th>Нанять менеджера</th>
                    <th>Обычный чат-бот</th>
                    <th className="highlight">Роб Бот</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Стоимость / мес</td>
                    <td>$2 500–3 500</td>
                    <td>$300–800</td>
                    <td className="highlight">$499</td>
                  </tr>
                  <tr>
                    <td>Квалификация</td>
                    <td>≈ 90%</td>
                    <td>≈ 70%, медленно</td>
                    <td className="highlight">≈ 95%</td>
                  </tr>
                  <tr>
                    <td>24/7</td>
                    <td>Нет</td>
                    <td>Да</td>
                    <td className="highlight">Да</td>
                  </tr>
                  <tr>
                    <td>Ваша база (RAG)</td>
                    <td>Со временем</td>
                    <td>Очень ограничено</td>
                    <td className="highlight">Сразу</td>
                  </tr>
                  <tr>
                    <td>Перехват</td>
                    <td>Да</td>
                    <td>Нет</td>
                    <td className="highlight">Один клик</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* T001: Dedicated CTA Section */}
        <section className="cta-section">
          <div className="page-container cta-inner">
            <h2 className="h2" style={{fontSize: 'clamp(2rem, 4vw, 3rem)'}}>Готовы масштабировать продажи?</h2>
            <p className="t-lead">Запустите AI-агента за 3 дня и начните получать квалифицированные лиды 24/7.</p>
            <a href="#demo" className="rbtn rbtn--primary rbtn--lg" style={{padding: '1.25rem 2.5rem', fontSize: '1.125rem'}}>
              Запросить демо-доступ
            </a>
            
            <div className="cta-trust">
              <span className="t-small" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><Check size={14} /> Без привязки карты</span>
              <span className="t-small" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><Check size={14} /> Настройка под ключ</span>
              <span className="t-small" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><Check size={14} /> SLA 99.9%</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container">
          <div className="footer-grid">
            <div>
              <div className="logo" style={{marginBottom: '1.5rem'}}>
                <span className="logo__mark"><Bot size={18} /></span>
                Роб Бот
              </div>
              <p className="t-prose" style={{fontSize: '0.875rem'}}>AI-агент для B2B продаж. Квалификация, онбординг и поддержка клиентов без выходных.</p>
            </div>
            <div>
              <h4 style={{fontWeight: 600, margin: '0 0 1.5rem'}}>Продукт</h4>
              <ul className="footer-links">
                <li><a href="#">Возможности</a></li>
                <li><a href="#">Интеграции</a></li>
                <li><a href="#">Тарифы</a></li>
                <li><a href="#">Безопасность</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{fontWeight: 600, margin: '0 0 1.5rem'}}>Ресурсы</h4>
              <ul className="footer-links">
                <li><a href="#">Блог</a></li>
                <li><a href="#">Кейсы</a></li>
                <li><a href="#">Документация</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2024 Роб Бот. Все права защищены.</span>
            <div style={{display: 'flex', gap: '1.5rem'}}>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
