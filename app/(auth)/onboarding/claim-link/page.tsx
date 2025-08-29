import { ClaimLinkForm } from '@/components/claim-link-form'

export default function ClaimLinkPage() {
  return (
    <div className="w-full max-w-[496px] space-y-10">
      <hgroup className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Claim your link
        </h1>
        <p>Choose your unique link below</p>
      </hgroup>
      <ClaimLinkForm />
    </div>
  )
}
