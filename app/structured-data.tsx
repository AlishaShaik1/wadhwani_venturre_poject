export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Innovexa Ring",
        "image": [
          "https://innovexa-ring-ai.vercel.app/innovexa_ring_dragonfly.png"
        ],
        "description": "Innovexa is not a device. Innovexa is your AI companion. It talks, thinks, acts — all from your ring. The ultimate wearable AI technology.",
        "brand": {
          "@type": "Brand",
          "name": "Innovexa"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://innovexa-ring-ai.vercel.app",
          "priceCurrency": "USD",
          "price": "60.00",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/PreOrder",
          "seller": {
            "@type": "Organization",
            "name": "Innovexa Technologies"
          }
        }
      },
      {
        "@type": "Organization",
        "name": "Innovexa",
        "url": "https://innovexa-ring-ai.vercel.app",
        "logo": "https://innovexa-ring-ai.vercel.app/innovexa_ring_dragonfly.png",
        "sameAs": [
          "https://twitter.com/InnovexaRing",
          "https://instagram.com/InnovexaRingAI"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Innovexa Ring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Innovexa Ring is an AI-powered smart ring that acts as your personal voice assistant. It allows you to speak to an advanced AI directly from your finger."
            }
          },
          {
            "@type": "Question",
            "name": "When does the Innovexa Ring ship?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Innovexa Ring is currently available for pre-order and will begin shipping in Q3 2026."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
