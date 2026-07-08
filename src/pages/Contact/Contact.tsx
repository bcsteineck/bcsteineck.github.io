import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa6';
import FormField from '../../components/ui/FormField/FormField'
import Button from '../../components/ui/Button/Button'

import './Contact.scss'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function validate() {
    const nextErrors: Partial<FormState> = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.'
    if (!form.email.includes('@')) nextErrors.email = 'Please enter a valid email.'
    if (!form.message.trim()) nextErrors.message = 'Please enter a message.'

    return nextErrors
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitError('')
    setIsSubmitted(false)

    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch('https://formspree.io/f/mbdveywe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setIsSubmitted(true)
      setForm(initialForm)
      setErrors({})
    } catch {
      setSubmitError('Something went wrong. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact page">
      <div className="container primary">
        <header className="page-header">
          <h1 className="page-title">Contact</h1>
        </header>

        <div className="contact-layout">
          <div className="contact-intro">
            <h2 className="lead-title">Let’s build something great.</h2>

            <p>
              Whether you’re hiring, have a project in mind, or just want to say
              hello, feel free to reach out.
            </p>

            <div className="contact-links">
              <span>bcsteineck@gmail.com</span>
              <span>651.983.8282</span>
              <span>Minneapolis, MN</span>
              <Button
                href="https://www.linkedin.com/in/brody-steineck-42583851"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <FaLinkedin size={18} />
              </Button>
            </div>

            <hr />

            <h3 className="section-title">Send Brody a Message</h3>

          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <FormField
              id="name"
              label="Name"
              value={form.name}
              error={errors.name}
              onChange={(value) => updateField('name', value)}
            />

            <FormField
              id="email"
              label="Email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(value) => updateField('email', value)}
            />

            <FormField
              id="subject"
              label="Subject"
              value={form.subject}
              error={errors.subject}
              onChange={(value) => updateField('subject', value)}
            />

            <FormField
              id="message"
              label="Message"
              value={form.message}
              error={errors.message}
              textarea
              onChange={(value) => updateField('message', value)}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {isSubmitted && (
              <p className="form-success" role="status">
                Message sent. Thanks for reaching out — I’ll get back to you soon.
              </p>
            )}

            {submitError && (
              <p className="form-error" role="alert">
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}