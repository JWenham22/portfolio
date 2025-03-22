export const About = () => {

    const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "UX Design", "RESTful APIs"]
    const backendSkills = ["Node.js", "Python", "Django", "MongoDB"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                 About Me 
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                Hi! I'm Jack Wenham, a full-stack developer with a passion for building responsive, 
                user-friendly web applications from the ground up. I love working across the 
                stack—crafting clean, intuitive front-end interfaces and developing robust, scalable 
                back-end systems. Whether I'm designing sleek UIs with React or building powerful 
                APIs with Django, I enjoy solving real-world problems through thoughtful, 
                efficient code. I'm always exploring new technologies, refining my skills, 
                and pushing to create better digital experiences. When I'm not coding, you'll 
                probably find me out on the soccer field, hitting the gym, playing a round of golf, 
                or catching waves—anything that keeps me active and inspired.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};