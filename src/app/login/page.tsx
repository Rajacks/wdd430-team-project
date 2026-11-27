import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return <div className="landing-page login-page">
    <Header />
    <main className="login-main">
      <section className="login-card card">
        <span className="login-mark">✦</span>
        <span className="eyebrow">WELCOME TO YOUR STUDY CIRCLE</span>
        <h1>Welcome back</h1>
        <p className="login-intro">Sign in with one of the two StudyPal demo accounts.</p>
        <LoginForm />
        <div className="login-demo-accounts">
          <strong>Demo accounts</strong>
          <p>Emmanuel Ndogo <span>·</span> Taeg Dayley</p>
          <p>Both passwords: <code>1</code></p>
        </div>
        <Link className="login-back-link" href="/">← Back to StudyPal</Link>
      </section>
    </main>
    <Footer />
  </div>;
}
