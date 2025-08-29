import { FavoritePlatforms } from '@/components/favorite-platforms-form'

export default function FavoritePlatformsPage() {
  return (
    <div className="w-full max-w-[496px] space-y-10">
      <hgroup className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Which platforms are you on?
        </h1>
        <p>Description</p>
      </hgroup>
      <FavoritePlatforms />
    </div>
  )
}
