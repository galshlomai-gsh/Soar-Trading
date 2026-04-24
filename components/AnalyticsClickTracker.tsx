"use client";

import { useEffect } from "react";

// Pushes a dataLayer event for every meaningful click (button, link, or a
// role-"button" element) so GTM can surface CTAs, nav clicks, and outbound
// links without having to manually instrument every button.
//
// Event shape (consumable as a GTM trigger by event name "ui_click"):
//   {
//     event: "ui_click",
//     element_type: "button" | "a",
//     element_text: "<trimmed text, up to 80 chars>",
//     element_href: "<href for links>" | null,
//     element_location: "nav" | "footer" | "header" | "main" | "dialog" | "other",
//     is_external: boolean,
//     data_event?: "<value of data-event on the element>"
//   }
export function AnalyticsClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      let node: HTMLElement | null = e.target as HTMLElement | null;
      while (node && node !== document.body) {
        if (
          node.tagName === "BUTTON" ||
          node.tagName === "A" ||
          node.getAttribute("role") === "button"
        ) {
          break;
        }
        node = node.parentElement;
      }
      if (!node || node === document.body) return;

      const text = (node.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
      const href = node.tagName === "A" ? node.getAttribute("href") : null;
      const isExternal =
        !!href && (/^https?:\/\//.test(href) || href.startsWith("mailto:"));

      type DLWindow = Window & { dataLayer?: unknown[] };
      const w = window as DLWindow;
      w.dataLayer = w.dataLayer ?? [];
      w.dataLayer.push({
        event: "ui_click",
        element_type: node.tagName.toLowerCase(),
        element_text: text || node.getAttribute("aria-label") || "",
        element_href: href,
        element_location: resolveLocation(node),
        is_external: isExternal,
        data_event: node.dataset.event ?? undefined,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

function resolveLocation(el: HTMLElement): string {
  let node: HTMLElement | null = el;
  while (node && node !== document.body) {
    const tag = node.tagName;
    if (tag === "HEADER") return "header";
    if (tag === "FOOTER") return "footer";
    if (tag === "NAV") return "nav";
    if (tag === "MAIN") return "main";
    if (tag === "DIALOG" || node.getAttribute("role") === "dialog") {
      return "dialog";
    }
    node = node.parentElement;
  }
  return "other";
}
