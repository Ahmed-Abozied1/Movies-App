import React from "react";
import Layout from "../layout/Layout";
import Head from "../components/Head";
import { FiMail, FiPhoneCall,FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const contactData = [
    {
      id: 1,
      title: "Email us",
      info: " Interactively grow backend ideas for cross-platform models.",
      icon: FiMail,
      contact: "ahmed123@gmail.com",
    },
    {
      id: 2,
      title: "Call us",
      info: " Distinctively exploit optimal alignments for intuitive bandwidth.",
      icon: FiPhoneCall,
      contact: "+201094072207",
    },
    {
      id: 3,
      title: "Location ",
      icon: FiMapPin,

      info: "  Egypt , Mansoura",
      contact:""
    },
  ];
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-2">
        <Head title="Contact Us" />
        <div className="grid md:grid-cols-2 gap-6 lg:my-20  my-10 lg:grid-cols-3 xl:gap-6 ">
         {
          contactData.map((item)=>(
<div key={item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg text-center ">
  <span className="flex-colo  w-20 h-20 rounded-full bg-main text-submain text-2xl mb-4">
    <item.icon/>
  </span>
  <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
  <p className="mb-0 text-sm text-text leading-7"> <Link className="text-blue-400">{item.contact}</Link>{item.info}</p>
</div>
          ))
         }
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
