import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="MORENT" />
            </div>
            <div className="text-content">
              <h2>
                Car Rental Platform: Search, Filter & Easily Book Vehicles
                Online with MORENT
              </h2>
              <p className="text-white-50 md:text-xl">
                A responsive web application built with React, allowing users to
                browse, filter, and conveniently book rental cars.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Recipe App" />
              </div>
              <h2>
                All-in-One Recipe Platform for Discovering, Creating and
                Managing Recipes with Integrated Shopping List Feature
              </h2>
            </div>

            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Weather App" />
              </div>
              <h2>
                Weather Check + Outfit Recommendations Based on Temperature
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
