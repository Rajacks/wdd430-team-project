import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";

const features = [
  { title: "Find students", description: "Meet classmates who share your courses and curiosity.", icon: "users" as const, tone: "blue" },
  { title: "Create groups", description: "Build a study circle that keeps everyone moving.", icon: "group" as const, tone: "purple" },
  { title: "Connect", description: "Turn a quick hello into a lasting learning connection.", icon: "mail" as const, tone: "cyan" },
  { title: "Track progress", description: "Celebrate small wins and keep your goals in sight.", icon: "chart" as const, tone: "orange" },
];

export default function Home() {
  return <div className="landing-page">
    <Header />
    <main className="landing-main">
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-pill"><span>✦</span> Study <i>•</i> Connect <i>•</i> Succeed</div>
          <h1>StudyPal</h1>
          <h2>Good things happen when we learn together.</h2>
          <p>Find your study people, join groups for the courses you love, and build connections that make every class feel a little less solo.</p>
          <div className="hero-actions"><Link href="/login" className="button button-primary">Get started free <Icon name="arrow" size={16} /></Link><a href="#features" className="button button-outline"><span className="play-icon"><Icon name="play" size={14} /></span>Watch demo</a></div>
          <div className="hero-note"><span className="tiny-avatars"><Avatar initials="SJ" color="coral" size="sm" /><Avatar initials="DW" color="blue" size="sm" /><Avatar initials="GO" color="purple" size="sm" /></span><span>Find your people. Find your rhythm.</span></div>
        </div>
        <div className="hero-visual" aria-label="Illustration of students studying together">
          <div className="hero-blob" />
          <div className="hero-art-card"><div className="art-window"><span className="art-label">A good day to learn together</span><span className="art-sun" /><span className="student-illustration student-one"><i className="hair" /><i className="head" /><i className="body" /><i className="book" /></span><span className="student-illustration student-two"><i className="hair" /><i className="head" /><i className="body" /><i className="book" /></span><span className="student-illustration student-three"><i className="hair" /><i className="head" /><i className="body" /><i className="book" /></span><span className="study-table" /></div></div>
          <span className="art-sticker sticker-one"><Icon name="sparkles" size={21} /></span><span className="art-sticker sticker-two"><Icon name="book" size={21} /></span>
          <div className="floating-note note-top"><span className="note-check"><Icon name="check" size={16} /></span><span><strong>Better, together</strong><small>More minds, better ideas</small></span></div>
          <div className="floating-note note-bottom"><Avatar initials="EN" size="sm" /><span><strong>Your people are here</strong><small>Make learning a team effort</small></span></div>
        </div>
      </section>
      <section id="features" className="feature-section">
        <div className="feature-intro"><span className="eyebrow">YOUR STUDY JOURNEY, UPGRADED</span><h2>A little more connected</h2><p>All the good parts of studying together, in one happy place.</p></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><span className={`feature-icon ${feature.tone}`}><Icon name={feature.icon} size={21} /></span><span className="feature-arrow">↗</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div>
      </section>
      <section id="about" className="landing-about"><span className="eyebrow">MADE FOR THE WAY YOU LEARN</span><h2>Your next great study session starts here.</h2><p>Build your circle, share ideas, and make progress together.</p><Link className="button button-primary" href="/login">Get started <Icon name="arrow" size={16} /></Link></section>
    </main>
    <Footer />
  </div>;
}
