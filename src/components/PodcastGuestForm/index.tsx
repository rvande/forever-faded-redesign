"use client";

import { useState } from "react";

export default function PodcastGuestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Podcast Guest Application");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nAbout Me / What I'd Like to Discuss:\n${message}`
    );
    const a = document.createElement("a");
    a.href = `mailto:tim.retic@retici.com?subject=${subject}&body=${body}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div data-reveal>
          <p className="font-subheading text-xs tracking-widest uppercase text-gold mb-3">
            Be a Guest
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-black leading-none mb-6">
            Would You Like To Be<br />A Guest On Our Podcast?
          </h2>
          <div className="h-px bg-gold w-12 mb-10" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="guest-name" className="font-subheading text-xs tracking-widest uppercase text-black/60">
                  Name
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-2 border-black/20 bg-white px-4 py-3 font-body text-base text-black placeholder:text-black/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="guest-email" className="font-subheading text-xs tracking-widest uppercase text-black/60">
                  Email
                </label>
                <input
                  id="guest-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-black/20 bg-white px-4 py-3 font-body text-base text-black placeholder:text-black/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="guest-message" className="font-subheading text-xs tracking-widest uppercase text-black/60">
                Tell Us About Yourself &amp; What You&apos;d Like to Discuss
              </label>
              <textarea
                id="guest-message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-2 border-black/20 bg-white px-4 py-3 font-body text-base text-black placeholder:text-black/30 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Share your background, story, and the topics you'd like to cover..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-10 py-4 shadow-[4px_4px_0px_0px_#000000] hover:bg-gold/90 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
