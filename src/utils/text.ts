import type { ReactNode } from "react";
import { createElement, Fragment } from "react";

export function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Destaca a primeira ocorrência de `query` dentro de `text`.
 * Retorna um ReactNode (string ou fragmento com <mark>).
 */
export function highlight(text: string, query: string): ReactNode {
  if (!query) return text;
  const normText = normalize(text);
  const normQuery = normalize(query);
  const idx = normText.indexOf(normQuery);
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return createElement(
    Fragment,
    null,
    before,
    createElement(
      "mark",
      { className: "rounded-sm bg-amber-200 px-0.5 text-inherit" },
      match
    ),
    after
  );
}
