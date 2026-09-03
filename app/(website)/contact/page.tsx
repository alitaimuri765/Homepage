import Hero from '@/components/sections/Hero'
import Footer from '@/components/Footer'
import ContactForm from '@/components/sections/ContactForm'

export const metadata = { title: 'Contact Us — Health.IQ' }

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you."
        hideCta
      />
      <ContactForm />
      <Footer />
    </main>
  )
}
