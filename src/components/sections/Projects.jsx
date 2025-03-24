import { RevealOnScroll } from '../RevealOnScroll';


export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                    <h3 className="text-xl font-bold mb-2">Mastermind</h3>
                    <p className="text-gray-400 mb-4">
                    A code-breaking game where the computer 
                    generates a secret code (e.g., 4 colors or numbers), 
                    and the player tries to guess it within a limited number 
                    of attempts. After each guess, the game gives 
                    feedback—typically black pegs for correct color and 
                    position, and white pegs for correct color but wrong 
                    position.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "HTML", "CSS"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                            href="https://jwenham22.github.io/unit1-project/" 
                            target="_blank"
                            rel="nonopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                            View Project ➡️ 
                        </a>
                    </div>
                </div>
                {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                    <h3 className="text-xl font-bold mb-2">SportsU</h3>
                    <p className="text-gray-400 mb-4">
                    An app specificaly designed for sports enthusiasts
                    who want to follow there favorite teams.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["EJS", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                            href="#" 
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                            View Project ➡️ 
                        </a>
                    </div>
                </div> */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                    <h3 className="text-xl font-bold mb-2">Code.tracker</h3>
                    <p className="text-gray-400 mb-4">
                    The Code Tracker App is a user-friendly tool 
                    that enables developers to efficiently manage 
                    their coding projects by organizing tasks for 
                    each project.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["REACT", "Node.js", "Express.js", "MongoDB"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                            href="https://icecream-code-tracker.netlify.app/"
                            target="_blank"
                            rel="nonopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                            View Project ➡️ 
                        </a>
                    </div>
                </div>
                {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                    <h3 className="text-xl font-bold mb-2">CourseRate</h3>
                    <p className="text-gray-400 mb-4">
                    CourseRate is an app dedicated to golf enthusiasts 
                    who want to rate and review courses they've played 
                    as well as search courses near them and visit some 
                    of the top courses from around the world.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Django", "PostgreSQL"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a 
                            href="#" 
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                            View Project ➡️ 
                        </a>
                    </div>
                </div> */}
            </div>
            </div>
        </RevealOnScroll>
    </section>
}