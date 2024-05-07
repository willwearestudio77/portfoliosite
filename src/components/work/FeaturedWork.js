import Link from 'next/link'
import Image from 'next/image'
import { compareDesc } from 'date-fns'

import workBG from '@/images/featured-work-item-bg.svg'
import { Container } from '@/components/Container'
import {
  WebDevelopmentIcon,
  ConsultingIcon,
  BrandingIcon,
  ProductDevelopmentIcon,
} from '../CategoryIcons'
import { allCaseStudies } from 'contentlayer/generated'

const iconOptions = {
  'Web Development': WebDevelopmentIcon,
  Consulting: ConsultingIcon,
  Branding: BrandingIcon,
  'Product Development': ProductDevelopmentIcon,
}

function CategoryIcon({ category, ...props }) {
  const Icon = iconOptions[category]

  return <Icon {...props} />
}

function CaseStudy({ caseStudy }) {
  console.log(caseStudy)
  console.log(caseStudy.cover_photo.data.attributes.url)
  return (

   <>
    <div
      key={caseStudy.Title}
      className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-slate-50 px-4 pb-14 pt-5 shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 sm:gap-12 sm:px-8 sm:pt-8 lg:grid-cols-12 lg:px-0 lg:py-0 xl:gap-16 xl:pt-16"
    >
      
      <div className="relative order-2 px-1 sm:px-4 lg:order-1 lg:col-span-6 lg:pb-16 lg:pl-12 lg:pt-16 xl:col-span-5 xl:pb-24 xl:pl-16 xl:pt-8">
        <div className="inline-flex items-center gap-2.5  text-sm font-medium leading-[16px] text-sky-900/80 sm:text-md">
          {/* <CategoryIcon
            category={caseStudy.tags[0]}
            className="h-4 w-4 text-sky-900/75"
          /> */}
          <span>{caseStudy.category}</span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-medium text-slate-900 sm:mt-6 sm:text-3xl">
          {caseStudy.summary_title}
        </h3>
        <p className="mt-3 text-md leading-8 text-slate-700 sm:mt-4 sm:text-base sm:leading-8">
          {caseStudy.summary_excerpt}
        </p>
        <Link
          href={`/work/${caseStudy.slug}`}
          className="group mt-14 flex items-center gap-2 text-sm font-medium text-sky-600 duration-200 ease-in-out hover:text-sky-700 sm:mt-16 sm:text-md"
        >
          View Case Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-sky-500 duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <Link
       href={`/work/${caseStudy.slug}`}
  className = "group aspect-h-9 aspect-w-16 relative order-1 h-full w-full overflow-hidden rounded-2xl ring-1 ring-slate-100/75 lg:order-2 lg:col-span-6 lg:rounded-l-none lg:rounded-r-none xl:col-span-7 xl:rounded-tl-2xl"
    >
    <Image
      src={caseStudy.cover_photo.data.attributes.url}
      alt={caseStudy.title}
      className="absolute inset-0 object-cover object-top transition duration-300 group-hover:scale-105"
      fill
      sizes="(min-width: 1280px) 43rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 4.5rem)"
    />
      </Link >
    </div >
    </>
  )
}

export function FeaturedWork({ casestudies }) {
  // const caseStudies = allCaseStudies
  //   .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  //   .slice(0, 4)

  return (
    <section className="overflow-x-clip bg-white pb-16 pt-8 sm:pb-24 sm:pt-12 md:pt-16">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Check out my latest work
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-slate-700 sm:mt-5">
            My goal is to create effective digital experiences that make
            people’s lives easier and better. I hope my work is a reflection of
            this.
          </p>
        </div>
        <div className="relative mx-auto mt-16 max-w-xl space-y-16 lg:mx-0 lg:max-w-none">
          {casestudies.map((caseStudy) => (
            <CaseStudy key={caseStudy.attributes.slug} caseStudy={caseStudy.attributes} />
          ))}
        </div>
      </Container>
    </section>
  )
}
