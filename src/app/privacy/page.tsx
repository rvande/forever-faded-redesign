export const metadata = {
  title: "Privacy Policy | Forever Faded Barber Shop",
  description: "Privacy policy for Forever Faded Barbershop — how we collect, use, and protect your personal data.",
};

const SECTIONS = [
  {
    number: "1",
    title: "Introduction",
    content: (
      <p>
        Welcome to Forever Faded Barbershop (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your
        privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look
        after your personal data when you visit our website and tell you about your privacy rights and how the law
        protects you.
      </p>
    ),
  },
  {
    number: "2",
    title: "Information We Collect",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-subheading text-sm tracking-widest uppercase text-black mb-2">2.1 Personal Information</p>
          <p className="mb-3">We may collect and process the following data:</p>
          <ul className="space-y-1.5 pl-4">
            {[
              { label: "Identity Data", detail: "including name and title" },
              { label: "Contact Data", detail: "including email address and phone number" },
              { label: "Technical Data", detail: "including IP address, browser type, time zone setting, operating system, and device information" },
              { label: "Usage Data", detail: "information about how you use our website and services" },
            ].map(({ label, detail }) => (
              <li key={label} className="flex gap-2">
                <span className="text-gold mt-1 shrink-0">—</span>
                <span><strong>{label}:</strong> {detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-subheading text-sm tracking-widest uppercase text-black mb-2">2.2 Information Collection Methods</p>
          <p className="mb-3">We collect information through:</p>
          <ul className="space-y-1.5 pl-4">
            {[
              { label: "Direct interactions", detail: "information you provide when booking appointments, filling out forms, or corresponding with us" },
              { label: "Automated technologies", detail: "as you navigate our website, cookies and other tracking technologies may automatically collect Technical Data" },
            ].map(({ label, detail }) => (
              <li key={label} className="flex gap-2">
                <span className="text-gold mt-1 shrink-0">—</span>
                <span><strong>{label}:</strong> {detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: "3",
    title: "How We Use Your Information",
    content: (
      <div>
        <p className="mb-3">We will only use your personal data for the purpose for which we collected it, including:</p>
        <ul className="space-y-1.5 pl-4">
          {[
            "Providing barbering services requested by you",
            "Managing our relationship with you",
            "Improving our website and services",
            "Sending relevant marketing communications if you have opted in",
            "Complying with legal obligations",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gold mt-1 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "4",
    title: "Data Security",
    content: (
      <p>
        We have implemented appropriate security measures to prevent your personal data from being accidentally lost,
        used, or accessed in an unauthorized way. We limit access to your personal data to employees and third parties
        who have a business need to know.
      </p>
    ),
  },
  {
    number: "5",
    title: "Data Retention",
    content: (
      <p>
        We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for,
        including for the purposes of satisfying any legal, accounting, or reporting requirements.
      </p>
    ),
  },
  {
    number: "6",
    title: "Your Legal Rights",
    content: (
      <div>
        <p className="mb-3">
          Under certain circumstances, you have rights under data protection laws in relation to your personal data,
          including:
        </p>
        <ul className="space-y-1.5 pl-4">
          {[
            "Request access to your personal data",
            "Request correction of your personal data",
            "Request erasure of your personal data",
            "Object to processing of your personal data",
            "Request restriction of processing your personal data",
            "Request transfer of your personal data",
            "Right to withdraw consent",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gold mt-1 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "7",
    title: "Cookies",
    content: (
      <p>
        Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience
        and allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert
        you when websites set or access cookies.
      </p>
    ),
  },
  {
    number: "8",
    title: "Third-Party Links",
    content: (
      <p>
        Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or
        enabling those connections may allow third parties to collect or share data about you. We do not control these
        third-party websites and are not responsible for their privacy statements.
      </p>
    ),
  },
  {
    number: "9",
    title: "Changes to the Privacy Policy",
    content: (
      <p>
        We may update our privacy policy from time to time. We will notify you of any changes by posting the new
        privacy policy on this page. We encourage you to review this policy periodically.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-black py-16 lg:py-24 text-center">
        <div className="px-6" data-reveal>
          <h1 className="font-heading leading-none mb-4">
            <span className="block text-6xl sm:text-7xl lg:text-9xl text-white">Privacy</span>
            <span className="block text-6xl sm:text-7xl lg:text-9xl text-gold">Policy</span>
          </h1>
          <p className="font-subheading text-xs tracking-widest uppercase text-white/50">
            Last Updated: April 28, 2025
          </p>
        </div>
      </section>

      <div className="h-px bg-gold" />

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.number} data-reveal>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-heading text-3xl text-gold leading-none">{section.number}.</span>
                  <h2 className="font-subheading text-lg tracking-widest uppercase text-black">
                    {section.title}
                  </h2>
                </div>
                <div className="h-px bg-gold/30 mb-5" />
                <div className="font-body text-base text-black/75 leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
