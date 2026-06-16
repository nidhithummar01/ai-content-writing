import { useState } from "react";

const templates = ["Blog Outline", "LinkedIn Post", "SEO Meta", "Cold Email", "Ad Copy", "Voiceover Script"];

const outputs = {
  "Blog Outline": "# AI Meeting Notes for Remote Product Teams\n\n1. Why meetings lose value after the call\n2. How AI captures decisions, owners, and follow-ups\n3. What a searchable meeting memory changes\n4. Security and consent considerations\n5. How to roll out meeting intelligence without annoying the team",
  "LinkedIn Post": "Your team does not need more meetings. It needs better memory.\n\nAI Meeting Notes turns calls into decisions, action items, owners, and searchable context. Less chasing. More shipping.\n\nThe best part: the meeting finally becomes an asset instead of a time sink.",
  "SEO Meta": "Title: AI Meeting Notes for Remote Product Teams\nDescription: Turn calls into summaries, decisions, action items, owners, and searchable team knowledge with an AI meeting assistant.",
  "Cold Email": "Subject: Cleaner meeting follow-ups for your product team\n\nHi {{first_name}},\n\nIf your team loses decisions after calls, AI Meeting Notes can turn every meeting into summaries, owners, next steps, and searchable context. Worth a quick demo?",
  "Ad Copy": "Stop losing decisions after meetings. AI Meeting Notes captures summaries, action items, owners, and searchable team knowledge automatically. Book a demo.",
  "Voiceover Script": "Meetings should not disappear when the call ends. With AI Meeting Notes, every conversation becomes a clear summary, action list, and searchable team memory.",
};

export default function App() {
  const [template, setTemplate] = useState("Blog Outline");
  const [topic, setTopic] = useState("AI meeting assistant for remote product teams");
  const [tone, setTone] = useState("Practical and confident");
  const [brief, setBrief] = useState("Audience: SaaS founders and product managers. Goal: explain the product and drive demo bookings.");
  const [output, setOutput] = useState("Select a template and generate prototype content.");

  function generateContent() {
    setOutput(`${outputs[template]}\n\nTopic: ${topic}\nTone: ${tone}\nBrief: ${brief}`);
  }

  return (
    <div className="wrap">
      <header>
        <div className="brand">Neoteq AI / Content Studio</div>
        <span className="tag">Prototype</span>
      </header>

      <section className="hero">
        <div>
          <span className="tag">Writing SaaS</span>
          <h1>AI Content & Writing Studio</h1>
        </div>
        <p className="lede">
          A white-label writing SaaS prototype for blogs, ads, emails, SEO, scripts, images,
          voiceovers, and multilingual content workflows.
        </p>
      </section>

      <section className="studio">
        <aside className="panel">
          <span className="tag">Templates</span>
          <div className="templates">
            {templates.map((item) => (
              <button
                className={`template ${template === item ? "active" : ""}`}
                key={item}
                onClick={() => setTemplate(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="metrics">
            <div className="metric"><strong>60+</strong> templates</div>
            <div className="metric"><strong>10+</strong> languages</div>
            <div className="metric"><strong>Stripe</strong> billing</div>
          </div>
        </aside>

        <main className="panel">
          <span className="tag">{template}</span>
          <h2>Create campaign-ready content.</h2>
          <input value={topic} onChange={(event) => setTopic(event.target.value)} />
          <select value={tone} onChange={(event) => setTone(event.target.value)}>
            <option>Practical and confident</option>
            <option>Founder-led and direct</option>
            <option>SEO-focused</option>
            <option>Enterprise professional</option>
          </select>
          <textarea value={brief} onChange={(event) => setBrief(event.target.value)} />
          <button className="generate" onClick={generateContent}>Generate Content</button>
          <div className="output">{output}</div>
        </main>
      </section>
    </div>
  );
}
