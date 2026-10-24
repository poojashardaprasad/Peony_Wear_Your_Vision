import React, { useState } from 'react';
import { IconRenderer } from '../common/IconRenderer';

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  key?: string | number;
}

export const FAQItem = ({ id, question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id={`faq-item-${id}`}
      className="border-b border-neutral-100 py-6 last:border-b-0"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <h3 className="text-sm sm:text-base font-semibold text-neutral-900 tracking-wide transition-colors duration-300 group-hover:text-neutral-600">
          {question}
        </h3>
        <span className={`w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-300 transition-all duration-300 ${
          isOpen ? 'bg-neutral-900 border-neutral-900 text-white rotate-180' : 'bg-transparent'
        }`}>
          <IconRenderer name="chevron-down" size={14} />
        </span>
      </button>

      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-item-${id}`}
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans pr-6 font-normal">
          {answer}
        </p>
      </div>
    </div>
  );
};
