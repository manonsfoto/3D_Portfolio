import { logoIconsList } from "../constants";

interface LogoIconType {
  imgPath: string;
  name?: string;
}

const LogoIcon = ({ icon }: { icon: LogoIconType }) => {
  return (
    <div className="marquee-item flex-none flex-center">
      <img src={icon.imgPath} alt={icon.name || "logo"} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
          
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
