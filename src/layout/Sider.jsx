import { Menu } from "antd";
import { IoNewspaper } from "react-icons/io5";
import { RiLiveFill } from "react-icons/ri";
import Logo from "../components/Logo";
import { FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { PiUserSoundBold } from "react-icons/pi";

const items = [
  {
    key: "livestreams",
    icon: <RiLiveFill />,
    label: "Livestreams",
  },
  {
    key: "news",
    icon: <IoNewspaper />,
    label: "Tin tức",
  },
  {
    key: "users",
    icon: <FaUser />,
    label: "Người dùng",
  },
  {
    key: "idols",
    icon: <PiUserSoundBold />,
    label: "Idols",
  },
];

export function Sider({ Layout, ...rest }) {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const pathname = useLocation().pathname.replace("/", "");
  const [current, setCurrent] = useState(pathname);

  function handleMenuClick(item) {
    if (item?.key) {
      navigate(item?.key);
      setCurrent(item?.key);
    }
  }

  return (
    <Sider width="17%" {...rest}>
      <Logo />
      <Menu
        theme="dark"
        defaultSelectedKeys={[current]}
        defaultValue={current}
        items={items}
        className="!px-5"
        onClick={handleMenuClick}
      />
    </Sider>
  );
}
