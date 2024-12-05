import Redirect from '../redirect';

export const metadata = {
  title: 'Flash | Kapstan DevOps Bingo 2024',
  openGraph: {
    title: 'Flash | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps Persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/flash.png' }],
  },
  twitter: {
    title: 'Flash | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps Persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/flash.png' }],
    card: 'summary_large_image',
    site: '@kapstan_infra',
  }
};

export default function OgExamplePage() {
  return <Redirect />
}