import ImageSection from "@/components/ImageSection";
import KiteAnimation from "@/components/KiteAnimation";
import { TextAnimation } from "@/components/TextAnimation";

export default function Home() {
  return (
    <div className="h-[150vh]">
      {/* <div className="h-[50vh] "> */}
      <TextAnimation />
      {/* </div> */}
      <ImageSection />
      {/* <KiteAnimation /> */}
    </div>
  );
}
