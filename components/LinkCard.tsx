import {
  FaInstagram,
  FaTag,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

type Props = {
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  primary?: boolean;
};

export default function LinkCard({
  title,
  subtitle,
  href,
  icon,
  primary,
}: Props) {
  const renderIcon = () => {
    switch (icon) {
      case "whatsapp":
        return <FaWhatsapp size={28} className="text-white" />;

      case "website":
        return <span className="text-2xl">🌐</span>;

      case "maps":
        return <span className="text-2xl">📍</span>;

      case "tag":
        return <FaTag size={28} className="text-amber-500" />;

      case "instagram":
        return <FaInstagram size={28} className="text-pink-500" />;

      case "tiktok":
        return <FaTiktok size={28} />;

      case "email":
        return <MdEmail size={28} className="text-amber-600" />;

      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      className={
        primary
          ? "flex items-center gap-4 rounded-3xl bg-[#096FDE] p-5 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
          : "flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
      }
    >
      {renderIcon()}

      <div>
        <h2 className="font-semibold">{title}</h2>

        <p
          className={
            primary
              ? "text-sm text-blue-100"
              : "text-sm text-gray-500"
          }
        >
          {subtitle}
        </p>
      </div>
    </a>
  );
}