import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SOCIALS = [
  { icon: faLinkedin,  href: "https://www.linkedin.com/in/juliana-jacinto/", label: "LinkedIn" },
  { icon: faGithub,    href: "https://github.com/julianajacinto",            label: "GitHub" },
  { icon: faWhatsapp,  href: "https://wa.me/5511966403523",                  label: "WhatsApp" },
  { icon: faInstagram, href: "https://www.instagram.com/jukka.arts/",        label: "Instagram" },
];

export default function FooterSection() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/60">

      {/* Linha decorativa lime no topo — fecha o visual da aurora da seção Contato */}
      <div className="absolute top-0 inset-x-0 h-px
        bg-gradient-to-r from-transparent via-lime-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <span className="text-lg font-bold bg-gradient-to-r from-lime-400 to-emerald-400
            bg-clip-text text-transparent">
            Jukka.Dev
          </span>

          {/* Copyright + crédito */}
          <p className="text-xs text-slate-500 text-center order-last sm:order-none leading-relaxed">
            &copy; {new Date().getFullYear()} Todos os direitos reservados | <br className="sm:hidden" />
            Desenvolvido por <a href="https://www.linkedin.com/in/juliana-jacinto/" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:underline">Juliana Jacinto</a>
          </p>

          {/* Redes sociais */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700/40
                  flex items-center justify-center text-slate-500
                  hover:bg-slate-800 hover:border-lime-400/40 hover:text-lime-400
                  transition-all duration-200"
              >
                <FontAwesomeIcon icon={icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}