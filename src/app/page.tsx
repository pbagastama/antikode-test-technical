import PublicLayout from "@/layouts/public";
import BannerTop from '@/components/Home/BannerTop';
import SectionActivities from "@/components/Home/SectionActivities";
import SectionCareer from "@/components/Home/SectionCareer";

export default function Home() {
  return (
    <PublicLayout>
      <BannerTop />
      <SectionActivities />
      <SectionCareer />
    </PublicLayout>    
  );
}

