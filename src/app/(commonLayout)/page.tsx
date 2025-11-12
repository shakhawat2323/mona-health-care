import HeroSection from "@/components/module/Home/HeroSection";
import PatientReviews from "@/components/module/Home/PatientReviews";
import Specialists from "@/components/module/Home/Specialists";
import TopRatedDoctors from "@/components/module/Home/TopRatedDoctors";


export default function Home() {
  return (
<div>
  <HeroSection/>
  <Specialists/>
  <TopRatedDoctors/>
  <PatientReviews/>
 

</div>
  );
}
