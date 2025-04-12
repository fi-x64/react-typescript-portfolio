import { FaFacebook } from "react-icons/fa6";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface IPropsSocial {
  linkedin: string;
  github: string;
  facebook: string;
}
const SocialMedia = (props: IPropsSocial) => {
  const { linkedin, github, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={linkedin}
        target="_blank"
        className="highlight"
        title="Linkedin Phi Ho"
      >
        <SiLinkedin size={30} />
      </a>
      <a
        href={github}
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
