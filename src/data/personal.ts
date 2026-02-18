export interface Personal {
  name: string;
  role: string;
  company: string;
  url: string;
  tagline: string;
  bio: string;
  repository: string;
  resume: string;
}

export const personal: Personal = {
  name: "Andr\u00e9 Jesus",
  role: "Systems Engineer",
  company: "Cloudflare",
  url: "https://andrejesus.com",
  tagline: "Systems Engineer",
  bio: "I'm a Systems Engineer at Cloudflare, based in Lisbon. I enjoy building things across the full stack \u2014 from backend services and cloud infrastructure to clean, responsive frontends. I care about writing clear code, shipping reliable systems, and learning something new every week.",
  repository: "https://github.com/andre-j3sus/whoami",
  resume:
    "https://www.canva.com/design/DAFqHQqqaGk/A5weUCHWBrwn62I-qRZHhA/view?utm_content=DAFqHQqqaGk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hde1e82327d",
};
