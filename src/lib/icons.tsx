import * as Icons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

// Icon mapping function
export const getSkillIcon = (skillName: string, color: string) => {
  const iconSize = 32;
  const iconStyle = { color, fontSize: iconSize };

  const Icon =
    {
      "cloudflare workers": Icons.SiCloudflareworkers,
      "github actions": Icons.SiGithubactions,
      "google cloud platform": Icons.SiGooglecloud,
      android: Icons.SiAndroid,
      css3: Icons.SiCss3,
      docker: Icons.SiDocker,
      eslint: Icons.SiEslint,
      fastapi: Icons.SiFastapi,
      git: Icons.SiGit,
      grafana: Icons.SiGrafana,
      graphql: Icons.SiGraphql,
      html5: Icons.SiHtml5,
      java: FaIcons.FaJava,
      javascript: Icons.SiJavascript,
      jest: Icons.SiJest,
      kotlin: Icons.SiKotlin,
      kubernetes: Icons.SiKubernetes,
      linux: Icons.SiLinux,
      mongodb: Icons.SiMongodb,
      nodejs: Icons.SiNodedotjs,
      postgresql: Icons.SiPostgresql,
      prettier: Icons.SiPrettier,
      prometheus: Icons.SiPrometheus,
      python: Icons.SiPython,
      react: Icons.SiReact,
      remix: Icons.SiRemix,
      sentry: Icons.SiSentry,
      spring: Icons.SiSpring,
      terraform: Icons.SiTerraform,
      typescript: Icons.SiTypescript,
      vite: Icons.SiVite,
    }[skillName.toLowerCase()] || FaIcons.FaCode;

  return <Icon style={iconStyle} />;
};
