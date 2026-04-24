'use client'

import { useMemo } from 'react'
import { Zap } from 'lucide-react'
import Image from 'next/image'
import { useRoadmap } from '@/context/RoadmapContext'

export default function SkillsProgress() {
  const { sections } = useRoadmap()

  const skills = useMemo(() => {
    const tasks = sections.flatMap((section) => section.tasks)
    const computeProgress = (matcher) => {
      const filtered = tasks.filter((task) => matcher(task.type))
      if (filtered.length === 0) return 0
      const completed = filtered.filter(
        (task) => task.status === 'completed',
      ).length
      return Math.round((completed / filtered.length) * 100)
    }

    return [
      {
        name: 'Math Problem Solving',
        progress: computeProgress((type) =>
          type?.toLowerCase().includes('math'),
        ),
        color: 'bg-[#229E91]',
        icon: <Image src="/maths.svg" alt="Math" width={30} height={30} />,
      },
      {
        name: 'Science Concepts',
        progress: computeProgress((type) =>
          type?.toLowerCase().includes('science'),
        ),
        color: 'bg-[#229E91]',
        icon: <Image src="/science.svg" alt="Science" width={30} height={30} />,
      },
    ]
  }, [sections])

  return (
    <div className="bg-white rounded-[12px] p-6 shadow-sm border border-[#EBEBEB] w-full">
      <div className="flex items-center gap-2 font-semibold text-foreground mb-6">
        <Image src="/green-beat.svg" alt="Skills" width={20} height={20} />
        Skills Progress
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg`}
            >
              {skill.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm font-medium mb-1.5">
                <span className="text-foreground">{skill.name}</span>
                <span className="text-primary">{skill.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color} rounded-full`}
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
