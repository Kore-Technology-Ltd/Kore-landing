import { memo } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = memo(function FAQItem({
  question,
  answer,
  isOpen,
  onToggle
}: FAQItemProps) {
  return (
    <div
      className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
      role="listitem"
    >
      <button
        className="faq__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq__question">{question}</span>
        <div
          className={`faq__arrow-container ${isOpen ? 'faq__arrow-container--open' : ''}`}
        >
          <svg
            className="faq__arrow"
            viewBox="0 0 15.416 9.122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.708 9.122L15.416 1.416 14.002 0 7.708 6.294 1.416 0 0 1.416 7.708 9.122Z"
              fill="#d3a014"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </button>
      {isOpen && <div className="faq__answer">{answer}</div>}
    </div>
  )
})

export default FAQItem
