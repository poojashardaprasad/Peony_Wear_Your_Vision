export interface FAQData {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQData[] = [
  {
    id: "faq-what-is-peony",
    question: "What is Peony?",
    answer: "Peony is a premium fashion customization platform where you bring your clothing vision to life. Instead of buying off-the-rack garments, you design the exact outfit type, silhouette sketch, fabric category, and swatch, which we then stitch to your measurements."
  },
  {
    id: "faq-experience",
    question: "Can I design a Peony outfit without any fashion experience?",
    answer: "Absolutely! Our platform is curated precisely for this. We provide designer-curated silhouette sketches and fabric swatch suggestions so that your canvas is professional from your very first tap."
  },
  {
    id: "faq-tailoring",
    question: "How do I get my custom outfit made by tailors nearby?",
    answer: "After finalizing your custom design preview, you can share it directly with our dedicated team or local tailoring partner via WhatsApp with a single tap. They will instantly receive your full recipe to send you a stitching quotation and timeline."
  },
  {
    id: "faq-styles",
    question: "What custom outfit styles are available?",
    answer: "We offer a diverse set of silhouettes, including Maxi dresses, Mini dresses, Midi dresses, Short dresses, Co-ord sets, Jumpsuits, Skirts, Tops, Pants, and Shorts. Each has unique sketches and necklines to customize."
  },
  {
    id: "faq-preview",
    question: "Can I preview my custom outfit before placing an order?",
    answer: "Yes! At the end of the customization flow, our platform generates a high-definition, editorial magazine-style design preview showcasing how the selected sketch looks with your chosen fabric pattern and colour drape."
  },
];
