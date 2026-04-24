'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { CheckCircle2, Clock } from 'lucide-react'
import { useRoadmap } from '@/context/RoadmapContext'

export default function TodaysFocus() {
  const { sections } = useRoadmap()

  const activeTask = useMemo(() => {
    for (const section of sections) {
      const task = section.tasks.find(
        (item) => item.status === 'continue' || item.status === 'start',
      )
      if (task) return task
    }
    return null
  }, [sections])

  const focusTitle = activeTask?.title || 'Study Motion and Energy Concepts'
  const subTasks = activeTask?.subTasks || [
    'Understand speed, velocity, and acceleration.',
    'Solve 5-10 basic numerical problems',
  ]

  return (
    <div className="bg-white rounded-lg p-6 border border-[#EBEBEB] shadow-sm w-full">
      <div className="flex items-center gap-2 text-[#1A1A1A] font-semibold mb-4">
        <Image src="/today.svg" alt="Today's Focus" width={20} height={20} />
        Today&apos;s Focus!
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        <div className="flex-1 border border-[#EBEBEB] rounded-lg p-6 flex flex-col">
          <h3 className="font-semibold text-[#1A1A1A] mb-4 text-[18px] leading-none">
            {focusTitle}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[14px] text-text-secondary">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#0D9488]" />
              <span>{subTasks[0]}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 text-[14px] text-text-secondary">
              <Clock className="w-[18px] h-[18px] text-gray-400" />
              <span>{subTasks[1]}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex shrink-0 items-stretch">
          <div className="relative w-[322px] h-[237px] overflow-hidden rounded-lg">
            <Image
              src="/calm-bg.svg"
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
            />

            <Image
              src="/leaf1.svg"
              alt=""
              width={46}
              height={45}
              className="absolute bottom-0 left-0"
              aria-hidden="true"
            />

            <Image
              src="/leaf2.svg"
              alt=""
              width={46}
              height={45}
              className="absolute bottom-0 right-0"
              aria-hidden="true"
            />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
              <Image
                src="/head.svg"
                alt="Calm icon"
                width={52}
                height={56}
                className="mb-5"
              />

              <h4 className="mb-2 w-71 text-[20px] font-semibold leading-[100%] tracking-[0px] text-[#70AD40]">
                You Are Calm Today
              </h4>

              <p className="w-71 text-[10px] font-medium leading-3.5 tracking-[0px] text-[#5A6270]">
                Staying calm helps you think clearly and make better decisions.
                Take a deep breath and continue your day with a peaceful mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
