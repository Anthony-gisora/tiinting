import React, { useState } from "react";
import PostCard from "./postCard";

const randomColor = () => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleFileChange = (e, type) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile({
        file: selected,
        preview: URL.createObjectURL(selected),
        type,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content && !file) return;

    const newPost = {
      user: {
        name: "John Doe",
        avatar: "https://via.placeholder.com/40",
      },
      content,
      image: file?.type === "image" ? file.preview : null,
      video: file?.type === "video" ? file.preview : null,
      voice: file?.type === "voice" ? file.preview : null,
      createdAt: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setContent("");
    setFile(null);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Create a Post
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Textarea */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Upload Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Image Upload */}
          <label
            className={`${randomColor()} text-white px-4 py-2 rounded-xl cursor-pointer hover:opacity-90 transition`}
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFileChange(e, "image")}
            />
          </label>

          {/* Video Upload */}
          <label
            className={`${randomColor()} text-white px-4 py-2 rounded-xl cursor-pointer hover:opacity-90 transition`}
          >
            Upload Video
            <input
              type="file"
              accept="video/*"
              hidden
              onChange={(e) => handleFileChange(e, "video")}
            />
          </label>

          {/* Voice Upload */}
          <label
            className={`${randomColor()} text-white px-4 py-2 rounded-xl cursor-pointer hover:opacity-90 transition`}
          >
            Upload Voice
            <input
              type="file"
              accept="audio/*"
              hidden
              onChange={(e) => handleFileChange(e, "voice")}
            />
          </label>
        </div>

        {/* Preview */}
        {file && (
          <div className="mt-3">
            {file.type === "image" && (
              <img
                src={file.preview}
                alt="preview"
                className="w-full rounded-lg shadow"
              />
            )}
            {file.type === "video" && (
              <video
                src={file.preview}
                controls
                className="w-full rounded-lg shadow"
              />
            )}
            {file.type === "voice" && (
              <audio src={file.preview} controls className="w-full mt-2" />
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Post
        </button>
      </form>

      {/* Render Posts */}
      <div className="mt-6">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
