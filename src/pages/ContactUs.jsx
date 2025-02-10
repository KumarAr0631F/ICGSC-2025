const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 px-4 sm:px-6 md:px-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl border border-gray-200 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center">
          Contact Information
        </h2>
        <table className="table-auto w-full border-collapse">
          <tbody>
            {[
              {
                title: "For General Enquiries",
                email: "chemistry@mru.edu.in",
              },
              {
                title: "For Conference related Enquiries",
                email: "chemistry@mru.edu.in",
              },
              {
                title: "For Paper Submission Enquiries",
                email: "chemistry@mru.edu.in",
              },
            ].map((contact, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base font-medium text-gray-700">
                  {contact.title}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm sm:text-base text-blue-600 text-center">
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:underline break-words"
                  >
                    {contact.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactUs;
