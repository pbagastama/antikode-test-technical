import PublicLayout from "@/layouts/public";
import BannerTop from '@/components/Home/BannerTop';
import SectionActivities from "@/components/Home/SectionActivities";
import SectionCareer from "@/components/Home/SectionCareer";
import SectionExpertise from "@/components/Home/SectionExpertise";

export default function Home() {
  return (
    <PublicLayout>
      <BannerTop />
      <SectionExpertise />
      <SectionActivities />
      <SectionCareer />
    </PublicLayout>    
  );
}

