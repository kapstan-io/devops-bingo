import Redirect from '../redirect';

export const metadata = {
  title: 'Cleanup Commander | Kapstan DevOps Bingo 2024',
  openGraph: {
    title: 'Cleanup Commander | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/cleaner.png' }],
  },
  twitter: {
    title: 'Cleanup Commander | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps persona by playing the DevOps Bingo',
    card: 'summary_large_image',
    site: '@kapstan_infra',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/cleaner.png' }],
  }
};

export default function OgExamplePage() {
  return <Redirect />
}