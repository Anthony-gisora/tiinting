import LoggedNav from "../../components/homeComponents/Nav";
import { Plus } from "lucide-react"; // nice icon

const LoggedUserLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <LoggedNav />

      {/* Main Layout */}
      <div className="flex justify-center w-full pt-20 px-3 md:px-6">
        <div className="w-full lg:w-[85%] max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <aside className="hidden md:block col-span-1 sticky top-20 self-start">
            <div className="bg-white shadow-md rounded-2xl p-5 space-y-4 min-h-[50vh] flex flex-col">
              <h2 className="font-semibold text-gray-700 text-lg border-b pb-2">
                My Profile
              </h2>
              <ul className="text-gray-600 space-y-3 text-sm flex-1">
                <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                  🏠 Dashboard
                </li>
                <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                  ✏️ Create Post
                </li>
                <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                  ⚙ Settings
                </li>
              </ul>
            </div>
          </aside>

          {/* Center Feed (Posts go here) */}
          <main className="col-span-2 space-y-6 ">{children}</main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block col-span-1 sticky top-20 self-start">
            <div className="bg-white shadow-md rounded-2xl p-5 space-y-4 min-h-[50vh] flex flex-col">
              <h2 className="font-semibold text-gray-700 text-lg border-b pb-2">
                Suggestions
              </h2>
              <ul className="text-gray-600 space-y-3 text-sm flex-1">
                <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                  🔥 Trending Topic
                </li>
                <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                  💡 Suggested Post
                </li>
                <li className="hover:bg-gray-100 px-3 py-2 rounded-lg cursor-pointer transition">
                  👥 People You May Know
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating "Create Post" Button for Mobile */}
      <button
        className="md:hidden fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        onClick={() => alert("Open create post modal 🚀")}
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default LoggedUserLayout;
