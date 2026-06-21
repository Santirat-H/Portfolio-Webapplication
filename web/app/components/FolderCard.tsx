"use client";

import { useState } from "react";
import type { ShowcaseItem } from "../lib/showcase";

// A single file-manager "folder". Closed: just an icon + name. Open: spans the
// full grid width and reveals placeholder detail (description, tech tags,
// links, screenshot placeholder). Simple expand/collapse — no carousel.

export default function FolderCard({ item }: { item: ShowcaseItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-lg border border-border bg-surface transition-colors ${
        open ? "col-span-full" : "hover:bg-surface-hover"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left"
      >
        <span className="text-2xl" aria-hidden>
          {open ? "📂" : "📁"}
        </span>
        <span className="flex-1 truncate font-mono text-sm text-foreground">
          {item.name}
        </span>
        <span className="text-muted" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="border-t border-border px-4 py-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Screenshot placeholder */}
            <div className="flex aspect-video items-center justify-center rounded-md border border-dashed border-border bg-background text-xs text-muted">
              Screenshot placeholder
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {item.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-sm">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub ↗
                </a>
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Live demo ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
