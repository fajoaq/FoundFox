import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  FormError,
  Label,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message')
      formMethods.reset()
    },
  })

  function onSubmit(data) {
    create({
      variables: {
        input: data,
      },
    })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />

      <Form
        onSubmit={onSubmit}
        formMethods={formMethods}
        error={error}
        config={{ mode: 'onBlur' }}
      >
        <FormError error={error} wrapperClassName="form-error" />
        {/* NAME */}
        <div className="form-field-container">
          <Label name="name" errorClassName="error" />
          <TextField
            errorClassName="error"
            name="name"
            validation={{ required: true }}
          />
          <FieldError className="error" name="name" />
        </div>
        {/* EMAIL */}
        <div className="form-field-container">
          <Label name="Email" errorClassName="email" />
          <TextField
            errorClassName="error"
            name="email"
            validation={{
              required: true,
              pattern: {
                value: /^[^@]+@[^.]+\..+$/,
                message: 'Please enter a valid email address',
              },
            }}
          />
          <FieldError className="error" name="email" />
        </div>
        {/* MESSAGE */}
        <div className="form-field-container">
          <Label name="Message" errorClassName="message" />
          <TextAreaField
            errorClassName="error"
            name="message"
            validation={{
              required: true,
            }}
          />
          <FieldError className="error" name="message" />
        </div>

        <Submit className="submit-button" disabled={loading}>
          Send Message
        </Submit>
      </Form>
    </>
  )
}

export default ContactPage
