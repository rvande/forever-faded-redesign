"use client";

import { useState } from "react";

export default function CareersForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [why, setWhy] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Job Application — Forever Faded Barbershop");
    const body = encodeURIComponent(
      `Full Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position || "Not specified"}
Years of Experience: ${experience || "Not specified"}

Why I Want to Work at Forever Faded:
${why}

---
REMINDER: Please attach your resume (PDF preferred) to this email before sending.`
    );
    const a = document.createElement("a");
    a.href = `mailto:tim.retic@retici.com?subject=${subject}&body=${body}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const inputClass =
    "border-2 border-black/20 bg-white px-4 py-3 font-body text-base text-black placeholder:text-black/30 focus:outline-none focus:border-gold transition-colors w-full";
  const labelClass =
    "font-subheading text-xs tracking-widest uppercase text-black/60";

  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div data-reveal>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="c-name" className={labelClass}>
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Your full name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-email" className={labelClass}>
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="Your email address"
                />
              </div>
            </div>

            {/* Phone + Position */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="c-phone" className={labelClass}>
                  Phone Number <span className="text-gold">*</span>
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                  placeholder="Your phone number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="c-position" className={labelClass}>
                  Position
                </label>
                <input
                  id="c-position"
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className={inputClass}
                  placeholder="Position you're applying for"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-2">
              <label htmlFor="c-experience" className={labelClass}>
                Experience
              </label>
              <input
                id="c-experience"
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className={inputClass}
                placeholder="Years of experience"
              />
            </div>

            {/* Why */}
            <div className="flex flex-col gap-2">
              <label htmlFor="c-why" className={labelClass}>
                Why do you want to work at Forever Faded? <span className="text-gold">*</span>
              </label>
              <textarea
                id="c-why"
                required
                rows={6}
                value={why}
                onChange={(e) => setWhy(e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder="Tell us why you want to join our team"
              />
            </div>

            {/* Important notice */}
            <div className="border-2 border-gold bg-gold/5 px-6 py-5">
              <p className="font-subheading text-sm tracking-widest uppercase text-black mb-2">
                Important Notice
              </p>
              <p className="font-body text-sm text-black/75 leading-relaxed">
                You <strong>MUST</strong> attach your resume (PDF format preferred) to the email
                that will open after submitting this form.
              </p>
              <p className="font-body text-sm text-black/60 mt-1">
                Applications without resumes will not be considered.
              </p>
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
