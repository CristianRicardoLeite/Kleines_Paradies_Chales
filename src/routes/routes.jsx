import { Attractives, Chalets, Contact, Galerie, Home, ServicePackages, Services } from "../containers";
import {
    createBrowserRouter,
} from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/atrativos",
        element: <Attractives />,
    },
    {
        path: "/chales",
        element: <Chalets />,
    },
    {
        path: "/galeria",
        element: <Galerie />,
    },
    {
        path: "/contato",
        element: <Contact />,
    },
    {
        path: "/pacotes-de-servicos",
        element: <ServicePackages />,
    },
    {
        path: "/servicos",
        element: <Services />,
    }
]);