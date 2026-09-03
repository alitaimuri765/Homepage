'use client'
import { useState } from 'react'

async function sendEmail(formData: FormData) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: formData,
  })
  return res.ok
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    const ok = await sendEmail(formData)
    setStatus(ok ? 'sent' : 'error')
  }

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[720px] mx-auto px-4 lg:px-[60px]">
        {status === 'sent' ? (
          <div className="text-center py-16">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: '#F0E5FD' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="#8A07F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Message sent!
            </h2>
            <p className="text-[16px] text-[#505050]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Thanks for reaching out. We&apos;ll get back to you at the email you provided.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-[14px] font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Your name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full rounded-[10px] px-4 py-3 text-[16px] text-[#1A1A1A] outline-none transition-all"
                style={{ border: '1px solid #EAECF0', fontFamily: 'Poppins, sans-serif' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#8A07F1')}
                onBlur={e => (e.currentTarget.style.borderColor = '#EAECF0')}
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Your email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                className="w-full rounded-[10px] px-4 py-3 text-[16px] text-[#1A1A1A] outline-none transition-all"
                style={{ border: '1px solid #EAECF0', fontFamily: 'Poppins, sans-serif' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#8A07F1')}
                onBlur={e => (e.currentTarget.style.borderColor = '#EAECF0')}
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Subject
              </label>
              <input
                name="subject"
                type="text"
                required
                placeholder="How can we help?"
                className="w-full rounded-[10px] px-4 py-3 text-[16px] text-[#1A1A1A] outline-none transition-all"
                style={{ border: '1px solid #EAECF0', fontFamily: 'Poppins, sans-serif' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#8A07F1')}
                onBlur={e => (e.currentTarget.style.borderColor = '#EAECF0')}
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us what's on your mind..."
                className="w-full rounded-[10px] px-4 py-3 text-[16px] text-[#1A1A1A] outline-none transition-all resize-none"
                style={{ border: '1px solid #EAECF0', fontFamily: 'Poppins, sans-serif' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#8A07F1')}
                onBlur={e => (e.currentTarget.style.borderColor = '#EAECF0')}
              />
            </div>

            {status === 'error' && (
              <p className="text-[14px] text-red-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Something went wrong. Please email us directly at{' '}
                <a href="mailto:info@hlthiq.com" className="underline">info@hlthiq.com</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-[87px] text-[16px] font-semibold text-white transition-all duration-200 disabled:opacity-60"
              style={{ background: '#8A07F1', fontFamily: 'Poppins, sans-serif' }}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
