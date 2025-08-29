import Image from 'next/image'
import BatteryIndicator from '@/assets/images/battery-indicator.svg'
import CellularIndicator from '@/assets/images/cellular-indicator.svg'
import WifiIndicator from '@/assets/images/wifi-indicator.svg'

export function Preview() {
  return (
    <div className="w-full space-y-6 rounded-2xl border border-gray-200 bg-white p-4 lg:p-8">
      <div className="font-semibold">Preview</div>
      <hr />

      {/* iPhone 16 pro max mockup */}
      <div className="relative mx-auto h-[657.26px] w-[311.19px] overflow-hidden rounded-[43.19px] border-[3.35px] border-gray-300">
        <div className="size-full rounded-[calc(43.19px_-_3.35px)] border-[4.695px] border-gray-800">
          {/* Status bar */}
          <div className="flex h-[35.55px] items-center justify-between px-6 pb-0.5 pl-10 pt-2 text-black">
            {/* Time indicator */}
            <span className="font-sans text-xs font-semibold tracking-[-0/3px]">
              09:41
            </span>

            {/* Dynamic island */}
            <span className="h-[24.59px] w-[83.83px] rounded-[29.51px] bg-black" />

            {/* Network signal, Wifi, and battery */}
            <div className="flex items-end gap-2">
              <Image
                src={CellularIndicator}
                alt="Cellular indicator"
                width={14}
                height={9}
              />
              <Image
                src={WifiIndicator}
                alt="Wifi indicator"
                width={12}
                height={9}
              />
              <Image
                src={BatteryIndicator}
                alt="Battery indicator"
                width={20}
                height={9}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
