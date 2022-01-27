import React, { useState, useContext } from "react";

type PathsType = {
    path: string;
    name: string;
    button?: boolean;
    action?: Function;
    detail?: string;
};


const initialValues: {
    path: string,
    isSticky: boolean,
    drawerView: boolean,
    about: boolean;
    paths: PathsType[],
    updateNavBar: Function,
    updateDrawerView: Function
    updateIsSticky: Function
} = {
    path: "",
    isSticky: true,
    drawerView: false,
    about: false,
    paths: [],
    updateNavBar: () => { },
    updateDrawerView: () => { },
    updateIsSticky: () => { },
};


const NavBarContext = React.createContext(initialValues);

const useNavBar = () => useContext(NavBarContext);

const NavBarProvider: React.FC = ({ children }) => {
    const [path, setPath] = useState<string>("/");
    const [isSticky, setIsSticky] = useState<boolean>(true);
    const [about, setAbout] = useState<boolean>(true);
    const [drawerView, setDrawerView] = useState<boolean>(false);
    const paths: PathsType[] = [
        {
            "path": "/",
            "name": "Tutorial",
        },
        {
            "path": "/",
            "name": "Case Studies",
        },
        {
            "path": "/",
            "name": "Resources",
        },
    ];

    const updateNavBar = (data: string) => {
        setPath(data);
    };

    const updateIsSticky = (data: boolean) => {
        setIsSticky(data);
    };

    const updateDrawerView = () => {
        setDrawerView(!drawerView);
    };
    const updateAbout = () => {
        setAbout(!about);
    };

    return (
        <NavBarContext.Provider
            value={{
                about,
                path,
                paths,
                isSticky,
                drawerView,
                updateNavBar,
                updateDrawerView,
                updateIsSticky
            }}
        >
            {children}
        </NavBarContext.Provider>
    );
};



export { NavBarProvider, useNavBar };

