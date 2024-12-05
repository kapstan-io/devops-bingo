import Redirect from '../redirect';

export const metadata = {
  title: 'Guardian | Kapstan DevOps Bingo 2024',
  openGraph: {
    title: 'Guardian | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/guardian.png' }],
  },
  twitter: {
    title: 'Guardian | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/guardian.png' }],
    card: 'summary_large_image',
    site: '@kapstan_infra',
  }
};

export default function OgExamplePage() {
  return <Redirect />
}