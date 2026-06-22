import type { ShowcaseItem } from "../lib/showcase";

const FolderIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 6.5C3 5.67 3.67 5 4.5 5H9l2 2h8.5c.83 0 1.5.67 1.5 1.5V18c0 .83-.67 1.5-1.5 1.5h-15C3.67 19.5 3 18.83 3 18V6.5Z"
      fill="currentColor"
      opacity=".22"
    />
    <path
      d="M3 9h18v9c0 .83-.67 1.5-1.5 1.5h-15C3.67 19.5 3 18.83 3 18V9Z"
      fill="currentColor"
      opacity=".92"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2.5l2.6 5.3 5.9.86-4.25 4.14 1 5.87L12 16.9l-5.25 2.76 1-5.87L3.5 8.66l5.9-.86L12 2.5Z"
      fill="currentColor"
      opacity=".9"
    />
  </svg>
);

type Props = {
  item: ShowcaseItem;
  isOpen: boolean;
  icon: "folder" | "star";
  onToggle: () => void;
};

export default function FolderCard({ item, isOpen, icon, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      style={{
        position: "relative",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "15px",
        background: isOpen
          ? "rgba(255,255,255,.05)"
          : "rgba(255,255,255,.025)",
        border: `1px solid ${isOpen ? "var(--accent)" : "rgba(255,255,255,.08)"}`,
        borderRadius: "11px",
        cursor: "pointer",
        color: "#e6e8ec",
        fontFamily: "inherit",
        transform: isOpen ? "translateY(-2px)" : undefined,
        transition: "transform .16s ease, border-color .2s ease, background .2s ease",
        width: "100%",
      }}
    >
      <span style={{ color: "var(--accent)", display: "flex", flex: "none" }}>
        {icon === "folder" ? <FolderIcon /> : <StarIcon />}
      </span>
      <span
        style={{
          flex: 1,
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "14px",
          letterSpacing: ".01em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {item.name}
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "#8b909a",
          fontSize: "17px",
          width: "14px",
          textAlign: "center",
          flex: "none",
        }}
      >
        {isOpen ? "–" : "+"}
      </span>
      {isOpen && (
        <span
          style={{
            position: "absolute",
            left: "15px",
            right: "15px",
            bottom: "-1px",
            height: "2px",
            background: "var(--accent)",
            boxShadow: "0 0 12px var(--accent)",
            borderRadius: "2px",
          }}
        />
      )}
    </button>
  );
}
