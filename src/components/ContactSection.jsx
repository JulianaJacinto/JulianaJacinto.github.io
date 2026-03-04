import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt, faEnvelope, faPhone, faCheckCircle, faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin, faGithub, faInstagram, faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// ─── Dados ────────────────────────────────────────────────────────────────────
const CONTACT_INFO = [
  { icon: faMapMarkerAlt, label: "Localização",  value: "Cachoeira Paulista – SP" },
  { icon: faEnvelope,     label: "E-mail",        value: "julimaria2003@gmail.com", href: "mailto:julimaria2003@gmail.com" },
  { icon: faPhone,        label: "Telefone",      value: "(11) 96640-3523",          href: "https://wa.me/5511966403523" },
];

const SERVICES = [
  "Desenvolvimento Front-End",
  "Desenvolvimento Full-Stack",
  "Implementação e Manutenção de Sites",
  "Administração de Servidores e Hospedagem Web",
  "Consultoria e Suporte Técnico",
  "WordPress, Wix e Shopify",
  "Aplicativos Web Personalizados",
];

// ─── Fundo: grade de linhas estilo tech ──────────────────────────────────────
function TechGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* Grade SVG horizontal + vertical */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <defs>
          <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid)" />
      </svg>

      {/* Linhas diagonais de acento */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]">
        <defs>
          <pattern id="tech-diag" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 0 80 L 80 0" fill="none" stroke="#a3e635" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-diag)" />
      </svg>

      {/* Ponto nos cruzamentos da grade */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
        <defs>
          <pattern id="tech-dots" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="1.2" fill="#a3e635" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-dots)" />
      </svg>

      {/* Glow de acento — topo centro */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px]
        bg-lime-500/6 rounded-full blur-3xl" />

      {/* Glow secundário — canto inferior direito */}
      <div className="absolute -bottom-16 -right-16 w-72 h-72
        bg-lime-400/5 rounded-full blur-3xl" />

      {/* Linha de separação topo */}
      <div className="absolute top-0 inset-x-0 h-1
        bg-gradient-to-r from-transparent via-lime-500/30 to-transparent" />
    </div>
  );
}

// ─── Campo de formulário reutilizável ─────────────────────────────────────────
function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-300 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass = `
  block w-full rounded-xl bg-slate-800/60 border border-slate-700/60
  px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500
  focus:outline-none focus:border-lime-400/60 focus:ring-1 focus:ring-lime-400/30
  hover:border-slate-600 transition-all duration-200 backdrop-blur-sm
`;

// ─── Formulário de contato ────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integração futura (EmailJS, API própria, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[340px] gap-4
        rounded-2xl border border-lime-400/20 bg-slate-900/50 backdrop-blur-sm p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-lime-500/10 border border-lime-400/30
          flex items-center justify-center">
          <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 text-lime-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-100">Mensagem enviada!</h3>
        <p className="text-slate-400 text-sm max-w-xs">
          Obrigada pelo contato. Retornarei em breve!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nome" id="name">
          <input
            id="name" name="name" type="text"
            placeholder="Seu nome"
            value={form.name} onChange={handleChange}
            required
            className={inputClass}
          />
        </Field>
        <Field label="E-mail" id="email">
          <input
            id="email" name="email" type="email"
            placeholder="exemplo@email.com"
            value={form.email} onChange={handleChange}
            required
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Assunto" id="subject">
        <input
          id="subject" name="subject" type="text"
          placeholder="Desenvolvimento de site, consultoria..."
          value={form.subject} onChange={handleChange}
          required
          className={inputClass}
        />
      </Field>

      <Field label="Mensagem" id="message">
        <textarea
          id="message" name="message" rows={5}
          placeholder="Conte um pouco sobre seu projeto ou dúvida..."
          value={form.message} onChange={handleChange}
          required
          className={`${inputClass} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2.5
          px-6 py-3.5 rounded-xl
          bg-lime-500 hover:bg-lime-400 text-slate-900
          font-semibold text-sm
          shadow-lg shadow-lime-700/20 hover:shadow-lime-600/30
          hover:scale-[1.02] active:scale-[0.98]
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
        Enviar mensagem
      </button>
    </form>
  );
}

// ─── Painel de informações ────────────────────────────────────────────────────
function InfoPanel() {
  return (
    <div className="flex flex-col gap-8 h-full">

      {/* Dados de contato */}
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50
        backdrop-blur-sm p-6 space-y-5">
        {CONTACT_INFO.map(({ icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl
              bg-lime-500/10 border border-lime-400/20
              flex items-center justify-center">
              <FontAwesomeIcon icon={icon} className="w-4 h-4 text-lime-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-0.5">
                {label}
              </p>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="text-slate-300 text-sm hover:text-lime-400 transition-colors duration-200">
                  {value}
                </a>
              ) : (
                <p className="text-slate-300 text-sm">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Serviços */}
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50
        backdrop-blur-sm p-6 flex-1">
        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">
          Serviços oferecidos
        </p>
        <ul className="space-y-2.5">
          {SERVICES.map((s) => (
            <li key={s} className="flex items-start gap-2.5 text-sm text-slate-400">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0"
              />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Seção principal ──────────────────────────────────────────────────────────
export default function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        py-20 sm:py-28 overflow-hidden"
    >
      <TechGridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Cabeçalho ──────────────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-10 bg-lime-600 rounded-full" />
            <h2
              id="contato-title"
              className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight"
            >
              Entre em <span className="text-lime-400">Contato</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg ml-4 pl-3 border-l border-slate-800">
            Tem um projeto em mente ou quer trabalhar juntos? Me envie uma mensagem!
          </p>
        </div>

        {/* ── Grid: formulário + painel ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Formulário */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50
            backdrop-blur-sm p-8">
            <h3 className="text-lg font-bold text-slate-100 mb-6">
              Envie uma mensagem
            </h3>
            <ContactForm />
          </div>

          {/* Painel lateral */}
          <InfoPanel />
        </div>
      </div>
    </section>
  );
}