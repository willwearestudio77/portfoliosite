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
  }`