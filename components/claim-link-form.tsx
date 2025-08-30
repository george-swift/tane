export function ClaimLinkForm() {
  return (
    <form action="" className="flex flex-col gap-6">
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
          placeholder="Enter your name"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="hs-input-with-add-on-url"
          className="block text-sm font-medium text-gray-700"
        >
          URL
        </label>
        <div className="flex rounded-lg">
          <div className="inline-flex min-w-fit items-center rounded-s-md border border-e-0 border-gray-200 bg-gray-50 px-4">
            <span className="text-sm text-gray-500">https://tane.domain/</span>
          </div>
          <input
            type="text"
            name="hs-input-with-add-on-url"
            id="hs-input-with-add-on-url"
            className="focus:border-accent focus:ring-accent block w-full rounded-e-lg border border-gray-200 px-4 py-2.5 pe-11 focus:z-10 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            placeholder="lorem_ipsum"
          />
        </div>
      </div>

      <button
        type="submit"
        className="focus:outline-hidden bg-accent hover:bg-accent focus:bg-accent inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-white disabled:pointer-events-none disabled:opacity-50"
      >
        Continue
      </button>
    </form>
  )
}
