import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Coffee,
  DollarSign,
  MessageCircle,
  ExternalLink,
  Briefcase,
  User,
  Phone,
  Heart,
} from "lucide-react";

const contacts = [
  // Primary Contact Methods
  {
    name: "Email",
    href: "mailto:mustaphabouddahr347@gmail.com",
    icon: Mail,
    description: "Best for detailed discussions",
    isPrimary: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/212600123456",
    icon: MessageCircle,
    description: "Quick messages & calls",
    isPrimary: true,
  },

  // Social Platforms
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mustapha-bouddahr-830787338/",
    icon: Linkedin,
    description: "Professional networking",
  },
  {
    name: "GitHub",
    href: "https://github.com/mustaphabouddahr",
    icon: Github,
    description: "Code repositories & projects",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mustapha_bouddahr",
    icon: Instagram,
    description: "Behind the scenes",
  },

  // Freelance Platforms
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/mustaphabouddah",
    icon: Briefcase,
    description: "Quick gigs & services",
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~01f52f001fa1b99257?mp_source=share",
    icon: User,
    description: "Long-term projects",
  },
  {
    name: "Freelancer",
    href: "https://www.freelancer.com/u/mustaphab98?frm=mustaphab98&sb=t",
    icon: Briefcase,
    description: "Competitive bidding",
  },

  // Support & Links
  {
    name: "Ko‑fi",
    href: "https://ko-fi.com/mustaphabouddahr",
    icon: Coffee,
    description: "Buy me a coffee",
  },
  {
    name: "PayPal",
    href: "https://www.paypal.me/mustaphabouddahr",
    icon: DollarSign,
    description: "Direct donations",
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/mustaphabouddahr",
    icon: ExternalLink,
    description: "All links in one place",
  },
];

const ContactCard = ({ contact, className = "" }) => {
  const Icon = contact.icon;

  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 bg-card text-foreground rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            contact.isPrimary
              ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">
            {contact.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {contact.description}
          </p>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100" />
      </div>
    </a>
  );
};

export const ContactSection = () => {
  const primaryContacts = contacts.filter((contact) => contact.isPrimary);
  const socialContacts = contacts.filter((contact) =>
    ["LinkedIn", "GitHub", "Instagram"].includes(contact.name),
  );
  const freelanceContacts = contacts.filter((contact) =>
    ["Fiverr", "Upwork", "Freelancer"].includes(contact.name),
  );
  const supportContacts = contacts.filter((contact) =>
    ["Ko‑fi", "PayPal", "Linktree"].includes(contact.name),
  );

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-background text-foreground relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Choose the best way to reach out
            and let's start building something amazing together.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Get In Touch</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {primaryContacts.map((contact) => (
              <ContactCard
                key={contact.name}
                contact={contact}
                className="border-2 border-primary/20 bg-primary/5"
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                <Heart className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Follow Me</h3>
            </div>
            <div className="space-y-4">
              {socialContacts.map((contact) => (
                <ContactCard key={contact.name} contact={contact} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                <Briefcase className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Hire Me</h3>
            </div>
            <div className="space-y-4">
              {freelanceContacts.map((contact) => (
                <ContactCard key={contact.name} contact={contact} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mr-3">
                <Coffee className="w-4 h-4 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold">Support</h3>
            </div>
            <div className="space-y-4">
              {supportContacts.map((contact) => (
                <ContactCard key={contact.name} contact={contact} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm passionate about creating exceptional digital experiences.
                Whether you need a website, app, or custom solution, let's
                discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="mailto:mustaphabouddahr347@gmail.com"
                target="_blank"
                className="flex items-center justify-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />

                <span>Send Email</span>
              </a>
              <a
                href="https://wa.me/212600123456"
                target="_blank"
                className="flex items-center justify-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
