import CareersForm from "@/components/CareersForm";

export const metadata = {
  title: "Careers | Forever Faded Barber Shop",
  description:
    "Join the Forever Faded team — we're looking for talented barbers and professionals in Waukesha and Oconomowoc, WI.",
};

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-16 lg:py-24 text-center">
        <div className="px-6" data-reveal>
          <h1 className="font-heading leading-none mb-4">
            <span className="block text-6xl sm:text-7xl lg:text-9xl text-white">Join</span>
            <span className="block text-6xl sm:text-7xl lg:text-9xl text-gold">Our Team</span>
          </h1>
          <p className="font-subheading text-sm sm:text-base text-white/70 tracking-widest uppercase max-w-xl mx-auto">
            We&apos;re looking for talented individuals to join Forever Faded Barbershop
          </p>
        </div>
      </section>

      <div className="h-px bg-gold" />

      <CareersForm />
    </main>
  );
}
