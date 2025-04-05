export interface FooterLink {
    label: string;
    href: string;
    src?: string;
  }
  
export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface PaymentMethod {
  name: string
  src: string
  alt: string
}
  
  export const footerSections: FooterSection[] = [
    {
      title: "COMPANY",
      links: [
        { label: "About", href: "/about" },
        { label: "Features", href: "/features" },
        { label: "Works", href: "/works" },
        { label: "Career", href: "/career" },
      ],
    },
    {
      title: "HELP",
      links: [
        { label: "Customer Support", href: "/support" },
        { label: "Delivery Details", href: "/delivery" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "FAQ",
      links: [
        { label: "Account", href: "/account" },
        { label: "Manage Deliveries", href: "/manage-deliveries" },
        { label: "Orders", href: "/orders" },
        { label: "Payments", href: "/payments" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { label: "Free eBooks", href: "/ebooks" },
        { label: "Development Tutorial", href: "/tutorials" },
        { label: "How to - Blog", href: "/blog" },
        { label: "YouTube Playlist", href: "/youtube" },
      ],
    },
  ];
  
  export const socialLinks: FooterLink[] = [
    { label: "Twitter", href: "https://twitter.com", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872766/1_qlgjcw.svg" },
    { label: "Facebook", href: "https://facebook.com", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872766/2_bpjcct.svg" },
    { label: "Instagram", href: "https://instagram.com", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872766/3_wcmdih.svg" },
    { label: "GitHub", href: "https://github.com", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872765/4_zeamng.svg" },
  ];
  
  export const paymentMethods: PaymentMethod[] = [
    { name: "Visa", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872617/Badge_fgvh48.svg", alt: "Visa" },
    { name: "Mastercard", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872617/Badge_1_lciyfb.svg", alt: "Mastercard" },
    { name: "Paypal", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872617/Badge_2_roemuk.svg", alt: "Paypal" },
    { name: "Apple Pay", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872617/Badge_3_rb0c45.svg", alt: "Apple Pay" },
    { name: "Google Pay", src: "https://res.cloudinary.com/dxspvj1rj/image/upload/v1743872617/Badge_4_cqnbtz.svg", alt: "Google Pay" },
  ];