import SessionsHeader from "@/components/career/SessionsHeader";
import SessionList from "@/components/career/SessionList";
import JourneyProgress from "@/components/career/JourneyProgress";
import SpecialRecommendation from "@/components/career/SpecialRecommendation";
import QuickLearningResources from "@/components/career/QuickLearningResources";

export default function CareerRoadmapPage() {
  return (
    <div className="flex flex-col xl:flex-row gap-[24px] xl:gap-[40px]">
      {/* Main Content Area */}
      <div className="w-full xl:w-[692px] shrink-0">
        <SessionsHeader />
        <SessionList />
      </div>

      {/* Right Sidebar Area */}
      <div className="w-full xl:w-[356px] shrink-0 xl:mt-[78px] flex flex-col gap-[20px]">
        <JourneyProgress />
        <SpecialRecommendation />
        <QuickLearningResources />
      </div>
    </div>
  );
}
