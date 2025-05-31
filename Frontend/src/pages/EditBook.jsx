import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8012/books/details/${id}`)
      .then((res) => {
        setTitle(res.data.data.name);
        setAuthor(res.data.data.author);
        setPublishedYear(res.data.data.publishedYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occured. Please check the console.");
        console.log(error.message);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      name: title,
      author: author,
      publishedYear: parseInt(publishedYear),
    };
    if (!title || !author || !publishedYear) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);
    axios
      .put(`http://localhost:8012/books/edit/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Updated successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error occured. Please check the console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error.message);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Published Year</label>
          <input
            type="text"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
