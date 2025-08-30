import { AvatarIcon } from '@/components/icons'

export function PersonalInformationForm() {
  return (
    <div id="tab-preview" role="tabpanel" aria-labelledby="tab-item-1">
      <form action="" className="flex flex-col gap-6">
        <div className="inline-block size-24 overflow-hidden rounded-full ring ring-gray-100">
          <AvatarIcon />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="input-name"
            className="block text-sm font-medium text-black"
          >
            Full name
          </label>
          <input
            type="text"
            id="input-name"
            className="focus:border-accent focus:ring-accent block w-full rounded-lg border border-gray-200 px-4 py-2.5 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="input-job"
            className="block text-sm font-medium text-black"
          >
            Job title
          </label>
          <input
            type="text"
            id="input-job"
            className="focus:border-accent focus:ring-accent block w-full rounded-lg border border-gray-200 px-4 py-2.5 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            placeholder="Software Engineer"
          />
        </div>

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
            className="focus:border-accent focus:ring-accent block w-full rounded-lg border border-gray-200 px-4 py-2.5 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            placeholder="loremipsum@gmail.com"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="textarea-bio"
            className="block text-sm font-semibold text-black"
          >
            Bio
          </label>
          <textarea
            id="textarea-bio"
            className="focus:border-accent focus:ring-accent block w-full rounded-lg border-gray-200 px-3 py-2 disabled:pointer-events-none disabled:opacity-50 sm:px-4 sm:py-3 sm:text-sm"
            rows={3}
            placeholder="Say hi..."
          ></textarea>
        </div>
      </form>
    </div>
  )
}
