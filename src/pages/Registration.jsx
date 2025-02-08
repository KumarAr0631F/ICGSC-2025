import React from "react";
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center sm:p-6  w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-3xl text-green-600 font-bold text-center">
          Paper Submission
        </h3>
        <div className="p-4 sm:p-5 rounded-lg w-full">
          <p className="text-justify text-gray-900 text-base sm:text-lg">
            Kindly send a soft copy of your Abstract ( in 250 words) in Times
            New Roman, Font Size 12, Headings 12 pt bold, in MS Word only with
            author details, affiliations and E-mail to the convener by March 10,
            2025 at{" "}
            <span className="text-blue-700 underline cursor-pointer">
              chemistry@mru.edu.in
            </span>
            . All the abstracts will be reviewed by experts in the relevant
            areas and then will be forwarded to the author with decision.
            Selected full length papers will be published in UGC approved
            journal. Best paper awards for oral and poster presentations will be
            given in valedictory session.
          </p>
        </div>

        <h3 className="text-3xl text-green-600 font-bold text-center">
          Registration
        </h3>
        <div className="p-4 sm:p-5 rounded-lg w-full">
          <p className="text-justify text-gray-900 text-base sm:text-lg">
            At least one of the authors of the accepted paper is required to
            register for presenting the paper in the conference. The paper
            without registration will not appear in the proceedings. The
            registration will be confirmed on the receipt of duly signed
            registration form along with registration fee through demand draft
            in favor of Manav Rachna University payable at or direct transfer in
            University bank account through NEFT/RTGS.
          </p>
          <p className="text-justify text-gray-900 text-base sm:text-lg">
            All interested participants may register by sending an email to
            chemistry@mru.edu.in and making payment in advance.
          </p>
        </div>

        <div className="overflow-x-hidden">
          <div className="mx-auto flex justify-center text-sm">
            <table className="table-auto  w-[100%] max-w-[90%] border  border-gray-700 bg-white shadow-lg rounded-lg table-layout-fixed">
              <thead className="border border-gray-700">
                <tr className="bg-gray-200 text-gray-800">
                  <th className="px-2 py-2 text-center border border-gray-700"></th>
                  <th className="px-2 py-2 text-center border border-gray-700">
                    Student
                  </th>
                  <th className="px-2 py-2 text-center border border-gray-700">
                    Academia
                  </th>
                  <th className="px-2 py-2 text-center border border-gray-700">
                    Industry/R&D
                  </th>
                </tr>
              </thead>
              <tbody className="border border-gray-700">
                <tr className="border border-gray-700">
                  <td className="px-2 py-2 border border-gray-700 break-words text-xs sm:text-base lg:text-lg">
                    For Indian Participants
                  </td>
                  <td className=" py-2 border text-center border-gray-700">
                    1500 INR
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    2000 INR
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    3000 INR
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-2 py-2 border border-gray-700 break-words text-xs sm:text-base lg:text-lg">
                    For Foreigner Participants
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    50$
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    100$
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    200$
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-2 sm:gap-4 p-4">
          <h1 className="text-lg font-semibold">Online Registration Link:</h1>
          <NavLink
            className="text-blue-700 underline cursor-pointer break-all"
            to="https://forms.gle/2Tttku3C4hE49ArB7"
          >
            https://forms.gle/2Tttku3C4hE49ArB7
          </NavLink>
        </div>
        <div className="flex justify-center text-sm items-center">
          <div>
            <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
              Account Details
            </h1>
            <table className="table-auto flex lg:ml-32 lg:w-[75%] justify-center items-center bg-white border-collapse border border-gray-300">
              <tbody className="border border-gray-700">
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    Name of Account
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    Manav Rachna University Operations
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    Account Number
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    50100510695095
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    IFSC Code
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                  HDFC0000619
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    SWIFT Code
                  </td>
                  <td className="px-4 py-2 border border-gray-700">XXXXXXX</td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    Bank Name (with branch address)
                  </td>
                  <td className="px-4 py-2 border border-gray-700 break-words">
                  HDFC BANK LIMITED, SCF NO 222/223, SECTOR-9, FARIDABAD, HARYANA-121001
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
