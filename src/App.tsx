import { useMemo, useState } from "react";
import { dictionary, type DictCategory } from "./data/dictionary";

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function highlight(text: string, query: string) {
  if (!query) return text;
  const normText = normalize(text);
  const normQuery = normalize(query);
  const idx = normText.indexOf(normQuery);
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return (
    <>
      {before}
      <mark className="rounded-sm bg-amber-200 px-0.5 text-inherit">{match}</mark>
      {after}
    </>
  );
}

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = useMemo<DictCategory[]>(() => {
    const q = normalize(query);
    if (!q) return dictionary;

    return dictionary
      .map((cat) => {
        const catMatches = normalize(cat.title).includes(q);
        const entries = cat.entries.filter(
          (e) => normalize(e.term).includes(q) || normalize(e.code).includes(q)
        );
        if (catMatches) return cat;
        if (entries.length > 0) return { ...cat, entries };
        return null;
      })
      .filter((c): c is DictCategory => c !== null);
  }, [query]);

  const totalResults = filtered.reduce((sum, c) => sum + c.entries.length, 0);
  const totalEntries = dictionary.reduce((sum, c) => sum + c.entries.length, 0);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Dicionário C# online e gratuito
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Dicionário C# Unity para Iniciantes
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Este <strong>dicionário C#</strong> traduz termos em <strong>português</strong> para o
            código <strong>C#</strong> equivalente usado no Unity. Não sabe como se escreve algo em
            código? Digite o termo em português no nosso dicionário C# e encontre a sintaxe correta
            na hora. Feito para consultar rápido, com <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-xs">Ctrl</kbd> + <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-xs">F</kbd> ou pela busca abaixo.
          </p>
        </div>
      </header>

      {/* Search bar (sticky) */}
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-3xl px-5 py-4">
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Buscar termo... ex: "somar", "if", "loop", "cor"'
              autoFocus
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-10 text-base text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Limpar busca"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            )}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            {query
              ? `${totalResults} resultado${totalResults === 1 ? "" : "s"} encontrado${
                  totalResults === 1 ? "" : "s"
                } de ${totalEntries}`
              : `${totalEntries} termos catalogados em ${dictionary.length} categorias`}
          </p>
        </div>
      </div>

      {/* Category quick nav */}
      {!query && (
        <nav className="mx-auto max-w-3xl px-5 pt-6">
          <div className="flex flex-wrap gap-1.5">
            {dictionary.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* Content */}
      <main className="mx-auto max-w-3xl px-5 py-8">
        {filtered.length === 0 && (
          <div className="rounded-lg border border-dashed border-slate-300 py-16 text-center">
            <p className="text-lg font-medium text-slate-600">Nenhum termo encontrado</p>
            <p className="mt-1 text-sm text-slate-400">
              Tente buscar por outra palavra, como "loop", "if" ou "cor".
            </p>
          </div>
        )}

        <div className="space-y-10">
          {filtered.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-2 text-lg font-bold text-slate-900">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-xs font-bold text-white">
                  {cat.letter}
                </span>
                {highlight(cat.title, query)}
              </h2>

              <dl className="divide-y divide-slate-100">
                {cat.entries.map((entry, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-4"
                  >
                    <dt className="text-sm font-medium text-slate-700 sm:pt-1.5">
                      {highlight(entry.term, query)}
                    </dt>
                    <dd className="min-w-0">
                      <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-md bg-slate-900 px-3 py-2 font-mono text-[13px] leading-relaxed text-emerald-300">
                        <code>{highlight(entry.code, query)}</code>
                      </pre>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </main>

      {/* SEO / FAQ section */}
      {!query && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-3xl px-5 py-10">
            <h2 className="text-lg font-bold text-slate-900">
              Sobre este dicionário C#
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Este <strong>dicionário C#</strong> foi criado para ajudar quem está começando a
              programar no <strong>Unity</strong>. Em vez de decorar sintaxe, basta pensar no que
              você quer fazer em <strong>português</strong> — como "somar 1" ou "mostrar no
              console" — e o dicionário C# mostra o código correspondente em C#. É uma referência
              rápida, gratuita e sem necessidade de cadastro.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  O que é este dicionário C#?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  É um glossário pesquisável que traduz termos em português para o código C#
                  usado no desenvolvimento de jogos com Unity.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Este dicionário C# é gratuito?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Sim, o dicionário C# é 100% gratuito e pode ser usado quantas vezes você
                  precisar, direto no navegador.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Preciso saber inglês para usar o dicionário C#?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Não. Todos os termos deste dicionário C# estão em português, para facilitar o
                  aprendizado de quem está começando.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        Dicionário C# Unity para Iniciantes — feito para consultar rápido enquanto você aprende a programar jogos.
      </footer>
    </div>
  );
}
