import { FaqType } from "@/app/types/faq";
import { FeatureType } from "@/app/types/features";
import { FooterType } from "@/app/types/footerlink";
import { HeaderItem } from "@/app/types/menu";
import { SocialType } from "@/app/types/sociallink";
import { WorkType } from "@/app/types/work";

export const Headerdata: HeaderItem[] = [
  { label: "Home", href: "/" },
  // { label: "Exchange", href: "/#exchange-section" },
  { label: "Features", href: "/#relative-section" },
  { label: "FAQ", href: "/#faq-section" },
  { label: "Contact Us", href: "/#contact" },
  // { label: "Docs", href: "/documentation" },
];

const basePath = process.env.NODE_ENV === "production" ? "" : "";

// export const Companiesdata: { imgSrc: string }[] = [
//   {
//     imgSrc: `${basePath}/images/companies/birdseye.svg`,
//   },
//   {
//     imgSrc: `${basePath}/images/companies/break.svg`,
//   },
//   {
//     imgSrc: `${basePath}/images/companies/keddar.svg`,
//   },
//   {
//     imgSrc: `${basePath}/images/companies/shield.svg`,
//   },
//   {
//     imgSrc: `${basePath}/images/companies/tandov.svg`,
//   },
//   {
//     imgSrc: `${basePath}/images/companies/tree.svg`,
//   },
// ];

export const workdata: WorkType[] = [
  {
    imgSrc: `${basePath}/images/work/icon-one.svg`,
    heading: "Get Started Instantly",
    subheading:
      "Open the app and start managing your apps and screen time right away. No sign-up, no login — just set your limits, track usage, and take control of your digital life in seconds.",
  },
  {
    imgSrc: `${basePath}/images/work/add-app.png`,
    heading: "Add Apps",
    subheading:
      "Select the apps you want to manage and set daily usage limits. Discipline will track your usage, block distractions, and help you stay focused — all automatically.",
  },
  {
    imgSrc: `${basePath}/images/work/manage-app.png`,
    heading: "Manage & Control Apps",
    subheading:
      "Easily set limits, block distractions, and monitor your app usage in real time. Stay focused, build healthy habits, and take control of your digital life effortlessly.",
  },
];

export const Featuresdata: FeatureType[] = [
  {
    imgSrc: `${basePath}/images/features/featureOne.svg`,
    heading: "Secure Storage",
    subheading:
      "Your crypto is protected with advanced encryption and offline cold wallets, ensuring top-tier security and privacy.",
  },
  {
    imgSrc: `${basePath}/images/features/featureTwo.svg`,
    heading: "Free to Use",
    subheading:
      "Enjoy powerful portfolio tracking, live analytics, and account management tools — all without any hidden fees.",
  },
  {
    imgSrc: `${basePath}/images/features/featureThree.svg`,
    heading: "Real-Time Price Data",
    subheading:
      "Get live crypto prices, market updates, and real-time data from top global exchanges — all in one place, 24/7.",
  },
];

export const Faqdata: FaqType[] = [
  {
    heading: "1. How does Discipline help me stay focused?",
    subheading:
      "Discipline tracks your app usage in real time and automatically blocks distracting apps when you reach your daily limit. It helps you stay focused, reduce screen time, and build healthier digital habits.",
  },
  {
    heading: "2. Do I need to create an account or sign in?",
    subheading:
      "No, Discipline works instantly without any sign-up or login. Just open the app, choose which apps you want to manage, and set your daily time limits — it’s that simple.",
  },
  {
    heading: "3. Can I set different time limits for each app?",
    subheading:
      "Yes, you can customize time limits individually for each app. Discipline gives you complete control over your daily usage so you can balance productivity and downtime effortlessly.",
  },
];


export const Sociallinkdata: SocialType[] = [
  {
    imgsrc: `${basePath}/images/footer/insta.svg`,
    href: "https://instagram.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/dribble.svg`,
    href: "https://dribble.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/twitter.svg`,
    href: "https://twitter.com/",
  },
  {
    imgsrc: `${basePath}/images/footer/youtube.svg`,
    href: "https://youtube.com/",
  },
];

export const Footerlinkdata: FooterType[] = [
  { label: "Home", href: "/" },
  // { label: "Exchange", href: "/#exchange-section" },
  { label: "Features", href: "/#features-section" },
  { label: "FAQ", href: "/#faq-section" },
  { label: "Contact Us", href: "/#contact" },
];
