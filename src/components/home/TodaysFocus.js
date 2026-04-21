import Image from 'next/image'
import { CheckCircle2, Clock } from 'lucide-react'

export default function TodaysFocus() {
  return (
    <div className="bg-white rounded-lg p-6 border border-[#EBEBEB] shadow-sm w-full">
      <div className="flex items-center gap-2 text-[#E82B73] font-semibold mb-4">
        <Image src="/today.svg" alt="Today's Focus" width={20} height={20} />
        Today&apos;s Focus!
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        <div className="flex-1 border border-[#EBEBEB] rounded-lg p-6 flex flex-col">
          <h3 className="font-semibold text-[#1A1A1A] mb-4 text-[18px] leading-none">
            Study Motion and Energy Concepts
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[14px] text-text-secondary">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#0D9488]" />
              <span>Understand speed, velocity, and acceleration.</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 text-[14px] text-text-secondary">
              <Clock className="w-[18px] h-[18px] text-gray-400" />
              <span>Solve 5-10 basic numerical problems</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex shrink-0 items-stretch">
          <Image
            src="/calm.png"
            alt="You Are Calm Today widget"
            width={280}
            height={130}
            className="rounded-lg object-contain"
            style={{ width: '280px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}
