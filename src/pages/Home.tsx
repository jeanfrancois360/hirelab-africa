import React from 'react'
import { CallOut } from '../components/CallOut'
import { CategoryBoxes } from '../components/CategoryBoxes'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { IntroBanner } from '../components/IntroBanner'
import { HomeJobListSection } from '../components/HomeJobListSection'
import { NeedHelp } from '../components/NeedHelp'
import { Subscribe } from '../components/Subscribe'
import { Helmet } from 'react-helmet-async'
import { useQuery, UseQueryResult } from 'react-query'
import { ICompany, IJobApplication, IJobPost } from '../interfaces'
import { GetJobPosts } from '../api/job-post'
import { GetJobApplications } from '../api/job-application'
import { GetCompanies } from '../api/company'

export default function Home() {

  // Fetch All Job Posts
  const { data: job_posts }: UseQueryResult<IJobPost[], Error> = useQuery<IJobPost[], Error>('job-posts', GetJobPosts);

  // Fetch All Application
  const { data: job_applications }: UseQueryResult<IJobApplication[], Error> = useQuery<IJobApplication[], Error>('job-applications', GetJobApplications);

  // Fetch All Companies
  const { data: companies }: UseQueryResult<ICompany[], Error> = useQuery<ICompany[], Error>('companies', GetCompanies);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Hirelab Africa</title>
        <link rel="canonical" href="/" />
        <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
      </Helmet>
      <div id="wrapper">
        <Header current={'home'} />
        <IntroBanner dataset={{ job_posts, job_applications, companies }} />
        <CategoryBoxes />
        <HomeJobListSection />
        <CallOut />
        <NeedHelp />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
