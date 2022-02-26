import { IconContext } from "react-icons";

export default function Icon(props) {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      {props.children}
    </IconContext.Provider>
  );
}
