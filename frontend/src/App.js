import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Zap, 
  Target, 
  Clock, 
  Shield, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { content } from './content';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  // Handle scroll for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = ['hero', 'problem', 'solution', 'features', 'impact', 'investors', 'demo'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll with offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      toast.error('Please fill in all required fields');
      return;
    }

    // MOCKED submission
    toast.success(content.demoForm.successMessage);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      message: ''
    });
  };

  const iconMap = {
    Users,
    Briefcase,
    TrendingUp,
    Zap,
    Target,
    Clock,
    Shield,
    BarChart3
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" />

      {/* Navigation */}
      <nav
        data-testid="site-nav"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          navScrolled
            ? 'nav-glass'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-foreground">
                {content.companyName}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'problem', label: 'Problem' },
                { id: 'solution', label: 'Solution' },
                { id: 'features', label: 'Features' },
                { id: 'investors', label: 'Investors' },
                { id: 'demo', label: 'Demo' }
              ].map((item) => (
                <button
                  key={item.id}
                  data-testid={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                data-testid="nav-book-demo-button"
                onClick={() => scrollToSection('demo')}
                className="btn-primary"
              >
                {content.hero.primaryCTA}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border/50">
              <div className="flex flex-col space-y-2">
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'problem', label: 'Problem' },
                  { id: 'solution', label: 'Solution' },
                  { id: 'features', label: 'Features' },
                  { id: 'investors', label: 'Investors' },
                  { id: 'demo', label: 'Demo' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection('demo')}
                  className="mt-2"
                >
                  {content.hero.primaryCTA}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        data-testid="hero-section"
        className="hero-section hero-glow pt-32 pb-20"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 badge-futuristic">
              <Sparkles className="w-3 h-3 mr-1" />
              {content.hero.badge}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 glow-text">
              {content.hero.headline}
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              {content.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                data-testid="hero-book-demo-button"
                size="lg"
                onClick={() => scrollToSection('demo')}
                className="btn-primary-futuristic w-full sm:w-auto"
              >
                {content.hero.primaryCTA}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                data-testid="hero-view-overview-button"
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('solution')}
                className="w-full sm:w-auto btn-secondary-glass"
              >
                {content.hero.secondaryCTA}
              </Button>
            </div>
          </motion.div>

          {/* Hero Cards (Product Mock) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Users, label: 'Sales Reps', count: '24/7 AI Coaching' },
              { icon: Briefcase, label: 'Managers', count: 'Training Automation' },
              { icon: TrendingUp, label: 'Leadership', count: 'Performance Visibility' }
            ].map((item, i) => (
              <Card key={i} className="glass-card holo-edge">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-300/10 text-cyan-300 mb-4 mx-auto icon-glow">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground text-center">{item.count}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <Separator className="separator-glow" />

      {/* Problem Section */}
      <section
        id="problem"
        data-testid="problem-section"
        className="section-spacing"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              {content.problem.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {content.problem.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.problem.painPoints.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{pain.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {pain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="stat-destructive">
                      {pain.stat}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="separator-glow" />

      {/* Solution Section */}
      <section
        id="solution"
        data-testid="solution-section"
        className="section-spacing"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              {content.solution.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {content.solution.subtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {content.solution.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-cyan-300/10 text-cyan-300 flex items-center justify-center text-xl font-bold icon-glow">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="separator-glow" />

      {/* Features by Persona Section */}
      <section
        id="features"
        data-testid="features-section"
        className="section-spacing"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              {content.features.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {content.features.subtitle}
            </p>
          </motion.div>

          <Tabs defaultValue="reps" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              {content.features.personas.map((persona) => {
                const Icon = iconMap[persona.icon];
                return (
                  <TabsTrigger
                    key={persona.id}
                    value={persona.id}
                    data-testid={`features-tab-${persona.id === 'reps' ? 'sales-reps' : persona.id}`}
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{persona.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {content.features.personas.map((persona) => (
              <TabsContent key={persona.id} value={persona.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {persona.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full glass-card holo-border">
                        <CardHeader>
                          <CardTitle className="text-base flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                            <span>{feature.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Separator className="separator-glow" />

      {/* Business Impact Section */}
      <section
        id="impact"
        data-testid="business-impact-section"
        className="section-spacing"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              {content.impact.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {content.impact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.impact.outcomes.map((outcome, index) => {
              const Icon = iconMap[outcome.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full metric-card">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-300/10 text-cyan-300 mb-4 icon-glow">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{outcome.metric}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {outcome.description}
                      </p>
                      <div className="stat-info">
                        {outcome.example}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="separator-glow" />

      {/* Investor Value Section */}
      <section
        id="investors"
        data-testid="investor-value-section"
        className="section-spacing"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              {content.investors.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              {content.investors.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Investment Thesis */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Propuesta de Valor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.investors.thesis.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Scalability */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {content.investors.scalability.map((item, index) => (
                <Card key={index} className="glass-card holo-border">
                  <CardHeader>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="separator-glow" />

      {/* Demo Form Section */}
      <section
        id="demo"
        data-testid="demo-section"
        className="section-spacing"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                {content.demoForm.title.replace('[Company Name]', content.companyName)}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                {content.demoForm.subtitle.replace('[Company Name]', content.companyName)}
              </p>
            </div>

            <Card className="glass-card holo-edge">
              <CardContent className="pt-6">
                <form data-testid="demo-request-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{content.demoForm.fields.name} *</Label>
                    <Input
                      id="name"
                      data-testid="demo-form-name-input"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="input-glass"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{content.demoForm.fields.email} *</Label>
                    <Input
                      id="email"
                      data-testid="demo-form-email-input"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="input-glass"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{content.demoForm.fields.company} *</Label>
                    <Input
                      id="company"
                      data-testid="demo-form-company-input"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="input-glass"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">{content.demoForm.fields.role}</Label>
                    <Input
                      id="role"
                      data-testid="demo-form-role-input"
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="input-glass"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{content.demoForm.fields.message}</Label>
                    <Textarea
                      id="message"
                      data-testid="demo-form-message-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="input-glass resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    data-testid="demo-form-submit-button"
                    className="w-full btn-primary-futuristic"
                    size="lg"
                  >
                    {content.demoForm.submitButton}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer data-testid="site-footer" className="border-t border-border/70 py-12 mt-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-muted-foreground">
              {content.footer.legal.replace('[Company Name]', content.companyName)}
            </div>
            <div className="flex items-center gap-6">
              {content.footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
