import { TimelineItem } from "../components/TimelineItem";
import Section from "../components/Section";

export default function Leadership() {
  return (
    <>
      <Section title="Leadership" subtitle="Clubs, roles, and initiatives.">
        <div className="grid md:grid-cols-2 gap-6">
          <TimelineItem
            org="National Honor Society"
            role="President / Vice President"
            period="2024–2026"
            points={[
              "Organized service events and tracking system",
              "Introduced data-driven dashboard for hours",
              "Led officer team and community outreach",
              "Expanded service initiatives and impact",
              "Built lasting connections within the community",
              "Mentored new members in leadership and service",
            ]}
          />
          <TimelineItem
            org="Student Government"
            role="Treasurer"
            period="2023–2024"
            points={[
              "Managed budgets and transparent reporting",
              "Ran fundraisers supporting school initiatives",
            ]}
          />
          <TimelineItem
            org="Engineering Club"
            role="President / Historian"
            period="2024–2026"
            points={[
              "Hosted building days",
              "Coordinated projects and competitions",
              "Mentored members in engineering skills",
              "Created organizational system",
            ]}
          />
          <TimelineItem
            org="Basketball Club"
            role="Founder"
            period="2023–2024"
            points={[
              "Built community and regular scrimmages",
              "Sparked interest in sports",
            ]}
          />
        </div>
      </Section>

      <Section
        title="Volunteering"
        subtitle="Library, teaching assistant work, and service."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <TimelineItem
            org="Public Library"
            role="Computer Tutor, Trainer, Shelver"
            period="2022–2026"
            points={[
              "Technical support",
              "Assistance for patrons",
              "Train new volunteers",
              "Organize books and resources",
            ]}
          />
          <TimelineItem
            org="Teaching Assistant"
            role="TA"
            period="2022–2025"
            points={[
              "Helped students with coursework",
              "Assisted teachers with classroom management",
              "Fostered positive learning environment",
              "Encouraged student engagement, teamwork, and collaboration",
              "Built relationships with students and staff",
              "Learned classroom dynamics",
              "Enhanced problem-solving abilities",
            ]}
          />
        </div>
      </Section>
    </>
  );
}
