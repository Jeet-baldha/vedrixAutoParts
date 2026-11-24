"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BatteryCharging,
  Boxes,
  ChevronDown,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  PlugZap,
  Settings2,
  ShoppingBag,
  Store,
  Truck,
  Users,
  X,
  Zap,
} from "lucide-react";

const primaryPhone = "917048437976";
const whatsapp = (message: string) => `https://wa.me/${primaryPhone}?text=${encodeURIComponent(message)}`;

const evProducts = [
  { name: "EV Conversion Kits", detail: "Component packages for practical electric vehicle conversion requirements.", icon: Settings2 },
  { name: "Lithium Batteries", detail: "Battery solutions for electric mobility and conversion applications.", icon: BatteryCharging },
  { name: "Electric Hub Motors", detail: "Hub-drive motors for two-wheelers and mobility builds.", icon: Gauge },
  { name: "EV Chargers", detail: "Charging products matched to electric mobility requirements.", icon: PlugZap },
  { name: "Motor Controllers", detail: "Control systems for smooth and efficient power delivery.", icon: Zap },
  { name: "EV Accessories", detail: "Electrical, fitment and supporting EV components.", icon: PackageCheck },
];

const autoProducts = [
  { name: "Suspension Parts", detail: "Struts, springs, mounts and suspension components.", image: "/images/product-suspension-v2.webp" },
  { name: "Steering Parts", detail: "Steering racks, tie rods, boots and linkage parts.", image: "/images/product-steering-v2.webp" },
  { name: "Ignition Parts", detail: "Spark plugs and ignition coils.", image: "/images/product-ignition-v2.webp" },
  { name: "Automotive Filters", detail: "Air, oil and fuel filtration products.", image: "/images/product-filters-v2.webp" },
  { name: "Automotive Lights", detail: "Headlamps, tail lamps and indicators.", image: "/images/product-lights-v2.webp" },
];

const activities = [
  ["EV Products Manufacturing", Factory],
  ["EV Components Wholesale", Boxes],
  ["Automobile Spare Parts", Settings2],
  ["Retail Sales", ShoppingBag],
  ["Dealer & Distributor Network", Users],
  ["Bulk Supply", Truck],
] as const;

const services = [
  ["Wholesale Supply", "Product supply for retailers, workshops and automotive businesses."],
  ["Retail Sales", "Direct assistance for individual product requirements."],
  ["Dealer Registration", "Business enquiries for local market representation."],
  ["Distributor Enquiries", "Regional distribution discussions for qualified partners."],
  ["Bulk Orders", "Quantity planning, product availability and business pricing."],
  ["Business Partnerships", "Long-term sourcing relationships across mobility categories."],
];

