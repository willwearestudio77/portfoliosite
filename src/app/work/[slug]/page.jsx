import { CaseStudyHero } from '@/components/work/CaseStudyHero'
import { CaseStudyDetails } from '@/components/work/CaseStudyDetails'
import { CaseStudyGallery } from '@/components/work/CaseStudyGallery'
import { CaseStudyTestimonial } from '@/components/work/CaseStudyTestimonial'
import { CaseStudyNavigation } from '@/components/work/CaseStudyNavigation'
import { allCaseStudies } from 'contentlayer/generated'
import { MdxContent } from '@/components/mdx/MdxContent'
import { Footer } from '@/components/Footer'

export const generateStaticParams = async () =>
  allCaseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))

export async function generateMetadata({ params }) {
  const caseStudy = allCaseStudies.find(
    (caseStudy) => caseStudy.slug === params.slug
  )
  return { title: caseStudy.title, description: caseStudy.description }
}

export default function CaseStudyPage({ params }) {
  const caseStudy = allCaseStudies.find(
    (caseStudy) => caseStudy.slug === params.slug
  )

  return (
    <>
      <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        tags={caseStudy.tags}
        coverImage={caseStudy.coverImage}
      />
      <CaseStudyDetails
        client={caseStudy.client}
        description={caseStudy.description}
        projectDuration={caseStudy.projectDuration}
        projectURL={caseStudy.projectURL}
      >
        <MdxContent code={caseStudy.body.code} />
      </CaseStudyDetails>
      <CaseStudyGallery images={caseStudy.images} />
      <CaseStudyTestimonial
        clientName={caseStudy.client.name}
        testimonial={caseStudy.testimonial}
      />
      <CaseStudyNavigation caseStudySlug={caseStudy.slug} />
      <Footer newsletter={false} />
    </>
  )
}

export const dynamicParams = false
