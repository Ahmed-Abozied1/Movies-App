import React from "react";

export const Message = ({ lable, placeholder }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-sem">{lable}</label>
      <textarea
        className="w-full h-40 mt-2 p-6 bg-main border border-border rounded "
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export const Select = ({ lable, options, onChange }) => {
  return (
    <>
      <label className="text-border font-sem">{lable}</label>
      <select
        className="w-full mt-2 p-6 py-6 text-text bg-main border border-border rounded "
        onChange={onchange}
      >
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {" "}
            {o.title}
          </option>
        ))}
      </select>
    </>
  );
};

export const Input = ({ lable, placeholder, type, bg }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-sem">{lable}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className={`w-full text-sm mt-2 p-5 border border-border rounded text-white 

${bg ? "bg-main" : "bg-dry"}
`}
      />
    </div>
  );
};
