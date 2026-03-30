import { createPortal } from "react-dom";

function Portal({children}) {
    const rootPortal = document.getElementById("root-portal");
    return createPortal(children, rootPortal);
}

export default Portal;
