export const siteContent = {
  nav: {
    logo: "ChinaMed Connect",
    links: [
      { name: "Services", href: "#services" },
      { name: "Clinics", href: "#hospitals" },
      { name: "Process", href: "#process" }
    ],
    cta: "Inquire Now"
  },
  hero: {
    title: "World-Class Medical Care",
    titleAccent: "Across China",
    subtitle: "Access premier hospitals, leading specialists, and traditional healing. We bridge the gap for international patients seeking health excellence.",
    ctaPrimary: "Start Your Journey",
    ctaSecondary: "Speak with an Expert",
    stats: [
      { label: "JCI Accredited", icon: "ShieldCheck", color: "text-green-500" },
      { label: "24/7 Concierge", icon: "Globe", color: "text-blue-500" },
      { label: "English/Arabic/Korean", icon: "UserRoundCheck", color: "text-purple-500" }
    ]
  },
  services: {
    title: "Comprehensive Healthcare Solutions",
    subtitle: "Professional medical support designed for international patients from Southeast Asia, Korea, and the Middle East.",
    items: [
      {
        id: "checkup",
        title: "Premium Health Checkups",
        desc: "Comprehensive screenings using state-of-the-art diagnostic technology at China's top international clinics.",
        icon: "Stethoscope",
        color: "bg-blue-600"
      },
      {
        id: "specialist",
        title: "Disease Treatment",
        desc: "Access to world-class specialists in Oncology, Cardiology, and Orthopedics with priority scheduling.",
        icon: "HeartPulse",
        color: "bg-blue-600"
      },
      {
        id: "tcm",
        title: "TCM & Wellness",
        desc: "Holistic healing through Acupuncture, Herbal Medicine, and specialized wellness retreats.",
        icon: "Leaf",
        color: "bg-blue-600"
      },
      {
        id: "booking",
        title: "Hospital Booking",
        desc: "Priority appointments at JCI-accredited hospitals in Beijing, Shanghai, and Guangzhou.",
        icon: "Calendar",
        color: "bg-blue-600"
      },
      {
        id: "concierge",
        title: "Medical Concierge",
        desc: "Professional medical translation, airport pickup, and 1-on-1 accompaniment.",
        icon: "UserRoundCheck",
        color: "bg-blue-600"
      },
      {
        id: "logistics",
        title: "Visa & Logistics",
        desc: "End-to-end support for medical visas, accommodation, and local transportation.",
        icon: "Globe",
        color: "bg-blue-600"
      }
    ]
  },
  hospitals: {
    title: "Partner Institutions",
    subtitle: "We work exclusively with top-tier hospitals that meet international standards for safety and care.",
    list: [
      {
        name: "Peking Union Medical College",
        city: "Beijing",
        tags: ["Comprehensive", "Oncology", "Research"],
        desc: "The pinnacle of Chinese medicine, now with a dedicated international wing."
      },
      {
        name: "Jiahui Health International",
        city: "Shanghai",
        tags: ["International Staff", "Modern Design"],
        desc: "Collaborative care with Massachusetts General Hospital standards."
      },
      {
        name: "Guangzhou United Family",
        city: "Guangzhou",
        tags: ["Premium Care", "Pediatrics", "OB/GYN"],
        desc: "Leading international standard hospital in South China."
      }
    ]
  },
  process: {
    title: "Your Path to Better Health",
    subtitle: "Traveling for medical care can be daunting. We simplify the entire process into four easy steps.",
    steps: [
      {
        number: "1",
        title: "Initial Consultation",
        description: "Discuss your medical needs with our experts and receive a personalized treatment plan."
      },
      {
        number: "2",
        title: "Planning & Logistics",
        description: "We handle your hospital appointments, medical visa documentation, and travel arrangements."
      },
      {
        number: "3",
        title: "Treatment & Support",
        description: "Receive care at top-tier facilities with a dedicated medical concierge by your side."
      },
      {
        number: "4",
        title: "Recovery & Follow-up",
        description: "Post-treatment care coordination and long-term health monitoring."
      }
    ]
  },
  inquiry: {
    title: "Request a Consultation",
    desc: "Tell us about your medical needs, and our experts will get back to you with a free assessment within 24 hours.",
    contact: [
      { label: "24/7 Emergency Support", value: "+86 (10) 1234 5678", icon: "PhoneCall" },
      { label: "Email Inquiries", value: "hello@chinamedconnect.com", icon: "Globe" }
    ],
    fields: {
      name: "Full Name",
      email: "Email Address",
      service: "Service Needed",
      city: "Preferred City",
      message: "Medical History or Requirements"
    },
    button: "Submit Inquiry"
  }
};
