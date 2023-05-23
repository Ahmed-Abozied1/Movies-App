import React from "react";
import MainModal from "./MainModal";
import {MdEmail} from "react-icons/md";

import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {
    EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareMovieModal = ({ modalOpen, setModalOpen, movie }) => {
  const shareData = [
    {
      icon: FaTwitter,
      shareButton: TwitterShareButton,
    },
    {
      icon: FaTelegram,
      shareButton: TelegramShareButton,
    },
    {
      icon: FaFacebook,
      shareButton: FacebookShareButton,
    },
    {
        icon: FaWhatsapp,
        shareButton: WhatsappShareButton,
      },
      {
        icon: MdEmail,
        shareButton: EmailShareButton,
      },
  ];

  const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`;
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className='inline-block sm:w-4/5 md:w-3/5 lg"w-2/5  align-middle p-10 overflow-y-auto h-full   bg-main   border-border  rounded-2xl'>
        <h2 className="text-2xl text-white  ">
          Share <span className="text-xl font-bold">{movie?.name}</span>
        </h2>
        <form className="flex-rows flex-wrap gap-6 mt-6">
          {shareData.map((data, index) => (
            <data.shareButton
              key={index}
              url={url}
              quote="Netflixo | Free Movies"
            >
                <div className="w-12 transtions hover:bg-submain flex-colo text-lg h-12 bg-white rounded bg-opacity-30 ">
                    <data.icon />
                </div>
            </data.shareButton>
          ))}
        </form>
      </div>
    </MainModal>
  );
};

export default ShareMovieModal;
