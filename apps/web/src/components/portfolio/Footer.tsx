export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <span className="text-sm text-black/50 font-medium">
          © {currentYear}
        </span>
        <span className="text-[1.75rem] font-bold text-black tracking-tight">
          KB
        </span>
        {/* Invisible spacer to keep KB centered */}
        <span className="text-sm text-transparent font-medium" aria-hidden="true">
          © {currentYear}
        </span>
      </div>
    </footer>
  );
}
