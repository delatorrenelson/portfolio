import SectionHeader from "./SectionHeader";

const workExperienceData = [
    {
        title: "Present",
        content: "I currently work as a freelance developer for an Australian tech company, where I am responsible for the management and maintenance of clients admin-facing web application and customer-facing mobile application."
    },
    {
        title: "Before that...",
        content: "I work as a graphic designer for a few years before transitioning into a developer, it has taught me a lot about being keen on details and understanding clients needs."
    }
]

function WorkExperienceSection({ id, title, content }: { id?: string; title: string; content: string }) {
    return (
        <div id={id} className="p-5 sm:p-6 rounded-2xl border border-base-content/10 bg-base-200/40 text-base sm:text-[17px] text-base-content/90 leading-relaxed sm:leading-6">
            <h4 className="italic text-base text-base-content/40">{title}</h4>
            <p>{content}</p>
        </div>
    )
}

function WorkExperience() {
    return (
        <div id="work_experience_section" className="flex flex-col">
            <SectionHeader title="Works" />
            <div id="work-experience-list" className="flex flex-col gap-4">
                {workExperienceData.map((item, index) => {
                    return (
                        <WorkExperienceSection key={index} id={`work-card-${index}`} title={item.title} content={item.content} />
                    );
                })}
            </div>
        </div>
    )
}

export default WorkExperience;