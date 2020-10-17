export type LogoProps = {
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
  image: {
    alternativeText: string
    url: string
  }
}

export type sectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
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

export type sectionAboutUsProps = {
  title: string
  authors: {
    photo: {
      alternativeText: string
      url: string
    }
    name: string
    role: string
    socialLinks: {
      title: string
      url: string
    }
    description: string
  }
}

export type LadingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionAgenda: SectionAgendaProps
  sectionModules: SectionModulesProps
  pricingBox: SectionPricingBoxProps
  sectionAboutUs: sectionAboutUsProps
}
