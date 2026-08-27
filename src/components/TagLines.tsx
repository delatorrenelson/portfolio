const tagLines = [
    "Continuously learning by building.",
    "Optimal performance meets reliable code.",
    "Bridging design precision with full-stack code.",
    "Complex ideas into seamless apps.",
    "Clean architecture, intuitive interfaces.",
    "Resilient from API to UI."
]

function TagLine({ text }: { text: string }) {
    return (
        <p className="h-7 text-base sm:text-lg italic text-base-content/75 tracking-wider flex items-center whitespace-nowrap">
            {text}
        </p>
    )
}

function TagLines() {
    return (
        <div id="tagLines" className="h-7 overflow-hidden mt-0.5">
            <div className="animate-tagline-scroll flex flex-col">
                {tagLines.map((line, idx) => (
                    <TagLine key={idx} text={line} />
                ))}
                <TagLine text={tagLines[0]} />
            </div>
        </div>
    )
}

export default TagLines;