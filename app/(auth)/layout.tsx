import Image from 'next/image'
import Link from 'next/link'
import Placeholder from '@/assets/images/placeholder.svg'
import TaneLogo from '@/assets/images/tane-logo.svg'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-10 p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="text-accent font-poppins flex items-center gap-2 text-2xl font-semibold leading-6 tracking-[-0.6px]"
          >
            <Image src={TaneLogo} alt="Tane logo" width={24} height={24} />
            Tane
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          {children}
        </div>
      </div>
      <div className="relative hidden items-center justify-center p-10 lg:flex lg:border-l lg:border-gray-200">
        <Image
          src={Placeholder}
          alt="Tane app"
          className="size-full rounded-3xl object-cover"
        />
      </div>
    </div>
  )
}
