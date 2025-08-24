import React from "react";

// Utility to pick a random Tailwind background color
const randomBg = () => {
  const colors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-indigo-100",
    "bg-teal-100",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const PostCard = ({ user, content, image, video, voice, createdAt }) => {
  return (
    <div className="w-full lg:w-[85%] max-w-4xl px-3 md:px-6 space-y-6">
      {/* User Info */}
      <div className="flex items-center mb-3">
        <img
          src={user?.avatar || "https://via.placeholder.com/40"}
          alt={user?.name || "User"}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-semibold text-gray-800">
            {user?.name || "Anonymous"}
          </p>
          <p className="text-xs text-gray-500">{createdAt || "Just now"}</p>
        </div>
      </div>

      {/* Post Content */}
      {content && (
        <p className="text-gray-700 mb-3 text-center text-base">{content}</p>
      )}

      {/* Image Post */}
      {image && (
        <img
          src={image}
          alt="Post"
          className="w-full rounded-lg mb-3 object-cover"
        />
      )}

      {/* Video Post */}
      {video && (
        <video controls className="w-full rounded-lg mb-3">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Voice Note / Music */}
      {voice && (
        <div
          className={`w-full h-40 flex items-center justify-center rounded-lg mb-3 shadow ${randomBg()}`}
        >
          <audio controls className="w-[90%]">
            <source src={voice} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between text-gray-600 text-sm mt-2">
        <button className="hover:text-blue-500">👍 Like</button>
        <button className="hover:text-blue-500">💬 Comment</button>
        <button className="hover:text-blue-500">↪ Share</button>
      </div>
    </div>
  );
};

export default PostCard;
