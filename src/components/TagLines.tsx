const tagLines = [
    "Continuous learning by building.",
    "Optimal performance meets reliable code.",
    "Bridging design precision with full-stack code.",
    "Complex ideas into seamless apps.",
    "Clean architecture, intuitive interfaces.",
    "Resilient from API to UI."
]

function TagLine({ text, id }: { text: string; id?: string }) {
    return (
        <p id={id} className="h-7 sm:h-8 text-sm sm:text-md italic text-base-content/75 tracking-tight sm:tracking-wider flex items-center whitespace-nowrap truncate max-w-full">
            {text}
        </p>
    )
}

function TagLines() {
    return (
        <div id="taglines-container" className="h-7 sm:h-8 overflow-hidden mt-0.5 max-w-full">
            <div id="taglines-scroll-wrapper" className="animate-tagline-scroll flex flex-col">
                {tagLines.map((line, idx) => (
                    <TagLine key={idx} id={`tagline-item-${idx}`} text={line} />
                ))}
                <TagLine id="tagline-item-clone" text={tagLines[0]} />
            </div>
        </div>
    )
}

export default TagLines;