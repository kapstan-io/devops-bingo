import Redirect from '../redirect';

export const metadata = {
  title: 'Firefighter | Kapstan DevOps Bingo 2024',
  openGraph: {
    title: 'Firefighter | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/firefighter.png' }],
  },
  twitter: {
    title: 'Firefighter | Kapstan DevOps Bingo 2024',
    description: 'Find out your DevOps persona by playing the DevOps Bingo',
    images: [{ url: 'https://devops-bingo.demo.kapstan.app/personas/firefighter.png' }],
    card: 'summary_large_image',
    site: '@kapstan_infra',
  }
};

export default function OgExamplePage() {
  return <Redirect />
}