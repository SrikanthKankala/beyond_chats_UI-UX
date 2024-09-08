import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { Drawer, IconButton } from "@material-tailwind/react";
import { Fragment, useState } from "react";

function NavBar() {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className="shadow-lg flex gap-1 justify-between h-14 mobile:h-16 mobile:px-5 bg-white">
            <div className="my-auto block mobile:hidden">
                <Fragment>
                    <button
                        className="p-2 m-auto rounded-full hover:bg-[#F5F5F5]"
                        title="Open Left Drawer"
                        onClick={openDrawer}
                    >
                        <svg
                            className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="MenuIcon"
                        >
                            <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
                        </svg>
                    </button>

                    <Drawer
                        open={open}
                        onClose={closeDrawer}
                        className="p-4"
                        title="Close Drawer"
                    >
                        <div className="mb-6 flex items-center justify-end">
                            <IconButton
                                variant="text"
                                color="blue-gray"
                                onClick={closeDrawer}
                                className="rounded-full hover:bg-gray-100"
                            >
                                <svg
                                    className="w-5 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ChevronLeftIcon"
                                >
                                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                                </svg>
                            </IconButton>
                        </div>
                        <div>
                            <ul className="my-1.5 poppins-regular">
                                <li
                                    className="flex gap-4 px-2 h-[51px] hover:cursor-pointer hover:bg-[#F5F5F5]"
                                    title="Explore Chats"
                                >
                                    <span className="my-auto">
                                        <svg
                                            className="w-6 fill-[#707070] m-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="MoveToInboxIcon"
                                        >
                                            <path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19zm-3-5h-2V7h-4v3H8l4 4z"></path>
                                        </svg>
                                    </span>
                                    <span className="my-auto">
                                        Explore Chats
                                    </span>
                                </li>
                                <li
                                    className="flex gap-4 px-2 h-[51px] hover:cursor-pointer hover:bg-[#F5F5F5]"
                                    title="Switch Organization"
                                >
                                    <span className="my-auto">
                                        <svg
                                            className="w-6 fill-[#707070] m-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="BusinessIcon"
                                        >
                                            <path d="M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z"></path>
                                        </svg>
                                    </span>
                                    <span className="my-auto">
                                        Switch Organizations
                                    </span>
                                </li>
                                <li
                                    className="flex gap-4 px-2 h-[51px] hover:cursor-pointer hover:bg-[#F5F5F5]"
                                    title="Business Leads"
                                >
                                    <span className="my-auto">
                                        <svg
                                            className="w-6 fill-[#707070] m-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="ContactPhoneIcon"
                                        >
                                            <path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2"></path>
                                        </svg>
                                    </span>
                                    <span className="my-auto">
                                        Business Leads
                                    </span>
                                </li>
                                <li
                                    className="flex gap-4 px-2 h-[51px] bg-blue-50 hover:cursor-pointer hover:bg-[#F5F5F5]"
                                    title="View Mind Map"
                                >
                                    <span className="my-auto">
                                        <svg
                                            className="w-6 fill-[#2872FA] m-auto MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-1q9vtoo"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="TableChartIcon"
                                        >
                                            <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2M3 19c0 1.1.9 2 2 2h3V10H3z"></path>
                                        </svg>
                                    </span>
                                    <span className="my-auto">
                                        View Mind Map
                                    </span>
                                </li>
                                <li
                                    className="flex gap-4 px-2 h-[51px] hover:cursor-pointer hover:bg-[#F5F5F5]"
                                    title="Manage Team"
                                >
                                    <span className="my-auto">
                                        <svg
                                            className="w-6 fill-[#707070] m-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="GroupsIcon"
                                        >
                                            <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3"></path>
                                        </svg>
                                    </span>
                                    <span className="my-auto">Manage Team</span>
                                </li>
                                <li
                                    className="flex gap-4 px-2 h-[51px] hover:cursor-pointer hover:bg-[#F5F5F5]"
                                    title="Configure Chatbot"
                                >
                                    <span className="my-auto">
                                        <svg
                                            className="w-6 fill-[#707070] m-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="SettingsIcon"
                                        >
                                            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"></path>
                                        </svg>
                                    </span>
                                    <span className="my-auto">
                                        COnfigure Chatbot
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Drawer>
                </Fragment>
            </div>
            <div className="max-w-[32rem] min-w-[10rem] my-auto flex mobile:block justify-center">
                <h1 className="text-sm mobile:text-[15px] tablet:text-[18px] xl:text-[1.5rem] poppins-medium leading-6 flex gap-2 my-auto">
                    Chatbot Mind Map
                    <span
                        className="my-auto tablet:hidden"
                        title="This is the brain and the memory of the chatbot. You can
                    add, edit and analyse the source data being used to answer
                    user queries from here"
                    >
                        <svg
                            className="w-4 fill-[#2872FA] MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-3o69zr"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="InfoIcon"
                            aria-label="This is the brain and the memory of the chatbot. You can add, edit and analyse the source data being used to answer user queries from here"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"></path>
                        </svg>
                    </span>
                </h1>
                <h6 className="text-[10px] xl:text-[12.5px] poppins-regular xl:leading-5 hidden tablet:block">
                    This is the brain and the memory of the chatbot. You can
                    add, edit and analyse the source data being used to answer
                    user queries from here
                </h6>
            </div>
            <div className="flex gap-3 my-auto h-10">
                <button className="text-[10px] tablet:text-[12.5px] xl:text-base box-border poppins-medium text-[#2872FA] border border-[#60A5FA] hover:border-[#2872FA] hover:bg-[#F7F9FF] py-[5px] px-[15px] rounded-md hidden mobile:inline-block">
                    GUIDED TOUR
                </button>
                <select
                    name="org"
                    id="select-org"
                    className="box-border text-sm xl:text-lg poppins-regular py-[6px] px-[8px] cursor-pointer"
                    title="View Orgs"
                >
                    <option value="none">SELECT ORG</option>
                    <option value="ABC">ABC</option>
                    <option value="DEF">DEF</option>
                    <option value="GHI">GHI</option>
                    <option value="JKL">JKL</option>
                    <option value="MNO">MNO</option>
                    <option value="PQR">PQR</option>
                </select>
                <Menu>
                    <MenuHandler>
                        <span
                            className="border-2 rounded-full border-[#2872FA] box-border overflow-hidden w-11 h-11 min-w-[40px] cursor-pointer hidden mobile:inline-block"
                            title="Open Menu"
                        >
                            <img src="avatar.png" alt="avatar" />
                        </span>
                    </MenuHandler>
                    <MenuList className="text-black text-lg poppins-regular p-2">
                        <MenuItem className="flex gap-2 w-60">
                            <span>
                                <svg
                                    className="w-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="MoveToInboxIcon"
                                >
                                    <path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19zm-3-5h-2V7h-4v3H8l4 4z"></path>
                                </svg>
                            </span>
                            <span>Explore Chats</span>
                        </MenuItem>
                        <MenuItem className="flex gap-2 w-60">
                            <span>
                                <svg
                                    className="w-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ContactPhoneIcon"
                                >
                                    <path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2"></path>
                                </svg>
                            </span>
                            <span>Business Leads</span>
                        </MenuItem>
                        <MenuItem className="flex gap-2 w-60">
                            <span>
                                <svg
                                    className="w-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="TableChartIcon"
                                >
                                    <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2M3 19c0 1.1.9 2 2 2h3V10H3z"></path>
                                </svg>
                            </span>
                            <span>View Mind Map</span>
                        </MenuItem>
                        <MenuItem className="flex gap-2 w-60">
                            <span>
                                <svg
                                    className="w-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="GroupsIcon"
                                >
                                    <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3"></path>
                                </svg>
                            </span>
                            <span>Manage Team</span>
                        </MenuItem>
                        <MenuItem className="flex gap-2 w-60">
                            <span>
                                <svg
                                    className="w-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="SettingsIcon"
                                >
                                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"></path>
                                </svg>
                            </span>
                            <span>Configure Chatbot</span>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    );
}

export default NavBar;
