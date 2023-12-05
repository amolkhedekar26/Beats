import { Input } from '../../components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  emailValidation,
  passwordValidation,
} from '../../utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const LoginPage = props => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container form"
      >
        <h1 className="mb-4 text-4xl  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          <span className="text-blue-600 dark:text-blue-500 font-extrabold">
            {' '}
            Sign In{' '}
          </span>
          here
        </h1>
        <h4 className="mb-4 text-3xl  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
          Let's get in
        </h4>
        {success && (
          <p className="message-text font-semibold p-1 px-2 text-sm rounded-md bg-red-100 text-red-500 mb-5 flex items-center gap-2">
            <BsFillCheckSquareFill /> Invalid Email or Password.
          </p>
        )}
        <div className="flex flex-col mt-5">
          <Input {...emailValidation} />
          <Input {...passwordValidation} />
        </div>
        <div className="mt-5 flex justify-between items-center">
          <p>
            Don't have an account?
            {/* <a href="/signup" className="text-blue-600 ml-2">
              Sign Up
            </a> */}
            <Link to="/signup" className="text-blue-600 ml-2">
              Sign Up
            </Link>
          </p>

          <button
            onClick={onSubmit}
            className="p-3 px-12 rounded-full bg-blue-600 font-semibold text-white flex  gap-1 hover:bg-blue-800"
          >
            Login
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
