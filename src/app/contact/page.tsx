"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Studio Location",
    value: "Los Angeles, California",
    sub: "Exact address shared upon booking",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(213) 803-2393",
    sub: "Mon–Fri, 9am–6pm PT",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lumierewellnesscenter@gmail.com",
    sub: "We reply within 24 hours",
  },
  // { Not Ready Yet
  //   icon: Clock,
  //   label: "Studio Hours",
  //   value: "Mon–Sat: 10am – 7pm",
  //   sub: "Sun: 11am – 5pm",
  // },
];

const serviceOptions = [
  "Facial Escencial",
  "Plasma Acne Facial",
  "Hydrafacial",
  "Lift+Facial",
  "brightening facial",
  "Sensitive Skin Facial",
  "Microdermabrasion",
  "Microdermabrasion + Facial",
  "Chemical Peel Facial (Superficial)",
  "Luxury Spa Facial",
  "Lash lift",
  "Brow lamination",
  "Tint lash and brow",
  "Waxing",
  "WBody scrubs",
  "Back facil",
  "Dermaplaning",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with your form submission logic (Resend, Formspree, EmailJS, etc.)
    setSubmitted(true);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-studio-accent text-xs font-bold tracking-[0.25em] uppercase">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-studio-text mt-4 mb-5 text-balance">
            Book a Session
          </h1>
          <p className="text-studio-muted max-w-xl mx-auto leading-relaxed text-lg">
            Ready to experience Lumiere Wellness Center? Fill out the form below or use our
            online scheduler to secure your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, sub }) => (
              <Card
                key={label}
                className="hover:border-studio-accent/30 transition-colors"
              >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-studio-accent/10 border border-studio-accent/25 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-studio-accent" />
                  </div>
                  <div>
                    <p className="text-studio-subtle text-xs mb-0.5 uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="text-studio-text text-sm font-medium">
                      {value}
                    </p>
                    <p className="text-studio-subtle text-xs mt-0.5">{sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <CheckCircle
                      size={52}
                      className="text-studio-accent mb-5"
                    />
                    <h3 className="text-studio-text text-2xl font-bold mb-2">
                      Message Received!
                    </h3>
                    <p className="text-studio-muted max-w-xs leading-relaxed">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours to confirm your appointment details.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="mt-7 text-studio-accent text-sm hover:underline underline-offset-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-studio-muted text-xs font-semibold uppercase tracking-wide">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-studio-muted text-xs font-semibold uppercase tracking-wide">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-studio-muted text-xs font-semibold uppercase tracking-wide">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(310) 555-0000"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-studio-muted text-xs font-semibold uppercase tracking-wide">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-11 w-full rounded-md border border-studio-border bg-studio-surface px-4 py-2 text-sm text-studio-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-accent focus-visible:border-studio-accent"
                        >
                          <option value="" className="text-studio-subtle">
                            Select a service…
                          </option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-studio-muted text-xs font-semibold uppercase tracking-wide">
                        Message / Special Requests
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your skin type, concerns, or any questions you have…"
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send size={15} className="ml-2" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ── Calendly Booking Section ──────────────────────────────── */}
        {/* <div className="rounded-3xl bg-studio-surface border border-studio-border overflow-hidden">
          <div className="p-8 md:p-12 border-b border-studio-border">
            <div className="max-w-xl">
              <span className="text-studio-accent text-xs font-bold tracking-[0.25em] uppercase">
                Online Booking
              </span>
              <h2 className="text-3xl font-bold text-studio-text mt-3 mb-3">
                Schedule Instantly
              </h2>
              <p className="text-studio-muted leading-relaxed">
                Prefer to book directly? Use our real-time availability calendar
                below to find and reserve your perfect time slot — no
                back-and-forth needed.
              </p>
            </div>
          </div> */}

          {/* CALENDLY EMBED — paste your Calendly inline widget script/div here */}
          {/* <div className="min-h-[420px] flex items-center justify-center p-12 bg-studio-bg/30">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-studio-accent/10 border border-studio-accent/30 flex items-center justify-center mx-auto mb-5">
                <Clock size={28} className="text-studio-accent" />
              </div>
              <p className="text-studio-text font-semibold mb-2">
                Calendly Scheduler
              </p>
              <p className="text-studio-muted text-sm max-w-xs leading-relaxed">
                <div class="calendly-inline-widget" data-url="https://calendly.com/lumierewellnesscenter/30min" style="min-width:320px;height:700px;"></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                Paste your Calendly inline embed code here to enable real-time
                online booking.
              </p>
            </div>  */}
          {/* </div> */}
          {/* END CALENDLY EMBED */}
        {/* </div> */}
      </div>
    </div>
  );
}
