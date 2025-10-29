type ResumeImageData = {
  url: string;
  visible: boolean;
};

type ResumeInfosData = {
  fullName: string;
  headline: string;
  email: string;
  website: string;
  phone: string;
  location: string;
};
type ResumeSocialMediaData = {
  name: string;
  username: string;
  url: string;
  icon: string;
};

type ResumeContentData = {
  image: ResumeImageData;
  infos: ResumeInfosData;
  summary: string;
  socialMedias: Partial<ResumeSocialMediaData>[];
  experiences: Partial<ResumeExperienceData>[];
  educations: Partial<ResumeEducationData>[];
  skills: Partial<ResumeSkillData>[];
  languages: Partial<ResumeLanguageData>[];
  certifications: Partial<ResumeCertificationData>[];
  projects: Partial<ResumeProjectData>[];
};
  
type ResumeLayoutSection = {
  id?: string,
  key:ResumeLanguages
}

type ResumeSections =
  | "summary"
  | "socialMedias"
  | "experiences"
  | "educations"
  | "skills"
  | "languages"
  | "certifications"
  | "projects";
 type ResumeLanguages = "english" | "spanish" | "french" | "german" | "italian" | "portuguese"
type ResumeStructureData ={
  template: ResumeTemplates
  colorTheme: string
  layout: {
    mainSections:{ key: string }[],
    sidebarSections:{ key: string }[],
  },
   language: ResumeLanguages
}

type ResumeData = {
  content: ResumeContentData;
  structure: ResumeStructureData;
};

type ResumeTemplates = "eevee" | "onix" | "jynx" |"ditto"
