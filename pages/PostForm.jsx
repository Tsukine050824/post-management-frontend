import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", { title, content });
      navigate("/dashboard");
    } catch (err) {
      alert("Tạo bài viết thất bại");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h2>Tạo bài viết</h2>
      <input
        type="text"
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <textarea
        placeholder="Nội dung"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={5}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <button type="submit" style={{ padding: 10, width: "100%" }}>
        Tạo bài viết
      </button>
    </form>
  );
}
