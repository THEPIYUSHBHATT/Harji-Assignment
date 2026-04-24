'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import { useRoadmap } from '@/context/RoadmapContext'

export default function JourneyProgress() {
  const { sections } = useRoadmap()

  const stats = useMemo(() => {
    const totalTasks = sections.reduce(
      (count, section) => count + section.tasks.length,
      0,
    )
    const completedTasks = sections.reduce(
      (count, section) =>
        count +
        section.tasks.filter((task) => task.status === 'completed').length,
      0,
    )
    const completedMilestones = sections.filter((section) =>
      section.tasks.every((task) => task.status === 'completed'),
    ).length
    const percent = totalTasks
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0
    return { totalTasks, completedTasks, completedMilestones, percent }
  }, [sections])

  const circumference = 2 * Math.PI * 40
  const offset = circumference - circumference * (stats.percent / 100)

  return (
    <div className="bg-white rounded-[12px] p-[24px] shadow-sm border border-[#E5E7EB] w-full h-[282px] flex flex-col">
      <div className="flex items-center gap-[8px] h-[20px] mb-[20px]">
        <Image
          src="/journey.svg"
          alt="Journey"
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
        <h3 className="font-bold text-[14px] text-[#1A1A1A]">
          Journey Progress
        </h3>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-[120px] h-[120px]">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-[#EDF5F5]"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            {/* Progress Arc */}
            <circle
              className="text-[#F97316]"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[24px] font-bold text-[#F59E0B] leading-none">
              {stats.percent}%
            </span>
            <span className="text-[11px] font-medium text-[#6B7280] mt-[4px] tracking-[0.5px]">
              Completed
            </span>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="flex items-center justify-center gap-[30px] border-t border-[#E5E7EB] pt-[16px] mt-[20px]">
        <div className="flex flex-col items-center">
          <p className="text-[14px] font-bold text-[#1A1A1A] leading-none">
            {stats.completedTasks}
          </p>
          <p className="text-[10px] text-gray-400 font-bold uppercase mt-[4px] tracking-tight">
            Tasks Done
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[14px] font-bold text-[#1A1A1A] leading-none">
            {stats.completedMilestones}
          </p>
          <p className="text-[10px] text-gray-400 font-bold uppercase mt-[4px] tracking-tight">
            Milestones
          </p>
        </div>
      </div>
    </div>
  )
}
