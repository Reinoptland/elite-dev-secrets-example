import { IconContext } from "react-icons";

export default function Icon({ children, color = "white", size = 16 }) {
  return (
    <IconContext.Provider value={{ color: color, size: size }}>
      {children}
    </IconContext.Provider>
  );
}
