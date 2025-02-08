import React from "react";

const PatronsAndChairs = () => {
  return (
    <div>
      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Patrons Section */}
        <div className="mb-3 mt-3">

          {/* Chief Patrons */}
          <h2 className="text-xl font-semibold text-gray-700">Chief Patron</h2>
          <ul className="list-disc ml-6 mb-3 text-justify text-gray-700">
            <li>
              Dr. Prashant Bhalla, President-MREI & Chairman, Board of
              Governors, MRU{" "}
            </li>
          </ul>

          {/* Patrons */}
          <h2 className="text-xl font-semibold text-gray-700">Patron</h2>
          <ul className="list-disc ml-6 text-justify text-gray-700">
            <li>
              Dr. Amit Bhalla, Vice President, Manav, Rachna Educational
              Institution
            </li>
          </ul>
        </div>

        {/* Chairs Section */}
        <div>
          {/* General Chair */}
          <h2 className="text-xl font-medium text-gray-700">Chairperson</h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>
              Prof. (Dr.) Deependra Kumar Jha, Hon’ble Vice Chancellor, Manav
              Rachna University Faridabad
            </li>
          </ul>

          {/* Conference Chair */}
          <h2 className="text-xl font-medium text-gray-700">
            Vice Chairperson(s)
          </h2>
          <ul className="list-disc text-justify  ml-6 text-gray-700 mb-3">
            <li>Prof. (Dr.) Sangita Banga, Hon’ble Pro-Vice Chancellor, MRU</li>
            <li>
              Prof. (Dr.) Shruti Vashist, Dean Academics, Dean Research &
              Consultancy, MRU
            </li>
            <li>Prof. (Dr.) Dipali Bansal, Dean Sciences of Sciences, MRU</li>
          </ul>
        </div>

        {/* Additional Sections */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Convener</h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>
              Prof. (Dr.) Arpit Sand, Program Head-Chemistry, Department of
              Sciences, Manav Rachna University, Faridabad
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">
          Co-Convener
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>Dr. A. Jayamani Department of Sciences (Chemistry), Manav Rachna University, Faridabad</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800">
          Oragnising Secretary
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>Prof. (Dr.) Sudhish Kumar Shukla, Department of Sciences (Chemistry), Manav Rachna University, Faridabad</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatronsAndChairs;
