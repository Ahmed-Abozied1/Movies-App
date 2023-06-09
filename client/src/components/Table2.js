import React from "react";
import {  FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Head = "text-xs  text-left text-main font-semibold   px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap  px-5 py-3";

const Rows = (data, i, users,EditFunction) => {
  return (
    <tr key={i}>
    {/* users */}
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden ">
              <img
                src={`/images/UserImage/${
                  data.image ? data.image : "logo.png"
                }`}
                className="h-full w-full  object-contain"
                alt={data?.name}
              />
            </div>
          </td>
          <td className={`${Text} `}>{data._id ? data._id : "2S3456"}</td>
          <td className={`${Text}`}> {data.creatAt ? data.creatAt : "2,Jan 32023"} </td>
          <td className={`${Text}`}>{data.name}</td>
          <td className={`${Text}`}>{data.email}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button className="bg-submain text-white rounded flex-colo w-6 h-6">
              <MdDelete />
            </button>
          </td>
        </>
      ) : (
        /* categories */
        <>
        <td className={`${Text} font-bold`}> 2S3456</td>
          <td className={`${Text}`}> {data.creatAt ? data.creatAt : "2,Jan 32023"} </td>
          <td className={`${Text}`}>{data?.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
       
            <button 
            onClick={()=>EditFunction(data)}
            
            className="border border-border bg-dty flex-rows m-2 gap-3  text-border rounded py-1 px-2">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="bg-submain text-white  rounded flex-colo w-6 h-6">
              <MdDelete />
            </button>
          </td>
        </>
      )}

      {/* ** */}
     
           
    </tr>
  );
};
const Table2 = ({ data, users,EditFunction }) => {
  return (
    <div className=" overflow-x-scroll  overflow-hidden relative w-full  ">
      <table className="w-full  table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  ID
                </th>
                <th scope="col" className={`${Head}`}>
                  Data
                </th>
                <th scope="col" className={`${Head}`}>
                  Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  ID
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
              </>
            )}

            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((data, i) => Rows(data, i, users,EditFunction))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
