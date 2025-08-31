import DataImage, { listProyek } from "./data";
import { listTools, workExperience, pendidikan } from "./data";
import { useState } from "react";
import Particles from "/src/components/background.jsx";

function App() {
  const [activeTimeline, setActiveTimeline] = useState("experience");

  return (
    <>
      {/* Layer Background Dinamis dengan Particles dan Ornamen */}
      <div className="fixed inset-0 -z-10">
        {/* Komponen Particles untuk efek partikel interaktif */}
        <Particles
          particleCount={window.innerWidth < 768 ? 120 : 200}
          particleSpread={window.innerWidth < 768 ? 12 : 20}
          speed={0.4}
          particleColors={[
            "#3b82f6",
            "#1e40af",
            "#1d4ed8",
            "#2563eb",
            "#60a5fa",
            "#93c5fd",
          ]}
          moveParticlesOnHover={window.innerWidth >= 768}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={window.innerWidth < 768 ? 100 : 150}
          sizeRandomness={2.5}
          cameraDistance={window.innerWidth < 768 ? 15 : 20}
          className="w-full h-full"
        />

        {/* Overlay gradasi */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/30 to-indigo-900/70"></div>

        {/* Ornamen animasi tambahan seperti orb, garis, dan grid */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Orb besar mengambang */}
          <div className="absolute top-10 left-5 w-40 h-40 sm:w-96 sm:h-96 sm:top-10 sm:left-10 bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-5 w-48 h-48 sm:w-[500px] sm:h-[500px] sm:top-20 sm:right-10 bg-indigo-500/15 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-44 h-44 sm:w-[400px] sm:h-[400px] sm:bottom-10 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-2000"></div>
          {/* Orb sedang */}
          <div className="absolute top-1/3 right-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>

          {/* Animated Lines */}
          <div className="absolute top-20 left-20 w-32 h-0.5 sm:w-48 sm:h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-20 w-24 h-0.5 sm:w-36 sm:h-1 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent animate-pulse delay-2000 rotate-45"></div>

          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 sm:opacity-15"></div>

          {/* Moving Background Elements */}
          <div className="absolute inset-0">
            <div
              className="absolute top-0 left-0 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce delay-1000"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-bounce delay-2000"
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bounce delay-3000"
              style={{ animationDuration: "5s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto mobile-padding py-4 sm:py-8">
          <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-4 sm:pt-6 gap-4 sm:gap-6 xl:gap-0 backdrop-blur-sm bg-white/3 rounded-2xl sm:rounded-3xl mobile-card border border-white/20 shadow-2xl">
            <div className="order-2 md:order-1 animate__animated animate__fadeInUp animate__delay-3s">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 bg-blue-900/70 backdrop-blur-md w-fit p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-blue-400/30 shadow-lg shadow-blue-400/20">
                <img
                  src={DataImage.HeroImage}
                  alt="Hero Image"
                  className="w-8 sm:w-10 rounded-md"
                />
                <q className="text-white/95 text-xs sm:text-sm">
                  Learning is a lifelong process🔥
                </q>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                I Made Nandana Devadatta Giri
              </h1>
              <h5 className="text-blue-200/90 text-sm sm:text-base">
                Surabaya, Indonesia
              </h5>
              <div className="my-4 sm:my-6 bg-blue-900/70 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-5 py-4 sm:py-5 bubble-chat border border-blue-400/30 shadow-lg shadow-blue-400/10">
                <p className="text-white/95 text-sm sm:text-base leading-relaxed">
                  I am interested in programming and design, especially website
                  development, application design, and digital marketing. I have
                  been interested in these fields for more than three years.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a
                  href="https://drive.google.com/file/d/1Bodi_f8vnS8I-IKzOIhNaKZokJ8IGRl6/view?usp=sharing"
                  className="w-full sm:w-auto bg-indigo-900/70 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-indigo-800/80 transition-all duration-300 border border-indigo-400/30 shadow-lg shadow-indigo-400/20 text-white text-center text-sm sm:text-base"
                >
                  Download CV{" "}
                  <i className="ri-download-line ri-sm sm:ri-md"></i>
                </a>
                <a
                  href="#projects"
                  className="w-full sm:w-auto bg-gray-700/70 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-gray-600/80 transition-all duration-300 border border-gray-400/30 shadow-lg shadow-gray-400/20 text-white text-center text-sm sm:text-base"
                >
                  Lihat Project{" "}
                  <i className="ri-arrow-down-line ri-sm sm:ri-md"></i>
                </a>
              </div>
            </div>
            <div className="relative order-1 md:order-2 flex justify-center">
              <img
                src={DataImage.HeroImage}
                alt="Hero Image"
                className="w-64 sm:w-80 md:w-[500px] rounded-2xl shadow-2xl border border-white/30 animate__animated animate__fadeInUp animate__delay-4s"
              />
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-xl sm:blur-2xl -z-10"></div>
            </div>
          </div>

          {/* About section */}
          <div
            id="about"
            className="tentang mt-8 sm:mt-12 backdrop-blur-sm bg-white/3 rounded-2xl sm:rounded-3xl mobile-card border border-white/20 shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="tools mt-4 sm:mt-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
                Tools & Technologies
              </h1>
              <p className="w-full lg:w-2/5 md:w-2/3 text-sm sm:text-base text-white/80 leading-relaxed">
                Here are some of the tools and technologies that I often use in
                my projects:
              </p>
              <div className="tools-box mt-8 sm:mt-14 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                {listTools.map((tool) => (
                  <div
                    className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 p-2 sm:p-4 border border-white/30 rounded-lg sm:rounded-xl
                    hover:bg-white/10 backdrop-blur-md group transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:border-blue-400/40"
                    key={tool.id}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay={tool.dad}
                  >
                    <img
                      src={tool.gambar}
                      alt="Tools image"
                      className="w-8 sm:w-14 bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-700/70 rounded-md sm:rounded-lg p-1 sm:p-2 transition-all mx-auto sm:mx-0"
                    />
                    <div className="text-center sm:text-left">
                      <h4 className="font-bold text-white text-xs sm:text-base">
                        {tool.nama}
                      </h4>
                      <p className="text-white/70 text-xs sm:text-sm">
                        {tool.ket}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-3/4 xl:w-2/3 mt-6 sm:mt-10 p-4 sm:p-7 bg-gray-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-gray-400/30 shadow-xl">
              <img
                src={DataImage.HeroImage}
                alt="sm-image-top"
                className="w-10 sm:w-12 rounded-md mb-6 sm:mb-10 block sm:hidden"
              />
              <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 text-white/95">
                Hi, my name is I Made Nandana Devadatta Giri, a Junior Front-end
                Developer and Designer for UI/UX Design and Digital Products. I
                believe that design and functionality must go hand in hand, so
                that every project I develop not only looks attractive but also
                provides an optimal user experience.
              </p>
              <div className="flex items-center justify-between">
                <img
                  src={DataImage.HeroImage}
                  alt="sm=img"
                  className="w-10 sm:w-12 rounded-md hidden sm:block"
                />
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-center">
                    <h1 className="text-2xl sm:text-4xl mb-1 text-white font-bold">
                      10<span className="text-blue-400">+</span>
                    </h1>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Project Done
                    </p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-2xl sm:text-4xl mb-1 text-white font-bold">
                      1<span className="text-blue-400">+</span>
                    </h1>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div
            className="timeline-section mt-8 sm:mt-12 backdrop-blur-sm bg-white/3 rounded-2xl sm:rounded-3xl mobile-card border border-white/20 shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                My Journey
              </h1>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8 sm:mb-12">
                <button
                  onClick={() => setActiveTimeline("experience")}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 backdrop-blur-md border shadow-lg text-sm sm:text-base ${
                    activeTimeline === "experience"
                      ? "bg-blue-900/70 text-white border-blue-400/40 shadow-blue-400/20"
                      : "bg-gray-700/50 hover:bg-gray-600/70 text-white border-gray-400/30"
                  }`}
                >
                  Work Experience
                </button>
                <button
                  onClick={() => setActiveTimeline("education")}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 backdrop-blur-md border shadow-lg text-sm sm:text-base ${
                    activeTimeline === "education"
                      ? "bg-blue-900/70 text-white border-blue-400/40 shadow-blue-400/20"
                      : "bg-gray-700/50 hover:bg-gray-600/70 text-white border-gray-400/30"
                  }`}
                >
                  Education
                </button>
              </div>
            </div>

            <div className="relative max-w-4xl">
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-400/50 z-10 shadow-sm shadow-blue-400/30"></div>

              <div className="space-y-6 sm:space-y-8">
                {(activeTimeline === "experience"
                  ? workExperience
                  : pendidikan
                ).map((item) => (
                  <div
                    key={item.id}
                    className="relative flex items-start gap-3 sm:gap-6"
                  >
                    <div className="relative z-20 flex-shrink-0 w-8 h-8 sm:w-16 sm:h-16 bg-blue-900/80 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-400/40 shadow-xl shadow-blue-400/20">
                      <div className="w-3 h-3 sm:w-8 sm:h-8 bg-white rounded-full"></div>
                    </div>

                    <div className="flex-1 bg-gray-800/60 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl relative z-10 border border-gray-400/30 hover:bg-gray-700/70 transition-all duration-300 hover:border-blue-400/30">
                      <div className="flex flex-col mb-3 sm:mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="mb-2 sm:mb-0">
                            <h3 className="text-base sm:text-xl font-bold text-white mb-1">
                              {item.posisi}
                            </h3>
                            <h4 className="text-blue-400 font-medium text-sm sm:text-base">
                              {item.perusahaan}
                            </h4>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-300 bg-gray-700/60 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full w-fit border border-gray-500/30">
                            {item.tahun}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Section */}
          <div
            id="projects"
            className="timeline-section mt-8 sm:mt-12 backdrop-blur-sm bg-white/3 rounded-2xl sm:rounded-3xl mobile-card border border-white/20 shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-white">
                Project Done
              </h1>
              <p className="text-center text-sm sm:text-base text-white/80 mt-2 sm:mt-3 leading-relaxed px-4">
                Here are some of the projects I have completed:
              </p>
            </div>

            <div className="project-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-10">
              {listProyek.map((proyek) => {
                const getProjectLink = (id) => {
                  switch (id) {
                    case 1:
                      return "https://www.devavoyages.com/";
                    case 2:
                      return "https://www.devavoyagesevents.com/";
                    case 3:
                      return "#";
                    case 4:
                      return "https://baliparadise.vercel.app/";
                    case 5:
                      return "https://www.linkedin.com/posts/devadattagiri_uiuxdesign-productdesign-webdevelopment-activity-7301583003632222208-P7F3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAESRzhIB7vblQA8bUQmzKAV159YThsz9omo";
                    default:
                      return "#";
                  }
                };

                const projectLink = getProjectLink(proyek.id);
                const isExternalLink =
                  projectLink !== "#" && !projectLink.startsWith("#");

                return (
                  <div
                    key={proyek.id}
                    className="bg-blue-900/70 backdrop-blur-md rounded-xl border border-blue-400/30 shadow-lg shadow-blue-400/20 hover:shadow-xl transition-all duration-200 overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay={proyek.dad}
                  >
                    {/* Project Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={proyek.gambar}
                        alt="Project Image"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-5 lg:p-6">
                      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                        {proyek.nama}
                      </h1>
                      <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-5 leading-relaxed line-clamp-3">
                        {proyek.desk}
                      </p>

                      {/* Tools Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                        {proyek.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="py-1 sm:py-1.5 px-2 sm:px-3 border border-zinc-500/50 rounded-md text-xs sm:text-sm font-medium bg-sky-900/80 backdrop-blur-sm text-white/90 hover:bg-sky-800/80 transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <div className="mt-auto">
                        <a
                          href={projectLink}
                          target={isExternalLink ? "_blank" : "_self"}
                          rel={
                            isExternalLink ? "noopener noreferrer" : undefined
                          }
                          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-800/90 backdrop-blur-sm text-white text-center rounded-lg py-2.5 sm:py-3 px-4 sm:px-6 hover:bg-blue-700/90 transition-all duration-300 font-medium text-sm sm:text-base border border-blue-600/30 shadow-lg hover:shadow-xl group"
                        >
                          <span>View Project</span>
                          {isExternalLink ? (
                            <i className="ri-external-link-line group-hover:scale-110 transition-transform"></i>
                          ) : (
                            <i className="ri-eye-line group-hover:scale-110 transition-transform"></i>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Section  */}
          <div
            id="contact"
            className="contact-section mt-8 sm:mt-12 backdrop-blur-sm bg-white/3 rounded-2xl sm:rounded-3xl mobile-card border border-white/20 shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Contact Header */}
              <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                  Contact Me{" "}
                  <i className="ri-chat-smile-3-fill text-xl sm:text-2xl md:text-3xl lg:text-4xl"></i>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-4xl">
                  Feel free to reach out to me via email or connect with me on
                  social media.
                  <span className="block mt-1">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your visions.
                  </span>
                </p>
              </div>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Email Section */}
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-400/30 shadow-lg hover:bg-gray-700/60 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-900/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30">
                      <i className="ri-mail-fill text-lg sm:text-xl text-blue-400"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                        Email
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 mb-2">
                        You can contact me via email at:
                      </p>
                      <a
                        href="mailto:nandanadevadatta161006@gmail.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base font-medium break-all"
                      >
                        nandanadevadatta161006@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-400/30 shadow-lg hover:bg-gray-700/60 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-900/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-400/30">
                      <i className="ri-share-fill text-lg sm:text-xl text-purple-400"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                        Social Media
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
                        Connect with me on:
                      </p>

                      {/* Social Links */}
                      <div className="space-y-2 sm:space-y-3">
                        <a
                          href="https://github.com/1610Deva"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-blue-400 transition-colors group"
                        >
                          <i className="ri-github-fill text-lg sm:text-xl group-hover:scale-110 transition-transform"></i>
                          <span className="text-sm sm:text-base">GitHub</span>
                        </a>

                        <a
                          href="https://www.linkedin.com/in/devadattagiri/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-blue-400 transition-colors group"
                        >
                          <i className="ri-linkedin-box-fill text-lg sm:text-xl group-hover:scale-110 transition-transform"></i>
                          <span className="text-sm sm:text-base">LinkedIn</span>
                        </a>

                        <a
                          href="https://www.instagram.com/@gusdevadatta_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-blue-400 transition-colors group"
                        >
                          <i className="ri-instagram-fill text-lg sm:text-xl group-hover:scale-110 transition-transform"></i>
                          <span className="text-sm sm:text-base">
                            Instagram
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-white/60 mt-12 sm:mt-16 lg:mt-20 pb-6 sm:pb-8">
            <div className="border-t border-white/10 pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm lg:text-base">
                Copyright © 2025 Devadatta Giri, All rights reserved.
              </p>
              <p className="text-xs sm:text-sm text-white/40 mt-1">
                Powered by DevadattaG
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
