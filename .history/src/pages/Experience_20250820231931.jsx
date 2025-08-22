import { TimelineItem } from "../components/TimelineItem";
import Section from "../components/Section";

export default function Experience() {
  return (
    <>
      <Section
        title="Experience"
        subtitle="Clubs, roles, initiatives, and volunteering."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <TimelineItem
            org="National Honor Society"
            role="President, Vice President"
            period="2024–Current"
            points={[
              "Organized service events and tracking system",
              "Introduced data-driven dashboard for service tracking",
              "Led officer team and community outreach",
              "Expanded service initiatives and impact",
              "Built lasting connections within the community",
              "Mentored new members in leadership and service",
              "Fostered a culture of excellence and service",
              "Promoted academic integrity and character",
              "Encouraged personal growth and development",
              "Strengthened school spirit and pride",
              "Enhanced communication and teamwork skills",
              "Created a positive and inclusive environment",
              "Promoted volunteerism and civic engagement",
              "Encouraged collaboration and innovation",
              "Fostered a sense of belonging and community",
            ]}
          />
          <TimelineItem
            org="Student Government"
            role="Treasurer"
            period="2023–2024"
            points={[
              "Managed budgets and transparent reporting",
              "Ran fundraisers supporting school initiatives",
              "Collaborated with student body and administration",
              "Promoted student voice and representation",
              "Organized events and activities",
              "Fostered school spirit and community",
              "Encouraged student engagement and participation",
              "Developed financial literacy and responsibility",
              "Enhanced leadership and teamwork skills",
              "Strengthened relationships with peers and staff",
              "Encouraged collaboration and innovation",
            ]}
          />
          <TimelineItem
            org="Engineering Club"
            role="President, Historian"
            period="2024–Current"
            points={[
              "Hosted building days",
              "Coordinated projects and competitions",
              "Mentored members in engineering skills",
              "Created organizational system",
              "Fostered collaboration and innovation",
              "Promoted STEM education and outreach",
              "Encouraged teamwork and problem-solving",
              "Developed leadership and communication skills",
              "Organized club events and activities",
            ]}
          />
          <TimelineItem
            org="Basketball Club"
            role="Founder"
            period="2023–2024"
            points={[
              "Built community and regular scrimmages",
              "Sparked interest in sports",
              "Created inclusive environment",
              "Fostered teamwork and sportsmanship",
              "Encouraged skill development",
              "Promoted physical fitness and well-being",
            ]}
          />
          <TimelineItem
            org="Public Library"
            role="Computer Tutor, Trainer, Shelver"
            period="2022–Current"
            points={[
              "Provided Technical support",
              "Helped patrons navigate library systems",
              "Trained new volunteers",
              "Assisted with library operations and events",
              "Supported library staff",
              "Enhanced community engagement",
              "Fostered a love for reading and learning",
              "Promoted library resources",
              "Supported literacy initiatives",
              "Provided customer service",
              "Assisted with cataloging and shelving",
              "Maintained library organization",
            ]}
          />
          <TimelineItem
            org="Teaching Assistant"
            role="Teacher's Assistant"
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
          <TimelineItem
            org="Debate Club/Model UN"
            role="Member"
            period="2024–Current"
            points={[
              "Participated in debates and discussions",
              "Developed public speaking and critical thinking skills",
              "Engaged in research and analysis of global issues",
              "Collaborated with peers on resolutions",
              "Enhanced understanding of international relations",
              "Fostered teamwork and negotiation skills",
              "Promoted civic engagement and awareness",
              "Encouraged respectful discourse and dialogue",
              "Strengthened communication and persuasion abilities",
              "Encouraged empathy and open-mindedness",
              "Fostered a sense of global citizenship",
            ]}
          />
          <TimelineItem
            org="Red Cross / IHL YAC (International Humanitarian Law Youth Advisory Committee) "
            role="Member"
            period="2023–2024"
            points={[
              "Engaged in humanitarian initiatives",
              "Promoted awareness of international humanitarian law",
              "Participated in community service projects",
              "Collaborated with peers on advocacy efforts",
              "Enhanced understanding of human rights issues",
              "Encouraged empathy and compassion",
              "Promoted peace and conflict resolution",
              "Engaged in educational outreach and awareness campaigns",
              "Encouraged personal growth and development",
              "Promoted ethical leadership and decision-making",
            ]}
          />
        </div>
      </Section>
    </>
  );
}
