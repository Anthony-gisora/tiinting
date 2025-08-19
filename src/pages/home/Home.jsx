import PostCard from "../../components/homeComponents/postCard";
import img from "../home/postimg.png";
import vid from "../home/programming.mp4";

// hardcoded
const user = {
  avatar: img,
  name: "Tonny_G",
};

const Home = () => {
  return (
    <div className="flex justify-center w-full h-full pt-6 bg-gray-100">
      <div className="w-full lg:w-[85%] max-w-4xl px-3  md:px-6 space-y-6">
        <PostCard user={user} content="Niaje majamaa" image={img} />
        <PostCard user={user} content="Niaje majamaa" />
        <PostCard user={user} content="Niaje majamaa" video={vid} />
      </div>
    </div>
  );
};

export default Home;
