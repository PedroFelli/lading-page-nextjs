export type ImageProps = {
  alternativeText: string
  url: string
}

export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type Concepts = {
  title: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: ImageProps
}

export type sectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title
  concepts: Concepts[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionPricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    url: string
    label: string
  }
}

export type SocialLinks = {
  title: string
  url: string
}

export type Author = {
  photo: ImageProps
  name: string
  role: string
  socialLinks?: SocialLinks[]
  description: string
}

export type sectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  text: string
  photo: { url: string }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type  Question = {
  answer: string
  question: string
}

export type  SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LadingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionAgenda: SectionAgendaProps
  sectionModules: SectionModulesProps
  pricingBox: SectionPricingBoxProps
  sectionAboutUs: sectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
