import ProviderParallax from "@/components/ParallaxProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ProviderParallax>{children}</ProviderParallax>
    </section>
  );
}
