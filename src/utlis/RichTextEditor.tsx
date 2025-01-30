import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichStyle.scss";

type EditorProps = {
  value: string;
  onChange: (content: string) => void;
};

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote"],
    ["link"],
    [{ align: [] }],
    ["clean"],
  ],
};

const RichTextEditor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      theme="snow"
      placeholder="Write something..."
      className="rich-text-editor"
    />
  );
};

export default RichTextEditor;
