import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Users,
  Briefcase,
  BarChart3,
  Shield,
  MessageSquare,
  Zap,
  CheckCircle,
  ArrowRight,
  Building2,
  Hammer,
  HardHat,
  Truck,
  Wrench,
  Megaphone,
} from 'lucide-react';

export default function Index() {
  const stakeholders = [
    { icon: Building2, label: 'General Contractors', desc: 'Manage projects & teams' },
    { icon: Hammer, label: 'Subcontractors', desc: 'Find & bid on work' },
    { icon: HardHat, label: 'Site Supervisors', desc: 'Real-time coordination' },
    { icon: Truck, label: 'Suppliers', desc: 'Connect with buyers' },
    { icon: Wrench, label: 'Equipment Rentals', desc: 'Optimize availability' },
    { icon: Megaphone, label: 'Architects/Engineers', desc: 'Design collaboration' },
  ];

  const features = [
    {
      icon: Users,
      title: 'Unified Network',
      desc: 'Connect all construction stakeholders in one platform',
    },
    {
      icon: MessageSquare,
      title: 'Real-time Communication',
      desc: 'Instant messaging, notifications, and updates',
    },
    {
      icon: BarChart3,
      title: 'Project Analytics',
      desc: 'Track progress, costs, and timelines at a glance',
    },
    {
      icon: Shield,
      title: 'Document Management',
      desc: 'Secure storage and version control for all files',
    },
    {
      icon: Briefcase,
      title: 'Job Marketplace',
      desc: 'Post projects and bid on opportunities',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      desc: 'Streamline approvals, invoicing, and scheduling',
    },
  ];

  const benefits = [
    'Reduce project delays by 40%',
    'Cut communication overhead by 60%',
    'Improve team collaboration instantly',
    'Eliminate information silos',
    'Increase transparency across teams',
    'Boost project profitability',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">BuildConnect</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#stakeholders" className="text-muted-foreground hover:text-foreground transition">
              Stakeholders
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition">
              Benefits
            </a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Connect Every Voice in Construction
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Bring general contractors, subcontractors, suppliers, and teams together on one platform. Eliminate silos, accelerate projects, and build better outcomes.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl aspect-video flex items-center justify-center">
          <div className="text-center">
            <Building2 className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600">Construction Platform Dashboard</p>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="stakeholders" className="bg-slate-50 border-t border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Built for Everyone in Construction
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From project owners to site teams, every stakeholder finds value on BuildConnect
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {stakeholders.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="p-6 hover:shadow-lg transition">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Powerful Features
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need to manage construction projects and teams
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-slate-50 border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-foreground mb-12">
              Why Construction Teams Choose BuildConnect
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Connect Your Construction Ecosystem?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of construction teams already using BuildConnect to deliver projects faster and smarter.
          </p>
          <Button size="lg" className="gap-2">
            Start Your Free Trial Today
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Docs</a></li>
                <li><a href="#" className="hover:text-foreground transition">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2024 BuildConnect. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
