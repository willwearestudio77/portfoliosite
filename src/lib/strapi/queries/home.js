export const getHome = `query homeQuery {
    page(id: "1") {
      data {
        attributes {
          Title
          hero_heading
          hero_image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          projects_worked_on
          years_experience
        }
      }
    }
    cvDownload {
        data {
          attributes {
            cvfile {
              data {
                attributes {
                  ext
                  createdAt
                  caption
                  alternativeText
                  formats
                  size
                  url
                }
              }
            }
          }
        }
      }
      caseStudies {
        data {
          attributes {
            Title
            images {
              data {
                attributes {
                  url
                  height
                  width
                  alternativeText
                }
              }
            }
            body_title
            body
            client
            client_title
            company_size
            cover_photo {
              data {
                attributes {
                  url
                  width
                  height
                  alternativeText
                }
              }
            }
            hero_body
            hero_heading
            duration
            industry
            name
            platform
            publishedAt
            review
            summary_excerpt
            summary_title
            tags
            slug
          }
        }
      }
  }`
  export const slugQuery = `query slugQuery {
    caseStudies {
      data {
        id
        attributes {
          slug
        }
      }
    }
  }`

  export const workQuery =`query MyWork($filters:CaseStudyFiltersInput){
    caseStudies(filters: $filters) {
      data {
        attributes {
          slug
          Title
          avatar {
            data {
              attributes {
                width
                height
                url
                alternativeText
              }
            }
          }
          body
          body_title
          category
          client
          client_title
          company_size
          cover_photo {
            data {
              attributes {
                alternativeText
                url
                width
                height
              }
            }
          }
          duration
          hero_body
          hero_heading
          images {
            data {
              attributes {
                alternativeText
                width
                url
                height
              }
            }
          }
          review
          industry
          name
          tags
          summary_title
          summary_excerpt
        }
      }
    }
  }`