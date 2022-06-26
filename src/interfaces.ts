export interface IRegister {
  first_name: string;
  last_name: string;
  company_name: string;
  company_description: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IJobCategory {
  [x: string]: any;
  id?: number;
  name: string;
  slug?: string;
  uuid?: string;
  status: string;
  created_at?: Date;
  update_at?: Date;
}

export interface IJobPost {
  [x: string]: any;
  id?: number;
  slug?: string;
  uuid?: string;
  title: string;
  description: string;
  salary_range?: string;
  address: string;
  type: string;
  workspace: string;
  status: string;
  posted_by: number;
  job_category_id: number;
  created_at?: Date;
  update_at?: Date;
}
