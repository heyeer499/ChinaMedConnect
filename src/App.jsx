import React from 'react';
import * as Icons from 'lucide-react';
import { siteContent } from './siteContent';

const IconWrapper = ({ name, ...props }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent {...props} />;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { nav } = siteContent;

  const scrollToInquiry = () => {
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Icons.HeartPulse size={20} />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">
                {nav.logo.split(' ')[0]}<span className="text-blue-600">{nav.logo.split(' ')[1]}</span>
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {nav.links.map(link => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                {link.name}
              </a>
            ))}
            <button 
              onClick={scrollToInquiry}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-sm"
            >
              {nav.cta}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-b px-4 py-4 space-y-4">
          {nav.links.map(link => (
            <a key={link.name} href={link.href} className="block text-slate-600 font-medium">{link.name}</a>
          ))}
          <button 
            onClick={() => { scrollToInquiry(); setIsOpen(false); }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
          >
            {nav.cta}
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { hero } = siteContent;
  const scrollToAI = () => {
    document.getElementById('ai-hub')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:flex items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Icons.Sparkles size={14} /> Powered by AI Precision
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {hero.title} <br />
            <span className="text-blue-600">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToAI}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
            >
              {hero.ctaPrimary} <Icons.BrainCircuit size={22} />
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
              <Icons.PhoneCall size={20} /> {hero.ctaSecondary}
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-slate-500">
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <IconWrapper name={stat.icon} size={20} className={stat.color} />
                <span className="text-sm font-bold uppercase tracking-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] z-10">
            <img 
              src="https://sc01.alicdn.com/kf/H04f2113de49b410e9aa7ca5cd2551fac9.png" 
              alt="World-Class Healthcare" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
          {/* Floating AI Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl z-20 border border-slate-50 animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <Icons.Cpu size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">AI Matching</p>
                <p className="text-sm font-bold text-slate-900 mt-1">98% Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AIHub = () => {
  const { aiHub } = siteContent;
  const [analyzing, setAnalyzing] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setDone(true);
    }, 3000);
  };

  return (
    <section id="ai-hub" className="py-32 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-600 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">{aiHub.title}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium mb-16">{aiHub.subtitle}</p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {aiHub.analytics.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-indigo-400 text-3xl font-black mb-1">{item.value}</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 lg:p-16 mb-24">
          {!done ? (
            <form onSubmit={handleAnalyze} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiHub.steps.map(step => (
                  <div key={step.id} className="flex flex-col items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${analyzing && step.id === 2 ? 'bg-indigo-600 animate-pulse' : 'bg-white/10'} text-white border border-white/20`}>
                      <IconWrapper name={step.icon} size={20} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{step.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-10 border-2 border-dashed border-white/10 hover:border-indigo-500/50 transition-all group cursor-pointer">
                <Icons.UploadCloud size={48} className="text-indigo-500 mx-auto mb-4 group-hover:-translate-y-1 transition-transform" />
                <p className="text-white font-bold text-lg">Initialize Digital Health Intake</p>
                <p className="text-slate-500 text-sm mt-2">Upload medical records for cross-border analysis</p>
                <input type="file" className="hidden" />
              </div>

              <button 
                disabled={analyzing}
                className={`w-full ${analyzing ? 'bg-slate-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white py-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-3`}
              >
                {analyzing ? (
                  <> <Icons.Loader2 className="animate-spin" /> Running Proprietary Matching Algorithm...</>
                ) : (
                  <> Activate AI Precision Hub </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center animate-in zoom-in-95 duration-500">
               <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-emerald-500/50">
                 <Icons.ShieldCheck size={40} />
               </div>
               <h3 className="text-3xl font-black text-white mb-4">AI Matching Complete</h3>
               <p className="text-slate-400 text-lg mb-10">We have identified 3 high-precision specialist matches for your case. <br />Your <b>Digital Health Passport</b> has been generated.</p>
               <button onClick={() => setDone(false)} className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all">
                 Review Full Assessment
               </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {aiHub.features.map((feature, i) => (
            <div key={i} className="group">
              <div className="w-8 h-1 bg-indigo-600 mb-4 group-hover:w-full transition-all duration-500"></div>
              <h4 className="text-white font-black text-xl mb-3">{feature.title}</h4>
              <p className="text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  const { vision } = siteContent;
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">{vision.title}</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {vision.items.map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HospitalCard = ({ name, location, tags, desc }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <div className="h-48 relative">
      <img 
        src={`https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800&hospital=${encodeURIComponent(name)}`} 
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
        <div className="text-white">
          <div className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
            <Icons.Globe size={12} /> {location}
          </div>
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((s, i) => (
          <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wide">{s}</span>
        ))}
      </div>
      <p className="text-slate-500 text-sm mb-4">{desc}</p>
      <button className="text-blue-600 font-bold text-sm hover:underline">View Details</button>
    </div>
  </div>
);

const Services = () => {
  const { services } = siteContent;
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{services.title}</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">{services.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.items.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
            <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <IconWrapper name={service.icon} size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
            <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
              Learn More <Icons.ChevronRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Hospitals = () => {
  const { hospitals } = siteContent;
  return (
    <section id="hospitals" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{hospitals.title}</h2>
            <p className="text-slate-600 text-lg">{hospitals.subtitle}</p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Explore All <Icons.ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.list.map((hospital, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="h-48 bg-slate-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Icons.Globe size={12} /> {hospital.city}
                    </div>
                    <h3 className="text-lg font-bold">{hospital.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {hospital.tags.map((s, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wide">{s}</span>
                  ))}
                </div>
                <p className="text-slate-500 text-sm mb-4">{hospital.desc}</p>
                <button className="text-blue-600 font-bold text-sm hover:underline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { process } = siteContent;
  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{process.title}</h2>
            <p className="text-slate-400 text-lg mb-12">{process.subtitle}</p>
            <div className="space-y-10">
              {process.steps.map(step => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="aspect-square bg-blue-600/20 rounded-3xl border border-blue-500/30 flex items-center justify-center p-8 max-w-sm">
               <div className="text-center">
                 <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                   <Icons.Clock size={40} />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Fast-Track Access</h3>
                 <p className="text-slate-300">Skip the wait. We guarantee appointments within 48-72 hours.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InquiryForm = () => {
  const { inquiry } = siteContent;
  return (
    <section id="inquiry" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-2/5 p-12 text-white bg-blue-700">
          <h2 className="text-3xl font-bold mb-6">{inquiry.title}</h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">{inquiry.desc}</p>
          <div className="space-y-6">
            {inquiry.contact.map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <IconWrapper name={c.icon} size={20} />
                </div>
                <div>
                  <p className="text-sm text-blue-200">{c.label}</p>
                  <p className="font-bold">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-3/5 p-12 bg-white">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{siteContent.inquiry.fields.name}</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{siteContent.inquiry.fields.email}</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">{siteContent.inquiry.fields.message}</label>
              <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none h-32"></textarea>
            </div>
            <div className="sm:col-span-2">
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg">
                {inquiry.button}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white border-t py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
          <Icons.HeartPulse size={20} />
        </div>
        <span className="font-bold text-xl text-slate-800 tracking-tight">ChinaMedConnect</span>
      </div>
      <div className="text-slate-400 text-sm">
        © {new Date().getFullYear()} ChinaMed Connect. All rights reserved.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <Hero />
      <AIHub />
      <Services />
      <Hospitals />
      <HowItWorks />
      <InquiryForm />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;
