export default function AdminBlocksPage() {
  return (
    <div className="flex flex-col gap-8">
      <select
        id="tab-select"
        className="focus:border-accent focus:ring-accent block w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pe-9 text-sm sm:hidden"
        aria-label="Tabs"
      >
        <option value="#tab-1">Personal information</option>
        <option value="#tab-2">Socials</option>
        <option value="#tab-3">Links</option>
        <option value="#tab-4">Maps</option>
        <option value="#tab-5">CTA buttons</option>
      </select>

      <nav
        className="hidden h-[38px] gap-x-1 border-b border-gray-200 sm:flex"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
        data-hs-tab-select="#tab-select"
      >
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent active inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="tab-item-1"
          aria-selected="true"
          data-hs-tab="#tab-preview"
          aria-controls="tab-preview"
          role="tab"
        >
          Personal information
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="tab-item-2"
          aria-selected="false"
          data-hs-tab="#tab-2"
          aria-controls="tab-2"
          role="tab"
        >
          Socials
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="tab-item-3"
          aria-selected="false"
          data-hs-tab="#tab-3"
          aria-controls="tab-3"
          role="tab"
        >
          Links
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="tab-item-4"
          aria-selected="false"
          data-hs-tab="#tab-4"
          aria-controls="tab-4"
          role="tab"
        >
          Maps
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="tab-item-5"
          aria-selected="false"
          data-hs-tab="#tab-5"
          aria-controls="tab-5"
          role="tab"
        >
          CTA buttons
        </button>
      </nav>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
        <div id="tab-preview" role="tabpanel" aria-labelledby="tab-item-1">
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">first</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
        <div
          id="tab-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tab-item-2"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">second</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
        <div
          id="tab-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tab-item-3"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">third</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
        <div
          id="tab-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tab-item-4"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">fourth</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
        <div
          id="tab-5"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tab-item-5"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">fifth</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
      </div>
    </div>
  )
}
