export default function Section({
  children,
  tint = false,
  className = "",
}: {
  children: React.ReactNode;
  tint?: boolean;
  className?: string;
}) {
  return (
    <section className={`w-full ${tint ? "bg-black/[0.02] dark:bg-white/[0.03]" : ""}`}>
      <div className={`mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-16 ${className}`}>{children}</div>
    </section>
  );
}
