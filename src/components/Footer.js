import React from "react";
import KapstanLogo from '../assets/svg/Kapstan.svg';
import TwitterIcon from '../assets/svg/Twitter.svg';
import LinkedInIcon from '../assets/svg/LinkedIn.svg';
import YouTubeIcon from '../assets/svg/YouTube.svg';
import SupersetIcon from '../assets/svg/Superset.svg';

export default function Footer() {
  return (
    <footer className="container footer">
      <section className="mobile-column" style={{ justifyContent: 'space-between' }}>
        <div className="column footer-top-left" style={{ gap: '40px', justifyContent: 'space-between' }}>
          <div className="column" style={{ gap: '16px' }}>
            <a href="https://www.kapstan.io"><KapstanLogo style={{ height: '48px' }} /></a>
            <span>Kapstan automates your DevOps, letting your team focus on innovation. Deploy, monitor, and scale with ease.</span>
          </div>

          <div className="row socials" style={{ gap: '16px' }}>
            <a href="https://twitter.com/kapstan_infra" target="_blank" rel="noreferrer" style={{ height: '40px', width: '40px' }}>
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com/company/kapstan-infra" target="_blank" rel="noreferrer" style={{ height: '40px', width: '40px' }}>
              <LinkedInIcon />
            </a>
            <a href="https://www.youtube.com/@KapstanInfra" target="_blank" rel="noreferrer" style={{ height: '40px', width: '40px' }}>
              <YouTubeIcon />
            </a>
          </div>

          <div className="mobile-row" style={{ gap: '32px' }}>
            <div className="row" style={{ gap: '10px', display: 'flex', alignItems: 'center', fontSize: '16px', color: '#939393' }}>
              <img src="https://cdn.prod.website-files.com/663a32e9dbdcddf88cb44cc2/672877b02c485e7614e8bedc_21972-312_SOC_NonCPA_Blk.png" alt="soc2" style={{ width: '65px' }} />
              <span>SOC2 Type II</span>
            </div>

            <div className="row" style={{ gap: '10px' }}>
              <img src="https://cdn.prod.website-files.com/663a32e9dbdcddf88cb44cc2/672876b8b026f6397cea8883_646319918656cad4b7043845_cncf-silver-white-p-500.png" alt="cloud native member" style={{ height: '50px' }} />
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="column" style={{ gap: '24px' }}>
            <h4>Product</h4>

            <div className="links column" style={{ gap: '12px' }}>
              <a href="https://www.kapstan.io/solutions/soc-2" target="_blank" rel="noreferrer">SOC2 Compliance</a>
              <a href="https://www.kapstan.io/solutions/migrate-from-heroku-to-aws" target="_blank" rel="noreferrer">Migrate from Heroku</a>
              <a href="https://www.kapstan.io/solutions/migrate-from-vercel-to-aws" target="_blank" rel="noreferrer">Migrate from Vercel</a>
              <a href="https://www.kapstan.io/solutions/kubernetes-for-developers" target="_blank" rel="noreferrer">Kubernetes for Developers</a>
              <a href="https://www.kapstan.io/environment-management" target="_blank" rel="noreferrer">Environment management</a>
              <a href="https://www.kapstan.io/ci-cd" target="_blank" rel="noreferrer">CI/CD</a>
            </div>
          </div>

          <div className="column" style={{ gap: '24px' }}>
            <h4>By Stage</h4>

            <div className="links column" style={{ gap: '12px' }}>
              <a href="https://www.kapstan.io/enterprise" target="_blank" rel="noreferrer">Enterprise</a>
              <a href="https://www.kapstan.io/startups" target="_blank" rel="noreferrer">Startups</a>
            </div>
          </div>

          <div className="column" style={{ gap: '24px' }}>
            <h4>Resources</h4>

            <div className="links column" style={{ gap: '12px' }}>
              <a href="https://docs.kapstan.io/docs/intro" target="_blank" rel="noreferrer">Docs</a>
              <a href="https://docs.kapstan.io/changelog" target="_blank" rel="noreferrer">Changelog</a>
              <a href="https://www.kapstan.io/blog" target="_blank" rel="noreferrer">Blog</a>
              <a href="https://public.kapstan.io/Internal_Developer_Platform_Whitepaper_by_Kapstan.pdf" target="_blank" rel="noreferrer">White paper</a>
            </div>
          </div>

          <div className="column" style={{ gap: '24px' }}>
            <h4>Company</h4>

            <div className="links column" style={{ gap: '12px' }}>
              <a href="https://www.kapstan.io/about-us" target="_blank" rel="noreferrer">About</a>
              <a href="https://www.kapstan.io/pricing" target="_blank" rel="noreferrer">Pricing</a>
              <a href="https://www.kapstan.io/case-studies" target="_blank" rel="noreferrer">Customers</a>
              <a href="https://www.kapstan.io/contact-us" target="_blank" rel="noreferrer">Contact</a>
              <a href="https://www.kapstan.io/free-devops-audit" target="_blank" rel="noreferrer" style={{ color: '#A871FF' }}>Free DevOps Audit</a>
            </div>
          </div>

        </div>
      </section>

      <section className="row" style={{ justifyContent: 'space-between', fontSize: '12px' }}>
        <div className="row" style={{ gap: '12px', fontWeight: 500, alignItems: 'center', opacity: 0.7 }}>
          <a href='https://www.superset.com/' target="_blank" rel="noreferrer">
            <SupersetIcon height='36px' width='36px' />
          </a>
          © {new Date().getFullYear()} Kapstan. All rights reserved.
        </div>

        <div className="row" style={{ gap: '12px', textDecoration: 'underline', opacity: 0.6 }}>
          <a href="https://www.kapstan.io/privacy-policy" target="_blank" rel="noreferrer">Privacy policy</a>
          <a href="https://www.kapstan.io/terms-and-conditions" target="_blank" rel="noreferrer">Terms & conditions</a>
          <a href="https://trust.kapstan.io/" target="_blank" rel="noreferrer">Security & compliance</a>
        </div>
      </section>
    </footer>
  )
}