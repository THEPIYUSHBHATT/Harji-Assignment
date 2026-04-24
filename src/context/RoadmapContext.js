'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'consultopen.roadmap.v1'

const DEFAULT_ROADMAP = [
  {
    id: 'build-basics',
    title: 'Build Basics',
    description:
      "You'll build a strong foundation in foundational math and science principles.",
    status: 'in-progress',
    tasks: [
      {
        id: 'bb-1',
        title: 'Study Motion and Energy Concepts',
        type: 'Science',
        status: 'locked',
        blurred: true,
        typeColor: 'text-[#EAB308]',
        typeBg: 'bg-[#FEFCE8]',
      },
      {
        id: 'bb-2',
        title: 'Study Motion and Energy Concepts',
        type: 'Science',
        status: 'locked',
        blurred: true,
        typeColor: 'text-[#EAB308]',
        typeBg: 'bg-[#FEFCE8]',
      },
      {
        id: 'bb-3',
        title: 'Study Motion and Energy Concepts',
        type: 'Science',
        status: 'continue',
        typeColor: 'text-[#EAB308]',
        typeBg: 'bg-[#FEFCE8]',
        subTasks: [
          'Understand speed, velocity, and acceleration.',
          'Solve 5-10 basic numerical problems',
        ],
      },
      {
        id: 'bb-4',
        title: 'Solve 20 Maths Question Daily',
        type: 'Maths',
        status: 'completed',
        score: '98%',
        typeColor: 'text-[#0D9488]',
        typeBg: 'bg-[#F0FDF4]',
      },
      {
        id: 'bb-5',
        title: 'Watch a Science Concept Video',
        type: 'Video • 10 Mins',
        status: 'completed',
        typeColor: 'text-[#E11D48]',
        typeBg: 'bg-[#FFF1F2]',
      },
    ],
  },
  {
    id: 'strengthen',
    title: 'Strengthen Concepts',
    description:
      'Dive deeper into advanced topics to prepare for your board exams.',
    status: 'locked',
    tasks: [
      {
        id: 'st-1',
        title: 'Revise Algebra and Quadratics',
        type: 'Maths',
        status: 'locked',
        blurred: true,
        typeColor: 'text-[#0D9488]',
        typeBg: 'bg-[#F0FDF4]',
      },
      {
        id: 'st-2',
        title: 'Practice Circuit Problems',
        type: 'Science',
        status: 'locked',
        blurred: true,
        typeColor: 'text-[#EAB308]',
        typeBg: 'bg-[#FEFCE8]',
      },
    ],
  },
  {
    id: 'score',
    title: 'Score in Boards',
    description:
      'Achieve target scores in preliminary and final board examinations.',
    status: 'locked',
    tasks: [
      {
        id: 'sc-1',
        title: 'Attempt a Timed Mock Test',
        type: 'Test',
        status: 'locked',
        blurred: true,
        typeColor: 'text-[#0EA5E9]',
        typeBg: 'bg-[#E0F2FE]',
      },
    ],
  },
  {
    id: 'pcm',
    title: 'PCM Stream Selection',
    description: 'Finalize stream choice based on aptitude and board results.',
    status: 'locked',
    tasks: [
      {
        id: 'pcm-1',
        title: 'Review Stream Preferences',
        type: 'Planning',
        status: 'locked',
        blurred: true,
        typeColor: 'text-[#A855F7]',
        typeBg: 'bg-[#F3E8FF]',
      },
    ],
  },
]

const RoadmapContext = createContext(null)

const cloneRoadmap = (sections) =>
  sections.map((section) => ({
    ...section,
    tasks: section.tasks.map((task) => ({ ...task })),
  }))

const normalizeRoadmap = (sections) => {
  const next = cloneRoadmap(sections)

  next.forEach((section, index) => {
    const prev = index > 0 ? next[index - 1] : null
    const prevCompleted = prev
      ? prev.tasks.every((task) => task.status === 'completed')
      : true

    if (!prevCompleted) {
      section.status = 'locked'
      section.tasks = section.tasks.map((task) => ({
        ...task,
        status: 'locked',
        blurred: true,
      }))
      return
    }

    const firstIncompleteIndex = section.tasks.findIndex(
      (task) => task.status !== 'completed',
    )

    if (firstIncompleteIndex === -1) {
      section.status = 'completed'
      section.tasks = section.tasks.map((task) => ({
        ...task,
        blurred: false,
      }))
      return
    }

    section.status = 'in-progress'

    section.tasks = section.tasks.map((task, taskIndex) => {
      if (task.status === 'completed') {
        return { ...task, blurred: false }
      }

      if (taskIndex === firstIncompleteIndex) {
        return {
          ...task,
          status: task.status === 'continue' ? 'continue' : 'start',
          blurred: false,
        }
      }

      return {
        ...task,
        status: 'locked',
        blurred: true,
      }
    })
  })

  return next
}

export function RoadmapProvider({ children }) {
  const [sections, setSections] = useState(() => {
    if (typeof window === 'undefined') {
      return normalizeRoadmap(DEFAULT_ROADMAP)
    }

    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return normalizeRoadmap(DEFAULT_ROADMAP)
    }

    try {
      const parsed = JSON.parse(stored)
      return normalizeRoadmap(parsed)
    } catch {
      return normalizeRoadmap(DEFAULT_ROADMAP)
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sections))
  }, [sections])

  const updateTaskStatus = (sectionId, taskId) => {
    setSections((current) => {
      const next = cloneRoadmap(current)
      const section = next.find((item) => item.id === sectionId)
      if (!section) return current

      const task = section.tasks.find((item) => item.id === taskId)
      if (!task || task.status === 'locked') return current

      if (task.status === 'start') {
        task.status = 'continue'
      } else if (task.status === 'continue') {
        task.status = 'completed'
      }

      return normalizeRoadmap(next)
    })
  }

  const value = useMemo(
    () => ({
      sections,
      updateTaskStatus,
    }),
    [sections],
  )

  return (
    <RoadmapContext.Provider value={value}>{children}</RoadmapContext.Provider>
  )
}

export function useRoadmap() {
  const context = useContext(RoadmapContext)
  if (!context) {
    throw new Error('useRoadmap must be used within RoadmapProvider')
  }
  return context
}
