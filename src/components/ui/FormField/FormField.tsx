import './FormField.scss'

type FormFieldProps = {
  id: string
  label: string
  type?: string
  value: string
  error?: string
  textarea?: boolean
  onChange: (value: string) => void
}

export default function FormField({
  id,
  label,
  type = 'text',
  value,
  error,
  textarea = false,
  onChange,
}: FormFieldProps) {
  const errorId = `${id}-error`

  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          className="form-control form-control--textarea"
          value={value}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          className="form-control"
          type={type}
          value={value}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
        />
      )}

      {error && (
        <p className="form-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}