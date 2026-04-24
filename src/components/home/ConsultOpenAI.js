'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ConsultOpenAI() {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([])

  const handleSend = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((current) => [...current, { role: 'user', text: trimmed }])
    setInputValue('')

    setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          role: 'ai',
          text: `Here is a quick suggestion based on: "${trimmed}". Focus on a balanced plan and set daily targets to stay consistent.`,
        },
      ])
    }, 500)
  }

  return (
    <div className="bg-gradient-to-br from-white to-[#FEF8FB] rounded-lg p-6 border border-[#EBEBEB] flex flex-col h-[350px] relative w-full">
      <div className="flex items-center gap-2 text-[#1E293B] font-bold mb-auto">
        <Image
          src="/color-logo.svg"
          alt="ConsultOpen AI Logo"
          width={24}
          height={24}
        />
        ConsultOpen AI
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex flex-col gap-2 mb-4 max-h-[120px] overflow-y-auto pr-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.role === 'user'
                  ? 'self-end bg-white border border-[#EBEBEB] text-[#1E293B] text-[12px] px-3 py-2 rounded-[12px] shadow-sm max-w-[80%]'
                  : 'self-start bg-[#FDF2F8] border border-[#F8E4EC] text-[#1E293B] text-[12px] px-3 py-2 rounded-[12px] max-w-[80%]'
              }
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex gap-3 mb-4 overflow-x-auto scrollbar-hide -mx-6 px-6 pb-1">
          {[
            'What are the future benefits of choosing PCM in 11th?',
            'How to balance board exams and competitive prep?',
            'Which engineering branch has the best scope?',
            'Top 10 universities for CS in India?',
          ].map((text, idx) => (
            <button
              key={idx}
              className="text-[13px] bg-white border border-[#EBEBEB] shadow-sm text-[#1E293B] px-5 py-2.5 rounded-full whitespace-nowrap transition-colors hover:bg-gray-50 flex items-center gap-2 shrink-0"
              onClick={() => handleSend(text)}
            >
              {text}{' '}
              <span className="text-gray-400 text-lg leading-none mb-1">↗</span>
            </button>
          ))}
        </div>

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Type your specific question here..."
            className="w-full bg-white border border-[#EBEBEB] rounded-lg pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSend(inputValue)
              }
            }}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-80 transition-opacity"
            onClick={() => handleSend(inputValue)}
          >
            <Image src="/ai-button.svg" alt="Send" width={28} height={28} />
          </button>
        </div>
      </div>
    </div>
  )
}
