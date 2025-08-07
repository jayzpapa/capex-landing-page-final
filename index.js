import React from "react";
import Head from "next/head";

const features = [
  {
    title: "Genesis Verification",
    description: "Authenticate businesses via Genesis protocol ensuring compliance & legitimacy.",
  },
  {
    title: "AI Verification",
    description: "Instant AI-based verification for IDs, claims, documents, and KYC/AML checks.",
  },
  {
    title: "Smart Deal Marketplace",
    description: "Negotiate, tokenize, and seal deals via audited smart contracts in real time.",
  },
  {
    title: "Business Dashboard",
    description: "Track funding, traction, deals, and investor engagement — all in one place.",
  },
  {
    title: "Token System",
    description: "Create, issue and manage equity or contract-backed tokens with full compliance.",
  },
  {
    title: "Niche Profiles",
    description: "Explore vetted companies in micro-niches like MedTech AI or Agro SupplyChain.",
    extra: "Examples:\n- MedAI (Health AI)\n- GreenBuild Africa (Eco Construction)\n- EduSmart Labs (EdTech)"
  },
];

const monetization = [
  {
    title: "Genesis Onboarding Fees",
    value: "$200,000",
    explanation: "1000 verified businesses x $200 onboarding fee"
  },
  {
    title: "Deal Commission (3%)",
    value: "$300,000",
    explanation: "$10M in smart contract deals x 3%"
  },
  {
    title: "Pro Subscriptions",
    value: "$120,000",
    explanation: "2000 users x $5/month x 12 months"
  },
  {
    title: "Token Launch Fees",
    value: "$500,000",
    explanation: "5000 tokenized contracts x $100"
  },
  {
    title: "Sponsored Listings",
    value: "$80,000",
    explanation: "80 sponsors x $1,000"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Capex Global Exchange OS</title>
        <meta name="description" content="Demo landing page showing how Capex OS works and makes money." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-glow-blur z-0" />

        <h1 className="text-5xl font-extrabold mb-12 text-center drop-shadow-xl z-10">
          Capex Global Exchange OS
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl z-10">
          {features.map(({ title, description, extra }) => (
            <div
              key={title}
              className="bg-gray-900 bg-opacity-70 rounded-2xl p-6 shadow-2xl transform transition hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(99,102,241,0.7)] border border-indigo-500/20"
            >
              <h2 className="text-xl font-semibold text-indigo-400 mb-2">{title}</h2>
              <p className="text-gray-300 text-sm mb-2">{description}</p>
              {extra && <div className="mt-2 text-sm text-indigo-300 whitespace-pre-line">{extra}</div>}
            </div>
          ))}
        </section>

        <div className="mt-20 max-w-4xl w-full z-10">
          <h2 className="text-2xl font-bold text-center mb-4 text-indigo-300">Live Trade Demo</h2>
          <div className="bg-indigo-900 bg-opacity-30 rounded-xl p-6 shadow-inner text-center border border-indigo-600/20">
            <p className="text-sm text-indigo-200 animate-pulse">
              Fetching demo trade logs from the blockchain network...
            </p>
          </div>
        </div>

        <div className="mt-24 max-w-6xl w-full z-10">
          <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8">Monetization Model (Demo)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monetization.map(({ title, value, explanation }) => (
              <div
                key={title}
                className="bg-indigo-800 bg-opacity-20 border border-indigo-500/30 rounded-xl p-5 shadow hover:shadow-lg hover:scale-[1.02] transition"
              >
                <h3 className="text-xl font-semibold text-indigo-300 mb-2">{title}</h3>
                <p className="text-2xl text-white font-bold">{value}</p>
                <p className="text-sm text-indigo-200 mt-2">{explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
