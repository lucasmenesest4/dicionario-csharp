import { useEffect, useRef, useState } from "react";
import { highlight } from "../utils/text";

interface CodeBlockProps {
  /** Código-fonte "cru" (sem marcações), usado para copiar e para exibir. */
  code: string;
  /** Termo de busca atual, usado apenas para destacar visualmente. */
  query?: string;
  className?: string;
}

export default function CodeBlock({ code, query = "", className = "" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // Fallback caso a Clipboard API não esteja disponível
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch {
        // silenciosamente ignora se nada funcionar
      } finally {
        document.body.removeChild(textarea);
      }
    }

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={`group/code relative ${className}`}>
      <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-md bg-slate-900 px-3 py-2 pr-16 font-mono text-[13px] leading-relaxed text-emerald-300">
        <code>{highlight(code, query)}</code>
      </pre>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Código copiado" : "Copiar código"}
        className={`absolute right-2 top-2 flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] font-medium transition-all duration-150 opacity-0 group-hover/code:opacity-100 max-sm:opacity-100 ${
          copied
            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
            : "border-slate-700 bg-slate-800/90 text-slate-300 hover:border-emerald-500/40 hover:bg-slate-800 hover:text-emerald-300"
        }`}
      >
        {copied ? (
          <>
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Copiado! ✓
          </>
        ) : (
          <>
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copiar
          </>
        )}
      </button>
    </div>
  );
}
