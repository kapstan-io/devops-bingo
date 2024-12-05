import Redirect from '../redirect';

export const metadata = {
  title: 'Detective | Kapstan DevOps Bingo 2024',
  openGraph: {
    title: 'Detective | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps Persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/detective.png' }],
  },
  twitter: {
    title: 'Detective | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps Persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/detective.png' }],
    card: 'summary_large_image',
    site: '@kapstan_infra',
  }
};

export default function OgExamplePage() {
  return <Redirect />
}