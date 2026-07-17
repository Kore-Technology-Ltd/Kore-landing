import React, { memo, useState, useCallback } from 'react'

const ARROW_SVG = (
  <svg
    width="15.416000366210938"
    height="9.121999740600586"
    viewBox="0 0 15.416000366210938 9.121999740600586"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    style={{
      left: '25.9%',
      top: '35.3%',
      right: '25.9%',
      bottom: '36.2%',
      width: '48.2%',
      height: '28.5%',
      position: 'absolute'
    }}
  >
    <path
      d="M7.708 9.122L15.416 1.416 14.002 0 7.708 6.294 1.416 0 0 1.416 7.708 9.122Z"
      style={{ fillRule: 'evenodd', fill: '#d3a014' }}
    />
  </svg>
)

interface FAQItemProps {
  question: string
  answer: string
}

/**
 * FAQItem — a pure React accordion card. No DOM manipulation, no script.js
 * involvement. The answer panel uses CSS max-height transition for smooth
 * open/close with zero layout thrashing. Memoized to avoid re-renders when
 * sibling items open/close.
 */
const FAQItem = memo(function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggle()
      }
    },
    [toggle]
  )

  return (
    <div
      className={`korre-faq-card${isOpen ? ' is-open' : ''}`}
      style={{
        borderWidth: '0.5px',
        borderStyle: 'solid',
        borderColor: isOpen ? '#3fa97e' : '#d3a014',
        borderRadius: '10px',
        backgroundColor: '#fff',
        width: '100%',
        position: 'relative',
        flexShrink: 0,
        boxShadow: isOpen ? '0 16px 32px rgba(0,0,0,0.1)' : undefined,
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
      }}
    >
      {/* Header / trigger */}
      <div
        className="korre-faq-header"
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        style={{
          position: 'relative',
          minHeight: '65px',
          cursor: 'pointer',
          userSelect: 'none',
          paddingRight: '68px'
        }}
      >
        <span
          className="text"
          style={{
            display: 'inline',
            textAlign: 'left',
            lineHeight: '20px',
            fontSize: '20px',
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontWeight: 400,
            fontStretch: '100%',
            color: '#252323',
            left: '32px',
            top: 'calc(-9.5px + 50%)',
            width: 'max-content',
            position: 'absolute'
          }}
        >
          {question}
        </span>
        <div
          style={{
            overflow: 'hidden',
            top: 'calc(-15.5px + 50%)',
            right: '32px',
            aspectRatio: '1',
            width: 'auto',
            height: '32px',
            position: 'absolute'
          }}
        >
          <div
            className="korre-faq-arrow"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            {ARROW_SVG}
          </div>
        </div>
      </div>

      {/* Answer panel — CSS max-height transition, no JS needed */}
      <div
        className="korre-faq-answer"
        role="region"
        aria-hidden={!isOpen}
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, padding 0.35s ease',
          padding: isOpen ? '0 20px 20px' : '0 20px'
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '16px',
            fontFamily: 'Outfit, system-ui, sans-serif',
            fontWeight: 400,
            color: '#4a4545',
            lineHeight: 1.6
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  )
})

export default FAQItem
