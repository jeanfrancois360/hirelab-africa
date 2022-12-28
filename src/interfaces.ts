export interface IRegister {
  first_name: string;
  last_name: string;
  company_name: string;
  company_description: string;
  email: string;
  password: string;
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
  updated_at?: Date;
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
  job_category_id: number | string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IBlogPost {
  [x: string]: any;
  id?: number;
  slug?: string;
  uuid?: string;
  title: string;
  description: string;
  status: string;
  image: string;
  author: number;
  blog_category_id: number | string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IBlogCategory {
  [x: string]: any;
  id?: number;
  name: string;
  slug?: string;
  uuid?: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ICv {
  id?: number;
  file: string;
  candidate: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface IJobApplication {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  address: string;
  postcode: string;
  file: string;
  cover_letter: string;
  job_post_uuid: string;
  candidate: number;
  status: string;
  cv_id?: number;
}

export interface IProfile {
  id?: number;
  first_name?: string;
  last_name?: string;
  company_name?: string;
  company_description?: string;
  email: string;
  phone?: string;
  city?: string;
  country?: string;
  address?: string;
  postcode?: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IRole {
  id?: number;
  slug?: string;
  uuid?: string;
  name: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IUser {
  id?: number;
  email: string;
  role?: IRole;
  profile?: IProfile;
  cv?: ICv;
  created_at?: Date;
  updated_at?: Date;
}

export interface ICompany {
  company_name: string;
  company_description: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  address: string;
  postcode: string;
  password: string;
  avatar: string;
  status: string;
  role: string;
}

export interface IContactUs {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}
