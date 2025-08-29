import { LoginForm } from '@/components/login-form'

export default function LoginPage() {
  return (
    <div className="w-full max-w-[496px] space-y-10">
      <hgroup className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome back!</h1>
        <p>Sign in to continue creating cool stuff.</p>
      </hgroup>
      <LoginForm />
    </div>
  )
}
