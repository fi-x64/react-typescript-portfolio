import { FaFacebook } from "react-icons/fa6";
import { SiGithub, SiLinkedin, SiUdemy } from "react-icons/si";

interface IPropsSocial {
  youtube: string;
  facebook: string;
  tiktok: string;
  udemy: string;
}
const SocialMedia = (props: IPropsSocial) => {
  const { youtube, tiktok, udemy, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={youtube}
        target="_blank"
        className="highlight"
        title="Linkedin Phi Ho"
      >
        <SiLinkedin size={30} />
      </a>
      <a
        href={tiktok}
        target="_blank"
        className="highlight"
        title="Github Phi Ho"
      >
        <SiGithub size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Phi Ho"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
