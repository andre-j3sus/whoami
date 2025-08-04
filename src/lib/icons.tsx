import * as Icons from "react-icons/si";
import * as DevIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";

// Icon mapping function
export const getSkillIcon = (skillName: string, color: string) => {
  const iconSize = 32;
  const iconStyle = { color, fontSize: iconSize };

  switch (skillName.toLowerCase()) {
    case "java":
      return <FaIcons.FaJava style={iconStyle} />;
    case "kotlin":
      return <Icons.SiKotlin style={iconStyle} />;
    case "javascript":
      return <Icons.SiJavascript style={iconStyle} />;
    case "typescript":
      return <Icons.SiTypescript style={iconStyle} />;
    case "c":
      return <Icons.SiC style={iconStyle} />;
    case "c#":
      return <Icons.SiSharp style={iconStyle} />;
    case "python":
      return <Icons.SiPython style={iconStyle} />;
    case "git":
      return <Icons.SiGit style={iconStyle} />;
    case "github":
      return <Icons.SiGithub style={iconStyle} />;
    case "jenkins":
      return <Icons.SiJenkins style={iconStyle} />;
    case "github actions":
      return <Icons.SiGithubactions style={iconStyle} />;
    case "latex":
      return <Icons.SiLatex style={iconStyle} />;
    case "html5":
      return <Icons.SiHtml5 style={iconStyle} />;
    case "css3":
      return <Icons.SiCss3 style={iconStyle} />;
    case "nodejs":
      return <Icons.SiNodedotjs style={iconStyle} />;
    case "expressjs":
      return <Icons.SiExpress style={iconStyle} />;
    case "reactjs":
      return <Icons.SiReact style={iconStyle} />;
    case "material-ui":
      return <Icons.SiMui style={iconStyle} />;
    case "bootstrap":
      return <Icons.SiBootstrap style={iconStyle} />;
    case "webpack":
      return <Icons.SiWebpack style={iconStyle} />;
    case "spring":
      return <Icons.SiSpring style={iconStyle} />;
    case "nginx":
      return <Icons.SiNginx style={iconStyle} />;
    case "postman":
      return <Icons.SiPostman style={iconStyle} />;
    case "docker":
      return <Icons.SiDocker style={iconStyle} />;
    case "linux":
      return <Icons.SiLinux style={iconStyle} />;
    case "android":
      return <Icons.SiAndroid style={iconStyle} />;
    case "google cloud platform":
      return <Icons.SiGooglecloud style={iconStyle} />;
    case "postgresql":
      return <Icons.SiPostgresql style={iconStyle} />;
    case "mongodb":
      return <Icons.SiMongodb style={iconStyle} />;
    case "elasticsearch":
      return <Icons.SiElasticsearch style={iconStyle} />;
    default:
      return <FaIcons.FaCode style={iconStyle} />;
  }
};
