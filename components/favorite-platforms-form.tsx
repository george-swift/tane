export function FavoritePlatforms() {
  return (
    <form action="" className="flex flex-col gap-10">
      <div className="mx-auto grid grid-cols-[repeat(4,100px)] gap-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="flex aspect-square items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-800"
          >
            App {index + 1}
          </div>
        ))}
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