const channels = [
  { name: "Retail Customers", text: "Direct support for individual automobile and EV product requirements.", icon: ShoppingBag },
  { name: "Workshops", text: "Product sourcing support for repair, maintenance and conversion work.", icon: Settings2 },
  { name: "Wholesalers", text: "Trade quantities, broad category access and responsive communication.", icon: Boxes },
  { name: "Dealers & Distributors", text: "Partnership enquiries for local and regional market development.", icon: Store },
];

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2a9.84 9.84 0 0 0-8.42 14.94L2.05 22l5.17-1.52A9.83 9.83 0 1 0 12.04 2Zm0 17.86a8.03 8.03 0 0 1-4.1-1.12l-.29-.17-3.07.9.82-2.99-.19-.31a8.02 8.02 0 1 1 6.83 3.69Zm4.4-6.01c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="header">
        <a className="brand" href="#top" aria-label="VEDRIX AUTO home">
          <Image src="/images/vedrix-logo.png" alt="VEDRIX AUTO PARTS" width={228} height={54} priority />
        </a>
        <nav id="mobile-navigation" className={menuOpen ? "nav open" : "nav"}>
          <a href="#product-desk" onClick={() => setMenuOpen(false)}>Product Desk</a>
          <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Enquire</a>
        </nav>
        <a className="header-action" href="tel:+917048437976">Call +91 7048437976</a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <Image src="/images/hero-balanced-v6.webp" alt="Electric vehicle with EV components and automobile spare parts" fill priority sizes="100vw" />
        <div className="hero-wash" />
        <div className="container hero-content">
          <p className="kicker">EV Components · Auto Spares · India Supply</p>
          <h1>Parts that power<br /><span>every drive.</span></h1>
          <p className="hero-copy">Reliable EV systems and automobile spare parts for retailers, workshops, wholesalers, dealers and distributors.</p>
          <div className="hero-actions">
            <a className="button primary" href="#product-desk">Browse Product Categories</a>
          </div>
        </div>
        <div className="hero-rail">
          <span>Powering the Future of Mobility</span>
          <div>EV Powertrain</div><div>Auto Spares</div><div>Wholesale &amp; Bulk</div>
        </div>
      </section>

      <section className="product-desk" id="product-desk">
        <div className="container">
          <div className="section-lead">
            <div><p className="kicker">Product Range</p><h2>Two systems.<br />One supply desk.</h2></div>
            <p>VEDRIX AUTO supplies automobile spare parts and electric mobility components through one direct enquiry channel.</p>
          </div>

          <article className="product-chapter auto-chapter">
            <div className="auto-chapter-head">
              <div><p className="chapter-label">Automobile Spare Parts</p><h3>Service and replacement categories.</h3></div>
              <a href={whatsapp("Hello VEDRIX AUTO, I need automobile spare parts. Please help with availability.")} target="_blank" rel="noopener noreferrer">Send Parts Requirement</a>
            </div>
            <div className="auto-product-rail">
              {autoProducts.map((product) => <article key={product.name}><div><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 78vw, 25vw" /></div><h3>{product.name}</h3><p>{product.detail}</p></article>)}
            </div>
          </article>

          <article className="product-chapter ev-chapter">
            <div className="chapter-copy">
              <p className="chapter-label">Electric Mobility</p>
              <h3>Conversion and powertrain components.</h3>
              <p>Core products for EV conversion, servicing and practical electric mobility applications.</p>
              <div className="chapter-list">
                {evProducts.map((product) => { const Icon = product.icon; return <div key={product.name}><Icon /><span>{product.name}</span></div>; })}
              </div>
              <a href={whatsapp("Hello VEDRIX AUTO, please share your EV product range and availability.")} target="_blank" rel="noopener noreferrer">Request EV Range &amp; Availability</a>
            </div>
            <div className="chapter-visual">
              <Image src="/images/ev-system.webp" alt="EV hub motor, battery and motor controller" fill sizes="(max-width: 900px) 100vw, 54vw" />
              <span>EV conversion system</span>
            </div>
          </article>
        </div>
      </section>

      <section className="sourcing-flow">
        <div className="container">
          <div className="flow-heading"><p className="kicker light">Sourcing Process</p><h2>From requirement to supply.</h2></div>
          <div className="flow-steps">
            <article><span>01</span><h3>Share the requirement</h3><p>Send the product name, vehicle or application details, required quantity and delivery location.</p></article>
            <article><span>02</span><h3>Confirm availability</h3><p>Our team reviews the category and responds with available options and business pricing.</p></article>
            <article><span>03</span><h3>Plan the supply</h3><p>Proceed with retail, wholesale, bulk or partnership requirements through direct coordination.</p></article>
          </div>
        </div>
      </section>

      <section className="company" id="company">
        <div className="company-image"><Image src="/images/warehouse-inventory-v2.webp" alt="Organised EV components and automobile spare parts" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="company-content">
          <p className="kicker">VEDRIX AUTO PARTS PVT. LTD.</p>
          <h2>Automobile supply meets electric mobility.</h2>
          <p>VEDRIX AUTO PARTS PVT. LTD. is an automobile and electric mobility business based in Rajkot, Gujarat, India.</p>
          <p>We focus on EV conversion kits, lithium batteries, hub motors, chargers, controllers, accessories and automobile spare parts.</p>
          <p>Our goal is to provide reliable products, competitive pricing and quality solutions to customers, retailers, wholesalers and distributors.</p>
          <div className="activity-strip">
            {activities.map(([name, Icon]) => <div key={name}><Icon /><span>{name}</span></div>)}
          </div>
        </div>
      </section>

      <section className="channels">
        <div className="container">
          <div className="section-lead compact"><div><p className="kicker">Who We Supply</p><h2>One range. Multiple business channels.</h2></div></div>
          <div className="channel-lanes">
            {channels.map((channel) => { const Icon = channel.icon; return <article key={channel.name}><Icon /><h3>{channel.name}</h3><p>{channel.text}</p><a href={whatsapp(`Hello VEDRIX AUTO, I am enquiring as a ${channel.name}.`)} target="_blank" rel="noopener noreferrer">Discuss requirements</a></article>; })}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container services-layout">
          <div className="services-title"><p className="kicker">Services</p><h2>Choose the enquiry that matches your business.</h2><p>Each enquiry goes directly to the VEDRIX AUTO team through WhatsApp.</p></div>
          <div className="service-accordion">
            {services.map(([name, detail], index) => (
              <details key={name} open={index === 0}>
                <summary><span>{name}</span><ChevronDown /></summary>
                <div><p>{detail}</p><a href={whatsapp(`Hello VEDRIX AUTO, I have an enquiry about ${name}.`)} target="_blank" rel="noopener noreferrer">Start {name} Enquiry</a></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="direction">
        <div className="container direction-grid">
          <article><small>Our Vision</small><h2>To become a trusted name in India&apos;s automobile and electric mobility industry.</h2><p>By providing quality products and innovative mobility solutions.</p></article>
          <article><small>Our Mission</small><h2>To deliver affordable, reliable and customer-focused products across India.</h2><p>Supporting customers and businesses with practical automobile and EV solutions.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <div className="contact-intro">
              <p className="kicker light">Business Enquiries</p>
              <h2>Tell us the part.<br />We&apos;ll discuss the supply.</h2>
              <p>Contact us directly for wholesale, dealership, distribution and bulk-order enquiries.</p>
            </div>
            <div className="contact-points">
              <a href="https://wa.me/917048437976" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /><span><small>Primary WhatsApp</small>+91 7048437976</span></a>
              <a href="tel:+917283889492"><Phone /><span><small>Phone</small>+91 7283889492</span></a>
              <a href="mailto:vedrixauto@gmail.com"><Mail /><span><small>Email</small>vedrixauto@gmail.com</span></a>
              <div><MapPin /><span><small>Location</small>Rajkot, Gujarat, India</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <a className="brand" href="#top"><Image src="/images/vedrix-logo.png" alt="VEDRIX AUTO PARTS" width={228} height={54} /></a>
          <p>Powering the Future of Mobility</p>
          <div><a href="#product-desk">Products</a><a href="#company">Company</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 VEDRIX AUTO PARTS PVT. LTD.</span><span>Rajkot, Gujarat, India</span></div>
      </footer>

      <a className="floating-wa" href={whatsapp("Hello VEDRIX AUTO, I have a product enquiry.")} target="_blank" rel="noopener noreferrer" aria-label="Chat with VEDRIX AUTO on WhatsApp"><WhatsAppIcon /></a>
    </main>
  );
}
