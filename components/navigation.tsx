'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import TaneLogo from '@/assets/images/tane-logo.svg'
import { cn } from '@/lib/utils/classnames'
import {
  BlocksIcon,
  FileChartLineIcon,
  SettingsIcon,
  UploadIcon,
  WallpaperIcon
} from 'lucide-react'

const items = [
  {
    title: 'Blocks',
    href: '/admin/blocks',
    icon: BlocksIcon
  },
  {
    title: 'Appearance',
    href: '/admin/appearance',
    icon: WallpaperIcon
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: FileChartLineIcon
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: SettingsIcon
  }
]

export function Navigation() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || (pathname === '/admin' && href === '/admin/blocks')

  return (
    <nav className="sticky top-0 z-[3] flex h-[90px] items-center justify-center border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex w-full max-w-5xl items-center justify-between gap-8">
        <Link
          href="/admin"
          className="text-accent font-poppins flex items-center gap-2 text-2xl font-semibold leading-6 tracking-[-0.6px]"
        >
          <Image src={TaneLogo} alt="Tane logo" width={24} height={24} />
          Tane
        </Link>

        {/* Desktop navigation */}
        <div className="hidden grow gap-5 lg:flex lg:items-center">
          {items.map(item => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'hover:text-accent flex items-center gap-2 text-sm font-medium text-gray-700',
                {
                  'text-accent': isActive(item.href)
                }
              )}
            >
              <item.icon className="size-5" />
              {item.title}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="focus:outline-hidden bg-accent hover:bg-accent focus:bg-accent ml-auto inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-white disabled:pointer-events-none disabled:opacity-50"
        >
          <UploadIcon className="size-5" />
          Share URL
        </button>
      </div>
    </nav>
  )
}
