import Link from 'next/link'
import Image from 'next/image'
import { Map } from 'lucide-react'
import { cn } from '@/lib/utils'

const ROADMAP_STEPS = [
  { id: 1, title: 'Build Basics', active: true },
  { id: 2, title: 'Strengthen Concepts', active: false },
  { id: 3, title: 'Score in Boards', active: false },
  { id: 4, title: 'PCM Stream', active: false },
]

export default function CareerRoadmapPreview() {
  return (
    <div className="bg-[#FFFFFF] rounded-[12px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] shadow-sm border border-[#EBEBEB] w-full flex flex-col gap-[24px]">
      <div className="flex items-center justify-between w-full h-[28px]">
        <div className="flex items-center gap-2 font-semibold text-[#1A1A1A] text-[16px]">
          <Map className="w-5 h-5 text-[#0D9488]" />
          Career Roadmap
        </div>
        <Link
          href="/career-roadmap"
          className="text-[13px] text-[#0D9488] bg-[#F2FBF5] font-medium border border-[#EDF5F0] rounded-[12px] px-[12px] py-[6px] hover:bg-[#E5F5E9] transition-colors"
        >
          View Full Roadmap
        </Link>
      </div>

      {/* Progress Steps */}
      <div className="relative w-full mb-6 mt-2">
        <div className="absolute top-[13px] left-[50px] right-[50px] h-[2px] bg-[#EBEBEB] z-0">
          <div className="h-full bg-[#0D9488]" style={{ width: '20%' }}></div>
        </div>

        <div className="flex justify-between w-full items-start relative z-10 px-4">
          {ROADMAP_STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center gap-[10px] w-[100px]"
            >
              <div className="flex items-center justify-center bg-white h-[26px]">
                {step.active ? (
                  <div className="w-[26px] h-[26px] rounded-full bg-[#0D9488] flex items-center justify-center shadow-sm">
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 4.5L4.5 7.5L10.5 1.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <Image
                    src="/lock.svg"
                    alt="Locked"
                    width={26}
                    height={26}
                    className="bg-white rounded-full"
                  />
                )}
              </div>
              <span
                className={cn(
                  'text-[12px] text-center',
                  step.active
                    ? 'text-[#1A1A1A] font-semibold'
                    : 'text-[#475569] font-medium',
                )}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Milestone Banner */}
      <div className="bg-[#F2FBF5] rounded-[6px] px-[16px] py-[14px] flex items-center justify-between border border-[#E5F5E9] h-[51px]">
        <div className="flex items-center gap-[10px]">
          <Image src="/milestone.svg" alt="Milestone" width={16} height={16} />
          <span className="text-[13px] text-[#0D9488] font-medium">
            Next Milestone: Strengthen Concepts
          </span>
        </div>
        <span className="text-[14px] text-[#0D9488] font-bold">65%</span>
      </div>
    </div>
  )
}
