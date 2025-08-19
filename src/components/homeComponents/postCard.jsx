import React from "react";

const PostCard = ({ user, content, image, video, createdAt }) => {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-[4px] m-6 ">
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
      {content && <p className="text-gray-700 mb-3">{content}</p>}

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
