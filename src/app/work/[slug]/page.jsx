import { CaseStudyHero } from '@/components/work/CaseStudyHero'
import { CaseStudyDetails } from '@/components/work/CaseStudyDetails'
import { CaseStudyGallery } from '@/components/work/CaseStudyGallery'
import { CaseStudyTestimonial } from '@/components/work/CaseStudyTestimonial'
import { CaseStudyNavigation } from '@/components/work/CaseStudyNavigation'
import { allCaseStudies } from 'contentlayer/generated'
import { MdxContent } from '@/components/mdx/MdxContent'
import { Footer } from '@/components/Footer'
import { getWork } from '@/lib/strapi'

// export const generateStaticParams = async () =>
//   allCaseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))

// export async function generateMetadata({ params }) {
//   const caseStudy = allCaseStudies.find(
//     (caseStudy) => caseStudy.slug === params.slug
//   )
//   return { title: caseStudy.title, description: caseStudy.description }
// }


export default async function CaseStudyPage({ params }) {
  const caseStudy = await getWork(params.slug);
  
  const caseStudyData = await caseStudy.caseStudies.data[0].attributes;
  
  const categories = caseStudyData.category.split(',').map(item => item.trim());
  console.log(caseStudyData)
  return (
    <>
      <CaseStudyHero
        title={caseStudyData.hero_heading}
        subtitle={caseStudy.Title}
        tags={categories}
        coverImage={caseStudyData.cover_photo.data.attributes.url}
      />
      <CaseStudyDetails
        client={caseStudyData.client}
        description={caseStudyData.hero_body}
        projectDuration={caseStudyData.duration}
        projectURL={caseStudyData.projectURL}
      >
        <div>{caseStudyData.tags}</div>
        {/* <MdxContent code={caseStudyData.tags} /> */}
      </CaseStudyDetails>
      {/* <CaseStudyGallery images={caseStudy.images} /> */}
      {/* <CaseStudyTestimonial
        clientName={caseStudyData.name}
        testimonial={caseStudyData.review}
      /> */}
      <CaseStudyNavigation caseStudySlug={caseStudy.slug} />
      <Footer newsletter={false} />
    </>
  )
}

export const dynamicParams = false
