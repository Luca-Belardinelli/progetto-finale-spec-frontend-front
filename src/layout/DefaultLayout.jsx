// importo il componente dalla libreria di react-router-dom
import { Outlet } from "react-router-dom";

// importo il componente che forma il layout
import Header from "../components/Header";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}