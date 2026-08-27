const tagLines = [
    "Continuous learning by building.",
    "Optimal performance meets reliable code.",
    "Bridging design precision with full-stack code.",
    "Complex ideas into seamless apps.",
    "Clean architecture, intuitive interfaces.",
    "Resilient from API to UI."
]

function TagLine({ text }: { text: string }) {
    return (
        <p className="h-7 sm:h-8 text-sm sm:text-lg italic text-base-content/75 tracking-tight sm:tracking-wider flex items-center whitespace-nowrap truncate max-w-full">
            {text}
        </p>
    )
}

function TagLines() {
    return (
        <div id="tagLines" className="h-7 sm:h-8 overflow-hidden mt-0.5 max-w-full">
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