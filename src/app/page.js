import GreetingSection from "@/components/home/GreetingSection";
import ConsultOpenAI from "@/components/home/ConsultOpenAI";
import TodaysFocus from "@/components/home/TodaysFocus";
import CareerRoadmapPreview from "@/components/home/CareerRoadmapPreview";
import BuildBasics from "@/components/home/BuildBasics";
import MindEye from "@/components/home/MindEye";
import MoodActivityTrends from "@/components/home/MoodActivityTrends";
import SkillsProgress from "@/components/home/SkillsProgress";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* Full Width Top Sections */}
      <GreetingSection />
      <ConsultOpenAI />
      <TodaysFocus />
      <CareerRoadmapPreview />

      {/* Two Column Layout for the rest */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content Area */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          <BuildBasics />
          <MindEye />
        </div>

        {/* Right Sidebar Area */}
        <div className="w-full lg:w-[320px] xl:w-[356px] shrink-0 flex flex-col gap-6">
          <MoodActivityTrends />
          <SkillsProgress />
        </div>
      </div>
    </div>
  );
}

