import Link from 'next/link'

import { AppleIcon, GoogleIcon, PasswordIcon } from './icons'

export function RegisterForm() {
  return (
    <form action="" className="flex flex-col gap-10">
      <div className="space-y-4">
        <button
          type="button"
          className="shadow-2xs focus:outline-hidden inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
        >
          <GoogleIcon />
          Sign in with Google
        </button>

        <button
          type="button"
          className="shadow-2xs focus:outline-hidden inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
        >
          <AppleIcon />
          Sign in with Apple
        </button>
      </div>

      <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200">
        Or
      </div>

      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <label
            htmlFor="input-email"
            className="block text-sm font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="input-email"
            className="focus:border-accent focus-within:outline-accent focus:ring-accent block w-full rounded-lg border border-gray-200 px-4 py-2.5 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            placeholder="loremipsum@gmail.com"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="hs-toggle-password"
            className="block text-sm font-medium text-black"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="hs-toggle-password"
              type="password"
              className="focus:border-accent focus-within:outline-accent focus:ring-accent block w-full rounded-lg border border-gray-200 py-2.5 pe-10 ps-4 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
              placeholder="Enter your password"
            />
            <button
              type="button"
              data-hs-toggle-password='{
                "target": "#hs-toggle-password"
              }'
              className="focus:outline-hidden focus:text-accent absolute inset-y-0 end-0 z-20 flex cursor-pointer items-center rounded-e-md px-3 text-gray-400"
            >
              <PasswordIcon />
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="focus:outline-hidden bg-accent hover:bg-accent focus:bg-accent inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-white disabled:pointer-events-none disabled:opacity-50"
        >
          Sign up
        </button>
      </div>

      <div className="text-center text-sm">
        <span>Already have an account?</span>{' '}
        <Link href="/login">
          <span className="text-accent font-semibold underline">Sign in</span>
        </Link>
      </div>
    </form>
  )
}
