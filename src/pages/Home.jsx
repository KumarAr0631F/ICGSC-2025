import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className=" flex items-center justify-center mt-3 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">3rd International Conference</h1>
          <p className="text-2xl">On</p>
          <p className="text-2xl font-semibold">
            Green and Sustainable Chemistry
          </p>
          <p className="text-2xl text-red-500 font-semibold">
            March 20<sup>th</sup> - 21<sup>th</sup>, 2025
          </p>
          <p className="text-2xl">Organised by</p>
          <p className="text-2xl font-medium">School of Science</p>
          <p className="text-2xl">
            Manav Rachna University, Faridabad, Haryana, India
          </p>
        </div>
      </div>
      <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 py-8">
        {/* About Conference */}
        <div className="mb-12">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            Background of the Conference
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <p className="text-base md:text-lg text-gray-700 text-justify">
            Green Chemistry is an essential tool towards sustainable development
            and provides solution to various social and environmental issues by
            reducing the use of hazardous substances during different stages of
            planning, manufacturing and application. Since the emergence of
            industrial and technological revolutions, economic indicators have
            been considered as key criteria for measuring progress. However,
            technological advancement has been accompanied by negative impact on
            environment in terms of pollution and degradation. Green chemistry
            provides the solution of social and environmental issues by reducing
            the use of hazardous substances during the planning, manufacturing
            and their applications. Green chemistry practices involve
            minimization of toxic solvents in chemical processes, use of
            renewable and innocuous raw materials, energy savings and waste
            minimization etc. Advancement in green practices through consistent
            research and development is required to address current social and
            environmental challenges. For this, we are organizing the Green &
            Sustainable Chemistry Conference at Manav Rachna University,
            Faridabad from <b>March 20-21, 2025</b>. The conference is sponsored
            by INDIAN OIL CORPORATION LIMITED R & D Centre Faridabad. The
            conference will be held in hybrid mode with lectures of Resource
            persons in relevant filed, oral and paper presentation by academic/
            industrial/ students delegates of the conferences.
          </p>
        </div>
        {/* About Manav Rachna University */}
        <div className="mb-12">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            About Manav Rachna University
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <p className="text-base md:text-lg text-gray-700 text-justify">
            Manav Rachna University (MRU) is a leading State Private University
            (established by Haryana State Legislature Act No 26 of 2014 & under
            section 2(f) of UGC Act 1956), offering globally relevant education.
            The University has evolved from Manav Rachna College of Engineering
            (MRCE), which was established in the year 2004, a NAAC accredited
            ‘A’ Grade institution. Manav Rachna University is among the Top 2
            Emerging Engineering Institutions of India and has been ranked the
            No. 1 Engineering Institution in India for Research Capability &
            Placements in the Times Engineering Survey 2021. The
            accreditations/rankings are testimonial to the trust of accrediting
            bodies in the quality of education being offered, a well-established
            teaching and learning process guided by the global best practices
            and a culture of academic excellence promoting research, innovation
            & entrepreneurship. Department of Sciences (Chemistry) at MRU offers
            M.Sc. and doctoral programs that allow students to integrate and
            reinforce chemistry principles learned from formal course work, as
            well as develop scientific and professional skills. Major thrust
            areas of the department are Green chemistry, Bio-fuels, Wastewater
            treatment, Heavy metal remediation, Polymer synthesis and Corrosion
            inhibitors. Department has established a Chapter of Green Chemistry
            Network Centre at the Campus and keeps organizing conferences,
            seminars and workshops to propagate awareness about Green Chemistry
            Practices. Details can be accessed at{" "}
            <NavLink
              className={"underline text-blue-600"}
              to={"https://mru.edu.in"}
            >
              www.mru.edu.in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
