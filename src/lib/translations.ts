export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      book: "Book Now",
    },
    hero: {
      eyebrow: "Facial · Los Angeles",
      titleParts: ["Your skin,", "at its", "best"] as const,
      sub: "Personalized rituals that combine science and sensoriality for healthy, luminous, and balanced skin.",
      cta: "Discover services →",
    },
    strip: {
      quote: "“Conscious care. Visible results. Genuine well-being.”",
    },
    services: {
      label: "Treatments",
      title: "Our treatments",
      viewAll: "View all services",
      viewMore: "Learn more",
    },
    about: {
      label: "Our story",
      title: "A different perspective on skincare",
      p1: "Lumiere Wellness Center was born from the conviction that every skin tells its own story. We don't believe in generic routines or quick fixes — we believe in taking the time to listen, analyze, and design protocols truly tailored to each person.",
      p2: "We work with high-efficacy active ingredients, cutting-edge technologies, and above all, with the hands and attention you deserve. Because true luxury is feeling good in your own skin.",
      cta: "Explore treatments",
    },
    ritual: {
      label: "The process",
      title: "What does a session look like?",
      sub: "Every visit is designed so you feel accompanied from the very first moment.",
      steps: [
        {
          num: "Step 01",
          name: "Diagnosis",
          desc: "We analyze your skin, your current routine, and your goals to design the ideal protocol.",
        },
        {
          num: "Step 02",
          name: "Treatment",
          desc: "We apply the selected techniques and actives with the time and precision each step requires.",
        },
        {
          num: "Step 03",
          name: "Personalized guidance",
          desc: "We advise you on how to maintain results at home with a routine designed specifically for you.",
        },
      ] as const,
    },
    gallery: {
      label: "Gallery",
      title: "Moments",
    },
    cta: {
      label: "Bookings",
      title: "Book your ritual",
      sub: "Take the time you deserve. Message us and together we’ll find the perfect slot for you.",
      button: "Message us on WhatsApp",
    },
    footer: {
      copy: "Lumiere Wellness Center. All rights reserved.",
    },
    catalog: {
      label: "Treatment menu",
      title: "Our services",
      sub: "Each treatment is designed with high-efficacy protocols, adapted to your skin type and goals.",
      filterAll: "All",
      consult: "Inquire",
      ctaTitle: "Not sure which treatment to choose?",
      ctaSub: "Message us and we’ll advise you — no strings attached — to find the ideal protocol for your skin.",
      ctaButton: "Ask on WhatsApp",
      empty: {
        icon: "🔍",
        title: "No results",
        text: "No services in this category yet.",
      },
      error: {
        icon: "⚠️",
        title: "Error loading services",
        text: "Could not connect to the server. Please try again later.",
      },
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotras",
      contact: "Contacto",
      book: "Reservar",
    },
    hero: {
      eyebrow: "Facial · Los Angeles",
      titleParts: ["Tu piel,", "en su", "mejor versión"] as const,
      sub: "Rituales personalizados que combinan ciencia y sensorialidad para una piel saludable, luminosa y en equilibrio.",
      cta: "Descubrir servicios →",
    },
    strip: {
      quote: "“Cuidado consciente. Resultados visibles. Bienestar genuino.”",
    },
    services: {
      label: "Tratamientos",
      title: "Nuestros tratamientos",
      viewAll: "Ver todos los servicios",
      viewMore: "Ver más",
    },
    about: {
      label: "Nuestra historia",
      title: "Una mirada diferente sobre el cuidado de la piel",
      p1: "Lumiere Wellness Center nació de la convicción de que cada piel cuenta su propia historia. No creemos en rutinas genéricas ni en soluciones express: creemos en el tiempo que se dedica a escuchar, analizar y diseñar protocolos realmente adaptados a cada persona.",
      p2: "Trabajamos con ingredientes activos de alta eficacia, tecnologías de última generación y, sobre todo, con las manos y la atención que merecés. Porque el verdadero lujo es sentirte bien en tu propia piel.",
      cta: "Conocer los tratamientos",
    },
    ritual: {
      label: "El proceso",
      title: "¿Cómo es una sesión?",
      sub: "Cada visita está diseñada para que te sientas acompañada desde el primer momento.",
      steps: [
        {
          num: "Paso 01",
          name: "Diagnóstico",
          desc: "Analizamos tu piel, tu rutina actual y tus objetivos para diseñar el protocolo ideal.",
        },
        {
          num: "Paso 02",
          name: "Tratamiento",
          desc: "Aplicamos las técnicas y activos seleccionados con el tiempo y la precisión que cada paso requiere.",
        },
        {
          num: "Paso 03",
          name: "Pautas personalizadas",
          desc: "Te asesoramos sobre cómo cuidar los resultados en casa con una rutina pensada para vos.",
        },
      ] as const,
    },
    gallery: {
      label: "Galería",
      title: "Momentos",
    },
    cta: {
      label: "Reservas",
      title: "Reservá tu ritual",
      sub: "Tomáte el tiempo que merecés. Escribínos y encontramos juntas el turno perfecto para vos.",
      button: "Escribinos por WhatsApp",
    },
    footer: {
      copy: "Lumiere Wellness Center. Todos los derechos reservados.",
    },
    catalog: {
      label: "Menú de tratamientos",
      title: "Nuestros servicios",
      sub: "Cada tratamiento está diseñado con protocolos de alta eficacia, adaptados a tu tipo de piel y objetivos.",
      filterAll: "Todos",
      consult: "Consultar",
      ctaTitle: "¿Tenés dudas sobre qué tratamiento elegir?",
      ctaSub: "Escribínos y te asesoramos sin compromiso para encontrar el protocolo ideal para tu piel.",
      ctaButton: "Consultar por WhatsApp",
      empty: {
        icon: "🔍",
        title: "Sin resultados",
        text: "No hay servicios en esta categoría todavía.",
      },
      error: {
        icon: "⚠️",
        title: "Error al cargar servicios",
        text: "No se pudo conectar con el servidor. Intentá más tarde.",
      },
    },
  },
} as const;
