import { siteConfig } from "../data/content";
import { getFallbackMailto } from "../lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-main flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-fg text-xs font-medium">{siteConfig.name}</p>
          <p className="text-fg-muted text-xs mt-0.5">{siteConfig.title}</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={getFallbackMailto()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-sub text-xs hover:text-fg transition-colors"
          >
            {siteConfig.email}
          </a>
          <span className="text-fg-muted text-xs font-mono">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
