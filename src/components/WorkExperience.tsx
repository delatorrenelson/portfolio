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
];

function WorkExperience() {
    return (
        <div id="work_experience_section" className="flex flex-col">
            <SectionHeader title="Works" />
            <div id="work-experience-card" className="p-5 sm:p-6 rounded-2xl border border-base-content/10 bg-base-200/40 text-base sm:text-[17px] text-base-content/90 leading-relaxed sm:leading-6 flex flex-col gap-8 tracking-wide">
                {workExperienceData.map((item, index) => (
                    <div key={index} id={`work-item-${index}`} className="space-y-1">
                        <h4 className="italic text-base text-base-content/40">{item.title}</h4>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;