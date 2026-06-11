import {
FaFacebook,
FaInstagram,
FaTiktok,
} from "react-icons/fa";

export default function Socials() {
return ( <div className="mt-10"> <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
Follow Us : </p>

  <div className="flex items-center justify-center gap-8">
    <a
      href="https://tiktok.com/@laundrycare.soppeng"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#002248] transition duration-300 hover:scale-110 hover:text-[#096FDE]"
    >
      <FaTiktok size={36} />
    </a>

    <a
      href="https://instagram.com/laundrycare.soppeng"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#002248] transition duration-300 hover:scale-110 hover:text-[#096FDE]"
    >
      <FaInstagram size={36} />
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#002248] transition duration-300 hover:scale-110 hover:text-[#096FDE]"
    >
      <FaFacebook size={36} />
    </a>
  </div>
</div>

);
}
