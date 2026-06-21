import { showcase } from "../lib/showcase";
import FolderCard from "./FolderCard";

// File-manager / explorer styled showcase. Groups of folders rendered in a
// responsive grid — everything visible at once (no carousel / swipe).

export default function FileManager() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="mb-10 flex items-center gap-3">
        <span className="text-xl" aria-hidden>
          🗂️
        </span>
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          ~/santirat
        </h2>
      </div>

      {showcase.map((group) => (
        <div key={group.title} className="mb-12">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            {group.title}
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {group.items.map((item) => (
              <FolderCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
