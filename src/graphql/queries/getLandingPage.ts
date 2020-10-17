const GET_LANDING_PAGE = /* GraphQL */ `
fragment logo on LandingPage {
  logo {
    alternativeText
    url
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      alternativeText
      url
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      alternativeText
      url
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      title
      icon {
        url
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionAgenda on LandingPage {
  sectionAgenda {
    title
    description
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment sectionPricingBox on LandingPage {
  pricingBox {
    totalPrice
    numberInstallments
    priceInstallment
    benefits
    button {
      label
      url
    }
  }
}

fragment sectionAboutUs on LandingPage {
  sectionAboutUs {
    title
    authors {
      photo {
        alternativeText
        url
      }
      name
      role
      socialLinks {
        id
        title
        url
      }
      description
    }
  }
}

fragment sectionReviews on LandingPage{
  sectionReviews{
    title
    reviews{
      name
      text
      photo {
        url
      }
    }
  }
}

fragment sectionFaq on LandingPage{
  sectionFaq{
    title
    questions{
      answer
      question
    }
  }
}

query GET_LADING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAboutProject
    ...sectionTech
    ...sectionConcepts
    ...sectionAgenda
    ...sectionModules
    ...sectionPricingBox
    ...sectionAboutUs
    ...sectionReviews
    ...sectionFaq
  }
}

`

export default GET_LANDING_PAGE
