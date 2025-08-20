import { TimelineItem } from "../components/TimelineItem";
import Section from "../components/Section";

export default function Leadership() {
  return (
    <>
      <Section title="Leadership" subtitle="Clubs, roles, and initiatives.">
        <div className="grid md:grid-cols-2 gap-6">
          <TimelineItem
            org="National Honor Society"
            role="President / Officer"
            period="2024–2025"
            points={[
              "Organized service events and tracking system",
              "Introduced data-driven dashboard for hours",
              "Led officer team and community outreach",
            ]}
          />
          <TimelineItem
            org="Student Government"
            role="Treasurer"
            period="2024–2025"
            points={[
              "Managed budgets and transparent reporting",
              "Ran fundraisers supporting school initiatives",
            ]}
          />
          <TimelineItem
            org="Engineering Club"
            role="President / Historian"
            period="2023–2025"
            points={[
              "Hosted build nights and mentorship",
              "Coordinated projects and competitions",
            ]}
          />
          <TimelineItem
            org="Basketball Club"
            role="Founder"
            period="2023–2025"
            points={[
              "Built community and regular scrimmages",
              "Sparked interest in sports",
            ]}
          />
        </div>
      </Section>

      <Section title="Volunteering" subtitle="Library, TA work, and service.">
        <div className="grid md:grid-cols-2 gap-6">
          <TimelineItem
            org="Local Library"
            role="Volunteer"
            period="2019–2025"
            points={["Shelving, tutoring, and event help"]}
          />
          <TimelineItem
            org="Teaching Assistant"
            role="TA"
            period="2023–2025"
            points={["Helped students with coursework"]}
          />
        </div>
      </Section>
    </>
  );
}
