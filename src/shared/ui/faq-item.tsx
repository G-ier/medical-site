"use client"

import { useState } from "react"
import { cn } from "@/shared/lib/utils"

// FAQItem Props Interface
export interface FAQItemProps {
  question: string
  answer: string
  isOpenByDefault?: boolean
  className?: string
}

// FAQItem Component (Molecule)
export function FAQItem({
  question,
  answer,
  isOpenByDefault = false,
  className
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault)
  const answerId = `faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className={cn("border-b border-gray-200", className)}>
      <button
        onClick={toggleOpen}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm min-h-[44px]"
        aria-expanded={isOpen}
        aria-controls={answerId}
        aria-label={`Toggle answer for: ${question}`}
      >
        <span className="text-lg font-medium text-gray-900 pr-8">
          {question}
        </span>
        
        {/* Chevron Icon */}
        <svg
          className={cn(
            "w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Answer Content */}
      <div
        id={answerId}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
        aria-hidden={!isOpen}
      >
        <div className="text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

// FAQ Item Variants (if needed for styling variations)
export const faqItemVariants = {
  default: "border-b border-gray-200",
  compact: "border-b border-gray-100 py-4",
  spacious: "border-b border-gray-200 py-8"
} 