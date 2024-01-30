import { VHeader } from "./views/header/VHeader";
import { VCyberDays } from "./views/cyber-day/VCyberDays";
import { VSlider } from "./views/slider/VSlider";
import { VFooter } from "./views/footer/VFooter";

const HomePage = () => {
  return (
    <>
      <VHeader />
      <VCyberDays />
      <VSlider />
      <VFooter />
    </>
  );
};

export default HomePage;
