import { TimelineItem } from "../components/TimelineItem";
import Section from "../components/Section";

export default function Experience() {
  return (
    <>
      <Section
        title="Experience"
        subtitle="Clubs, roles, initiatives, and volunteering."
      >
        <div className="mb-4 w-fit">
          <span className="inline-block bg-brand-400/20 rounded-full px-3 py-1 text-sm font-semibold text-brand-400">
            500+ Community Service Hours
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <TimelineItem
            org="National Honor Society"
            role="President, Vice President"
            period="2024–Current"
            points={[
              "Designed and implemented a data-driven service tracking dashboard to streamline event organization, monitor volunteer hours, and improve transparency for members and advisors.",
              "Led officer team in expanding service initiatives and outreach, coordinating community partnerships and driving large-scale projects that significantly increased participation and measurable community impact.",
              "Mentored and trained new members in leadership and service, fostering a culture of academic integrity, collaboration, and innovation while building sustainable systems for long-term chapter growth.",
              "Strengthened school spirit and inclusivity by promoting civic engagement, encouraging personal development, and creating a positive environment that cultivated belonging and pride across the student body.",
            ]}
          />
          <TimelineItem
            org="Student Government"
            role="Treasurer"
            period="2023–2024"
            points={[
              "Managed budgets and executed transparent financial reporting, directing resources toward school-wide initiatives, fundraisers, and events that maximized student benefit and accountability.",
              "Collaborated with peers, faculty, and administration to organize activities, strengthen student representation, and advocate for innovative solutions that reflected the student body’s voice.",
              "Fostered school spirit and community engagement by leading events and initiatives that encouraged participation, built inclusivity, and cultivated a stronger sense of pride across campus.",
            ]}
          />
          <TimelineItem
            org="Engineering Club"
            role="President, Historian"
            period="2024–Current"
            points={[
              "Organized building days and coordinated engineering projects and competitions, developing an efficient organizational system to streamline planning and execution.",
              "Mentored members in technical and engineering skills, guiding teamwork, problem-solving, and leadership development within the club.",
              "Promoted STEM education and outreach, leading initiatives that inspired interest in engineering and expanded participation beyond the club.",
              "Fostered a culture of collaboration and innovation, encouraging creative approaches to projects and strengthening communication among members.",
            ]}
          />
          <TimelineItem
            org="Basketball Club"
            role="Founder"
            period="2023–2024"
            points={[
              "Founded and established a student-led basketball club, building a community centered on regular scrimmages, teamwork, and sportsmanship.",
              "Created an inclusive environment that encouraged participation from all skill levels while promoting physical fitness and overall well-being.",
              "Organized training sessions and activities that fostered skill development, strengthened collaboration, and sparked greater interest in sports across campus.",
            ]}
          />
          <TimelineItem
            org="Public Library"
            role="Computer Tutor, Trainer, Shelver"
            period="2022–Current"
            points={[
              "Provided technical support and guided patrons in navigating library systems and resources, improving digital literacy and access to information.",
              "Trained and mentored new volunteers, reducing staff workload and strengthening operations at one of the busiest library branches.",
              "Assisted with library operations, events, cataloging, and shelving, ensuring smooth day-to-day functionality and maintaining organizational efficiency.",
              "Enhanced community engagement and promoted literacy initiatives, fostering a welcoming environment that encouraged reading, lifelong learning, and public involvement.",
            ]}
          />
          <TimelineItem
            org="Teaching Assistant"
            role="Teacher's Assistant"
            period="2022–2025"
            points={[
              "Supported students with coursework and problem-solving, providing individualized guidance that strengthened understanding and academic performance.",
              "Assisted teachers with classroom management and instruction, contributing to smoother lesson delivery and improved student engagement.",
              "Fostered a positive and collaborative learning environment, encouraging teamwork, participation, and peer-to-peer support.",
              "Built strong relationships with students and staff, gaining insight into classroom dynamics while developing communication and leadership skills.",
            ]}
          />
          <TimelineItem
            org="Debate Club/Model UN"
            role="Member"
            period="2024–Current"
            points={[
              "Engaged in debates, discussions, and Model UN simulations, developing public speaking, critical thinking, and persuasive communication skills.",
              "Conducted research and analysis on global issues, collaborating with peers to draft resolutions and propose innovative solutions.",
              "Fostered teamwork, negotiation, and respectful discourse, encouraging empathy, open-mindedness, and effective collaboration in diverse groups.",
              "Promoted civic engagement and global awareness, cultivating a deeper understanding of international relations and a sense of global citizenship.",
            ]}
          />
          <TimelineItem
            org="Red Cross / IHL YAC (International Humanitarian Law Youth Advisory Committee) "
            role="Member"
            period="2023–2024"
            points={[
              "Engaged in humanitarian initiatives and community service projects, collaborating with peers to promote ethical leadership, empathy, and compassion.",
              "Raised awareness of international humanitarian law, leading educational outreach campaigns and advocacy efforts to encourage civic responsibility and global understanding.",
              "Promoted peace, conflict resolution, and personal growth, fostering critical thinking, ethical decision-making, and active participation in community and global issues.",
            ]}
          />
        </div>
      </Section>
    </>
  );
}
