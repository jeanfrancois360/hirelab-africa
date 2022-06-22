export interface RegisterInt{
    first_name: string
    last_name: string
    company_name: string
    company_description: string
    email: string,
    password: string,
    password_confirmation: string
}

export interface LoginInt{
    email: string
    password: string
}