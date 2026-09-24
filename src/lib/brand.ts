import {
  siDocker,
  siDotnet,
  siFigma,
  siGit,
  siGooglecloud,
  siJavascript,
  siLangchain,
  siPostgresql,
  siPython,
  siPytorch,
  siScikitlearn,
  siTensorflow,
} from "simple-icons";

export type Brand = {
  name: string;
  /** SVG path data (24x24 viewBox) when a legitimate brand mark is available. */
  path?: string;
  /** Brand hex, without the leading #. */
  hex: string;
  /** Rendered as a wordmark when no legitimate logo asset exists. */
  wordmark?: string;
  /** Logo already contains the name, so skip the text label. */
  iconOnly?: boolean;
};

/** Technologies actually used in Rashaad's work. */
export const TECH_ROW_ONE: Brand[] = [
  { name: "Python", path: siPython.path, hex: siPython.hex },
  { name: "PyTorch", path: siPytorch.path, hex: siPytorch.hex },
  { name: "TensorFlow", path: siTensorflow.path, hex: siTensorflow.hex },
  { name: "scikit-learn", path: siScikitlearn.path, hex: siScikitlearn.hex },
  { name: "LangChain", path: siLangchain.path, hex: "1C7C6B" },
  { name: "JavaScript", path: siJavascript.path, hex: siJavascript.hex },
  { name: ".NET", path: siDotnet.path, hex: siDotnet.hex, iconOnly: true },
  { name: "Git", path: siGit.path, hex: siGit.hex },
];

export const TECH_ROW_TWO: Brand[] = [
  { name: "Azure", wordmark: "Azure", hex: "0078D4" },
  { name: "AWS", wordmark: "AWS", hex: "FF9900" },
  { name: "Google Cloud", path: siGooglecloud.path, hex: siGooglecloud.hex },
  { name: "Docker", path: siDocker.path, hex: siDocker.hex },
  { name: "SQL", path: siPostgresql.path, hex: siPostgresql.hex },
  { name: "Power BI", wordmark: "Power BI", hex: "E8B008" },
  { name: "Figma", path: siFigma.path, hex: siFigma.hex },
];

export const ALL_TECH: Brand[] = [...TECH_ROW_ONE, ...TECH_ROW_TWO];

export const TECH_BY_NAME: Record<string, Brand> = Object.fromEntries(
  ALL_TECH.map((b) => [b.name, b]),
);

/** Employers. Typographic marks, since no licensed logo assets are available. */
export const COMPANY_BRAND: Record<string, { hex: string; mark: string }> = {
  magpie: { hex: "1C7C6B", mark: "Talk to Magpie AI" },
  harrods: { hex: "7A6320", mark: "HARRODS" },
  perficient: { hex: "C8102E", mark: "Perficient" },
  "code-facts": { hex: "3D6BB3", mark: "Code Facts" },
  vit: { hex: "1E3A8A", mark: "VIT University\u00a0" },
};

/** Perficient client contexts. Core GenAI is a platform, not a company. */
export const CLIENT_BRAND: Record<
  string,
  { hex: string; mark: string; kind: "client" | "platform" }
> = {
  caterpillar: { hex: "B9891A", mark: "CATERPILLAR", kind: "client" },
  aristocrat: { hex: "8A2F4A", mark: "Aristocrat", kind: "client" },
  northshore: { hex: "2F6DA8", mark: "NorthShore Care", kind: "client" },
  "core-genai": { hex: "1C7C6B", mark: "CORE GENAI", kind: "platform" },
};

export const CONTACT = {
  email: "syedrashaad01@gmail.com",
  linkedin: "https://www.linkedin.com/in/syed-rashaad/",
};
