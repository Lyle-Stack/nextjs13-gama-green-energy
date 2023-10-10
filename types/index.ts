export interface NavbarProps {
    lang: '中文' | 'En';
    pages: {
        name: string;
        pathName: string;
    }[]
}

export interface HeroSectionProps {
    title: string;
    subtitle: string;
}

export interface AboutUsSectionProps {
    imagePart: {
        title: string;
        description: string;
    }[];
    descriptionPart: {
        title: string;
        titileDes: string;
        subtitleFirstLine: string;
        subtitleSecondLine: string;
        contentFirstPara: string;
        contentSecondPara: string;
    };
}

export interface SolutionSectionProps {
    title: string;
    titleDes: string;
    subtitleFirst: string;
    contentFirst: string[];
    subtitleSecond: string[];
    contentSecond: string[];
    subtitleThird: string;
    contentThird: string[];
}

export interface CostEffectivenessSectionProps {
    title: string;
    titleDes: string;
    stage: string[];
    listDescription: string[];
}

export interface PracticalCaseSectionProps {
    title: string;
    subtitleFirst: string;
    contentFirst: string;
    subtitleSecond: string;
    contentSecond: string[];
    subtitleThird: string;
    contentThird: string;
    picGridSubtitle: string[];
}

export interface OurStrengthSectionProps {
    title: string;
    cards: {
        title: string;
        titleDes: string;
    }[];
}

export interface FaqSectionProps {
    title: string;
    subtitleFuel: string;
    qaFuel: {
        q: string;
        a: string;
    }[];
    subtitleTechnology: string;
    qaTechnology: {
        q: string;
        a: string;
    }[];
    subtitlePowGen: string;
    qaPowGen: {
        q: string;
        a: string;
    }[];
    subtitleApplication: string;
    qaApplication: {
        q: string;
        a: string;
    }[];
}

export interface PartnerSectionProps {
    title: string;
    titleDes: string;
}

export interface FooterProps {
    title: string;
    office: string;
    phone: string;
    fax: string;
    workHour: string;
    email: string;
    cta: string;
}

export default interface HomeProps {
    navbar: NavbarProps;
    heroSection: HeroSectionProps;
    aboutUsSection: AboutUsSectionProps;
    solutionSection: SolutionSectionProps;
    costEffectivenessSection: CostEffectivenessSectionProps;
    practicalCaseSection: PracticalCaseSectionProps;
    ourStrengthSection: OurStrengthSectionProps;
    faqSection: FaqSectionProps;
    partnerSection: PartnerSectionProps;
    footer: FooterProps;
} 