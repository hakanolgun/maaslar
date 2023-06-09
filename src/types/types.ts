export interface IData {
  level: string;
  position: string;
  tech_stack: string;
  experience: string;
  gender: string;
  company: string;
  company_size: string;
  work_type: string;
  city: string;
  currency: string;
  salary: string;
  raise_period: string;
}

export interface IFilter {
  position: string[];
  experience: string[];
  workType: string[];
  techStack: string[];
  city: string[];
}
