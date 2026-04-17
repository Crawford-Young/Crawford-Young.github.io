import { Hero } from '@/components/home/hero'
import { BentoGrid, BentoCell } from '@/components/home/bento-grid'
import { AboutCard } from '@/components/home/about-card'
import { RoleCard } from '@/components/home/role-card'
import { CommunityCard } from '@/components/home/community-card'
import { FeaturedProjectCard } from '@/components/home/featured-project-card'
import { HobbiesTeaserCard } from '@/components/home/hobbies-teaser-card'
import { ContactCard } from '@/components/home/contact-card'
import { GitHubStatsCard } from '@/components/home/github-stats-card'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-5xl px-6 pb-16">
        <BentoGrid>
          <BentoCell span="wide">
            <AboutCard />
          </BentoCell>
          <BentoCell>
            <RoleCard />
          </BentoCell>

          <BentoCell>
            <CommunityCard />
          </BentoCell>
          <BentoCell>
            <FeaturedProjectCard />
          </BentoCell>
          <BentoCell>
            <HobbiesTeaserCard />
          </BentoCell>

          <BentoCell span="wide" id="contact">
            <ContactCard />
          </BentoCell>
          <BentoCell>
            <GitHubStatsCard />
          </BentoCell>
        </BentoGrid>
      </div>
    </>
  )
}
