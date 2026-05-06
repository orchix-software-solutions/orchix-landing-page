const items = [
  "SaaS Product Development",
  "Custom Business Software",
  "Business Process Automation",
  "Mobile App Development",
  "MCP Server Development",
  "API & System Integration",
  "AI Agent Development",
  "RAG Pipeline Development",
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

export default function TrustMarquee() {
  return (
    <div
      className="relative z-[2] border-t border-b border-[rgba(255,255,255,0.08)] py-[1.2rem] overflow-hidden"
      style={{ animation: "fadeInUp 0.8s ease 0.9s both" }}
    >
      <div className="flex items-center gap-12 w-max animate-marquee-scroll">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-[0.6rem] whitespace-nowrap text-[0.8rem] text-[#8a8680] tracking-[0.04em] font-medium"
          >
            <span
              className="w-1 h-1 rounded-full bg-[#7c5bf5] shrink-0"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
