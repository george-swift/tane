export default function AdminAppearancePage() {
  return (
    <div className="flex flex-col gap-8">
      <nav
        className="flex h-[38px] gap-x-1 overflow-x-auto border-b border-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:h-2"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent active inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="horizontal-scroll-tab-item-1"
          aria-selected="true"
          data-hs-tab="#horizontal-scroll-tab-preview"
          aria-controls="horizontal-scroll-tab-preview"
          role="tab"
        >
          Theme
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="horizontal-scroll-tab-item-2"
          aria-selected="false"
          data-hs-tab="#horizontal-scroll-tab-2"
          aria-controls="horizontal-scroll-tab-2"
          role="tab"
        >
          Wallpaper
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="horizontal-scroll-tab-item-3"
          aria-selected="false"
          data-hs-tab="#horizontal-scroll-tab-3"
          aria-controls="horizontal-scroll-tab-3"
          role="tab"
        >
          Fonts
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="horizontal-scroll-tab-item-4"
          aria-selected="false"
          data-hs-tab="#horizontal-scroll-tab-4"
          aria-controls="horizontal-scroll-tab-4"
          role="tab"
        >
          Shapes
        </button>
        <button
          type="button"
          className="hs-tab-active:font-semibold hs-tab-active:border-accent hs-tab-active:text-accent hover:text-accent focus:outline-hidden focus:text-accent inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-2 py-3 text-sm text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          id="horizontal-scroll-tab-item-5"
          aria-selected="false"
          data-hs-tab="#horizontal-scroll-tab-5"
          aria-controls="horizontal-scroll-tab-5"
          role="tab"
        >
          CTA buttons
        </button>
      </nav>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8">
        <div
          id="horizontal-scroll-tab-preview"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-1"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">first</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
        <div
          id="horizontal-scroll-tab-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-2"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">second</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
        <div
          id="horizontal-scroll-tab-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-3"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">third</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
        <div
          id="horizontal-scroll-tab-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-4"
        >
          <p className="text-gray-500">
            This is the <em className="font-semibold text-gray-800">fourth</em>{' '}
            setting&apos;s tab body.
          </p>
        </div>
        <div
          id="horizontal-scroll-tab-5"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-scroll-tab-item-5"
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
