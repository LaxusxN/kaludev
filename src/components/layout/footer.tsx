import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faYoutube,
  faInstagram,
  faTwitch,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
interface FooterProps {
  prop?: string;
}
const media = [
  {
    name: faWhatsapp,
    url: "https://wa.link/eei8ku",
  },
  {
    name: faYoutube,
    url: "https://www.youtube.com/@Mr.Kalu25",
  },
  {
    name: faFacebook,
    url: "https://www.facebook.com/lcalaguaaspilcueta/",
  },
  {
    name: faInstagram,
    url: "https://www.instagram.com/luisc9422/",
  },
  {
    name: faTiktok,
    url: "https://www.tiktok.com/@luiscalagua887  ",
  },
  {
    name: faTwitch,
    url: "https://www.twitch.tv/mrkalu25",
  },
  {
    name: faLinkedin,
    url: "https://www.linkedin.com/in/luis-calagua/",
  },
];

const handleRedirect = (url: string) => {
  window.open(url, "_blank");
};

export const Footer: FC<FooterProps> = () => {
  return (
    <div className="flex flex-col p-16 gap-8">
      <h1 className="text-white text-2xl font-sans">
        Contáctame: (+51) 993 326 873
      </h1>
      <div className=" flex justify-between gap-4 flex-wrap">
        {media.map((index) => (
          <FontAwesomeIcon
            icon={index.name}
            style={{ color: "#ffffff", height: 60, cursor: "pointer" }}
            onClick={() => handleRedirect(index.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
