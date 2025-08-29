import { RegisterForm } from '@/components/register-form'

export default function RegisterPage() {
  return (
    <div className="w-full max-w-[496px] space-y-10">
      <hgroup className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Create an account
        </h1>
        <p>Get started with a free account.</p>
      </hgroup>
      <RegisterForm />
    </div>
  )
}
