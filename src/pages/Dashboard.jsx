import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts")
      .then((res) => setPosts(res.data))
      .catch(() => alert("Lỗi tải bài viết"));
  }, []);

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
