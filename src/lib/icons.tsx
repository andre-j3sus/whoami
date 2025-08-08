import * as Icons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

// Icon mapping function
export const getSkillIcon = (skillName: string, color: string) => {
  const iconSize = 32;
  const iconStyle = { color, fontSize: iconSize };

  const Icon =
    {
      java: FaIcons.FaJava,
      kotlin: Icons.SiKotlin,
      javascript: Icons.SiJavascript,
      typescript: Icons.SiTypescript,
      python: Icons.SiPython,
      git: Icons.SiGit,
      html5: Icons.SiHtml5,
      css3: Icons.SiCss3,
      nodejs: Icons.SiNodedotjs,
      react: Icons.SiReact,
      remix: Icons.SiRemix,
      vite: Icons.SiVite,
      fastapi: Icons.SiFastapi,
      graphql: Icons.SiGraphql,
      jest: Icons.SiJest,
      spring: Icons.SiSpring,
      docker: Icons.SiDocker,
      linux: Icons.SiLinux,
      android: Icons.SiAndroid,
      "google cloud platform": Icons.SiGooglecloud,
      "cloudflare workers": Icons.SiCloudflareworkers,
      postgresql: Icons.SiPostgresql,
      mongodb: Icons.SiMongodb,
      kubernetes: Icons.SiKubernetes,
    }[skillName.toLowerCase()] || FaIcons.FaCode;

  return <Icon style={iconStyle} />;
};
