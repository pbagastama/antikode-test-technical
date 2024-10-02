import PublicLayout from "@/layouts/public";
import BannerTop from '@/components/Home/BannerTop';
import SectionActivities from "@/components/Home/SectionActivities";

export default function Home() {
  return (
    <PublicLayout>
      <BannerTop />
      <SectionActivities />
    </PublicLayout>    
  );
}

