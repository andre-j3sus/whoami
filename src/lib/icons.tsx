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
      c: Icons.SiC,
      "c#": Icons.SiSharp,
      python: Icons.SiPython,
      git: Icons.SiGit,
      github: Icons.SiGithub,
      jenkins: Icons.SiJenkins,
      "github actions": Icons.SiGithubactions,
      latex: Icons.SiLatex,
      html5: Icons.SiHtml5,
      css3: Icons.SiCss3,
      nodejs: Icons.SiNodedotjs,
      expressjs: Icons.SiExpress,
      reactjs: Icons.SiReact,
      "material-ui": Icons.SiMui,
      bootstrap: Icons.SiBootstrap,
      webpack: Icons.SiWebpack,
      spring: Icons.SiSpring,
      nginx: Icons.SiNginx,
      postman: Icons.SiPostman,
      docker: Icons.SiDocker,
      linux: Icons.SiLinux,
      android: Icons.SiAndroid,
      "google cloud platform": Icons.SiGooglecloud,
      "cloudflare workers": Icons.SiCloudflareworkers,
      postgresql: Icons.SiPostgresql,
      mongodb: Icons.SiMongodb,
      elasticsearch: Icons.SiElasticsearch,
    }[skillName.toLowerCase()] || FaIcons.FaCode;

  return <Icon style={iconStyle} />;
};
