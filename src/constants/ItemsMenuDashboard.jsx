
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ContainerOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}


export const ItemsMenuDashboard = [
  // getItem(<Link to="/Dashboard">Inicio</Link>, "1", <HomeOutlined />),
  getItem(<Link to="Reportes">Reportes</Link>, "1", <ContainerOutlined />),
  getItem(<Link to="Users">Usuarios</Link>, "2", <UserOutlined />),
  getItem(<Link to="/Logout">Cerrar sesión</Link>, "4", <PoweroffOutlined />),

];
