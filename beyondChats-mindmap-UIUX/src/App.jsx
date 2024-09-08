import { useState } from "react";
import Aside from "./components/Aside";
import DataCard from "./components/DataCard";
import NavBar from "./components/NavBar";
import { data } from "./dummyData";
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import AddData from "./components/Modals/AddData";
import DataTraining from "./components/Modals/DataTraining";
import GroundTruths from "./components/Modals/GroundTruths";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

function App() {
    const [step, setStep] = useState(1);
    const [dataOpen, setdataOpen] = useState(false);
    const [dataTrainingOpen, setDataTrainingOpen] = useState(false);
    const [groundOpen, setGroundOpen] = useState(false);
    const [sourceAscend, setSourceAscend] = useState(false);
    const [typeAscend, setTypeAscend] = useState(false);
    const [createdAscend, setCreatedAscend] = useState(false);
    const [actionAscend, setActionsAscend] = useState(false);

    const handledataOpen = () => setdataOpen(!dataOpen);

    const handleDataTrainingOpen = () => setDataTrainingOpen(!dataTrainingOpen);

    const handleGroundOpen = () => setGroundOpen(!groundOpen);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSourceAscend = () => setSourceAscend(!sourceAscend);

    const handleTypeAscend = () => setTypeAscend(!typeAscend);

    const handleCreatedAscend = () => setCreatedAscend(!createdAscend);

    const handleActionsAscend = () => setActionsAscend(!actionAscend);

    return (
        <div className="flex">
            <Aside />
            <main className="flex-1 overflow-hidden">
                <header className="bg-white">
                    <NavBar />
                </header>
                <div>
                    <section className="w-[90%] mobile:w-[70%] xl:w-[50%] mx-auto my-4">
                        <div className="flex flex-wrap gap-2 justify-center poppins-medium">
                            <AddData
                                open={dataOpen}
                                handleOpen={handledataOpen}
                            >
                                <button
                                    className="flex gap-2 w-full mobile:w-fit bg-[#2872FA] hover:bg-[#333BC7] text-white py-[6px] px-[16px] rounded-md shadow-md text-[10px] tablet:text-[12.5px] xl:text-base"
                                    onClick={handledataOpen}
                                >
                                    <svg
                                        className="w-5 fill-white self-center MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="AddIcon"
                                    >
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
                                    </svg>
                                    <span className="my-auto">ADD DATA</span>
                                </button>
                            </AddData>
                            <DataTraining
                                open={dataTrainingOpen}
                                handleOpen={handleDataTrainingOpen}
                            >
                                <button
                                    className="flex gap-2 w-full mobile:w-fit bg-[#FA2871] hover:bg-[#98004C] text-white rounded-md py-[6px] px-[16px] shadow-md text-[10px] tablet:text-[12.5px] xl:text-base"
                                    onClick={handleDataTrainingOpen}
                                >
                                    <svg
                                        className="w-5 fill-white my-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="HistoryIcon"
                                    >
                                        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"></path>
                                    </svg>
                                    <span className="my-auto">
                                        DATA TRAINING STATUS
                                    </span>
                                </button>
                            </DataTraining>
                            <GroundTruths
                                open={groundOpen}
                                handleOpen={handleGroundOpen}
                            >
                                <button
                                    className="flex gap-2 w-full mobile:w-fit text-[#FA2871] py-[5px] px-[15px] border border-[#FD92B7] hover:border-[#FA2871] hover:bg-[#FFF7F9] rounded-md text-[10px] tablet:text-[12.5px] xl:text-base"
                                    onClick={handleGroundOpen}
                                >
                                    <svg
                                        className="w-5 fill-[#FA2871] my-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="QuestionAnswerIcon"
                                    >
                                        <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1"></path>
                                    </svg>
                                    <span className="my-auto">
                                        GROUND TRUTHS
                                    </span>
                                </button>
                            </GroundTruths>
                        </div>
                        <div className="border border-[#808080] my-4"></div>
                        <div className="flex flex-wrap tablet:flex-nowrap justify-center gap-2 poppins-regular mobile:w-1/2 mx-auto">
                            <div className="w-full mobile:w-64 my-auto">
                                <Input
                                    label="Search"
                                    size="lg"
                                    className="min-w-64 text-sm mobile:text-lg poppins-regular"
                                />
                            </div>

                            <div className="w-full mobile:max-w-60 my-auto text-lg">
                                <Select
                                    label="Results"
                                    size="lg"
                                    className="text-sm mobile:text-lg poppins-regular"
                                >
                                    <Option
                                        value="1"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        1
                                    </Option>
                                    <Option
                                        value="2"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        2
                                    </Option>
                                    <Option
                                        value="3"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        3
                                    </Option>
                                    <Option
                                        value="4"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        4
                                    </Option>
                                    <Option
                                        value="5"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        5
                                    </Option>
                                    <Option
                                        value="6"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        6
                                    </Option>
                                    <Option
                                        value="7"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        7
                                    </Option>
                                    <Option
                                        value="8"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        8
                                    </Option>
                                    <Option
                                        value="9"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        9
                                    </Option>
                                    <Option
                                        value="10"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        10
                                    </Option>
                                    <Option
                                        value="20"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        20
                                    </Option>
                                    <Option
                                        value="50"
                                        className="text-sm mobile:text-lg poppins-regular"
                                    >
                                        50
                                    </Option>
                                </Select>
                            </div>

                            <button className="bg-[#2872FA] hover:bg-[#333BC7] w-full mobile:w-fit text-sm text-white h-full m-2 py-3 px-[16px] rounded-md shadow-md">
                                SEARCH
                            </button>
                        </div>
                    </section>
                    <div className="flex flex-col">
                        <section className="m-2 md:border rounded-md flex-1">
                            <div className="hidden md:flex justify-between items-center poppins-medium h-14 border-b w-full">
                                <div className="px-[10px]">Data</div>
                                <div className="flex">
                                    <div className="px-[10px] min-w-[100px] w-fit text-center cursor-pointer group my-auto">
                                        <div className="group-hover:hidden my-auto">
                                            Source
                                        </div>
                                        <div className="hidden group-hover:block group-hover:border-r-2 group-hover:border-l-2">
                                            <div className="flex gap-2">
                                                <span className="my-auto p-1">
                                                    S...
                                                </span>
                                                <span
                                                    className="p-1 hover:bg-[#F5F5F5] rounded-full my-auto"
                                                    onClick={handleSourceAscend}
                                                >
                                                    {sourceAscend ? (
                                                        <svg
                                                            className="w-5 fill-[#C3C3C3] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ArrowUpwardIcon"
                                                        >
                                                            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            className="w-5 fill-[#C3C3C3] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ArrowDownwardIcon"
                                                        >
                                                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                                                        </svg>
                                                    )}
                                                </span>

                                                <Menu>
                                                    <MenuHandler>
                                                        <span className="p-1 hover:bg-[#F5F5F5] rounded-full my-auto">
                                                            <svg
                                                                className="w-5 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                viewBox="0 0 24 24"
                                                                data-testid="TripleDotsVerticalIcon"
                                                            >
                                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                            </svg>
                                                        </span>
                                                    </MenuHandler>
                                                    <MenuList className="text-black text-lg poppins-regular p-2">
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ArrowUpwardIcon"
                                                                >
                                                                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Sort by ASC
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ArrowDownwardIcon"
                                                                >
                                                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Sort by DESC
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="VisibilityOffIcon"
                                                                >
                                                                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Hide column
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ViewColumnIcon"
                                                                >
                                                                    <g>
                                                                        <path d="M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Manage columns
                                                            </span>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-[10px] min-w-[100px] w-fit text-center cursor-pointer group my-auto">
                                        <div className="group-hover:hidden my-auto">
                                            Type
                                        </div>
                                        <div className="hidden group-hover:block group-hover:border-r-2 group-hover:border-l-2">
                                            <div className="flex gap-2">
                                                <span className="my-auto p-1">
                                                    T...
                                                </span>
                                                <span
                                                    className="p-1 hover:bg-[#F5F5F5] rounded-full my-auto"
                                                    onClick={handleTypeAscend}
                                                >
                                                    {typeAscend ? (
                                                        <svg
                                                            className="w-5 fill-[#C3C3C3] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ArrowUpwardIcon"
                                                        >
                                                            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            className="w-5 fill-[#C3C3C3] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ArrowDownwardIcon"
                                                        >
                                                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                                                        </svg>
                                                    )}
                                                </span>

                                                <Menu>
                                                    <MenuHandler>
                                                        <span className="p-1 hover:bg-[#F5F5F5] rounded-full my-auto">
                                                            <svg
                                                                className="w-5 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                viewBox="0 0 24 24"
                                                                data-testid="TripleDotsVerticalIcon"
                                                            >
                                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                            </svg>
                                                        </span>
                                                    </MenuHandler>
                                                    <MenuList className="text-black text-lg poppins-regular p-2">
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ArrowUpwardIcon"
                                                                >
                                                                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Sort by ASC
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ArrowDownwardIcon"
                                                                >
                                                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Sort by DESC
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="FilterAltIcon"
                                                                >
                                                                    <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>Filter</span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="VisibilityOffIcon"
                                                                >
                                                                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Hide column
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ViewColumnIcon"
                                                                >
                                                                    <g>
                                                                        <path d="M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Manage columns
                                                            </span>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-[10px] min-w-[100px] w-fit text-center cursor-pointer group my-auto">
                                        <div className="group-hover:hidden my-auto">
                                            Created...
                                        </div>
                                        <div className="hidden group-hover:block group-hover:border-r-2 group-hover:border-l-2">
                                            <div className="flex gap-2">
                                                <span className="my-auto p-1">
                                                    C...
                                                </span>
                                                <span
                                                    className="p-1 hover:bg-[#F5F5F5] rounded-full my-auto"
                                                    onClick={
                                                        handleCreatedAscend
                                                    }
                                                >
                                                    {createdAscend ? (
                                                        <svg
                                                            className="w-5 fill-[#C3C3C3] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ArrowUpwardIcon"
                                                        >
                                                            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            className="w-5 fill-[#C3C3C3] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ArrowDownwardIcon"
                                                        >
                                                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                                                        </svg>
                                                    )}
                                                </span>

                                                <Menu>
                                                    <MenuHandler>
                                                        <span className="p-1 hover:bg-[#F5F5F5] rounded-full my-auto">
                                                            <svg
                                                                className="w-5 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                viewBox="0 0 24 24"
                                                                data-testid="TripleDotsVerticalIcon"
                                                            >
                                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                            </svg>
                                                        </span>
                                                    </MenuHandler>
                                                    <MenuList className="text-black text-lg poppins-regular p-2">
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ArrowUpwardIcon"
                                                                >
                                                                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Sort by ASC
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ArrowDownwardIcon"
                                                                >
                                                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Sort by DESC
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="FilterAltIcon"
                                                                >
                                                                    <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>Filter</span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="VisibilityOffIcon"
                                                                >
                                                                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Hide column
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ViewColumnIcon"
                                                                >
                                                                    <g>
                                                                        <path d="M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Manage columns
                                                            </span>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-[10px] min-w-[100px] w-fit text-center cursor-pointer group my-auto">
                                        <div className="group-hover:hidden my-auto">
                                            Actions
                                        </div>
                                        <div className="hidden group-hover:block group-hover:border-r-2 group-hover:border-l-2">
                                            <div className="flex gap-2">
                                                <span className="my-auto p-1">
                                                    A...
                                                </span>
                                                <span
                                                    className="p-1 hover:bg-[#F5F5F5] rounded-full my-auto"
                                                    onClick={
                                                        handleActionsAscend
                                                    }
                                                >
                                                    {actionAscend ? (
                                                        <svg
                                                            className="w-5 fill-[#C3C3C3] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ArrowUpwardIcon"
                                                        >
                                                            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            className="w-5 fill-[#C3C3C3] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                            focusable="false"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            data-testid="ArrowDownwardIcon"
                                                        >
                                                            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                                                        </svg>
                                                    )}
                                                </span>

                                                <Menu>
                                                    <MenuHandler>
                                                        <span className="p-1 hover:bg-[#F5F5F5] rounded-full my-auto">
                                                            <svg
                                                                className="w-5 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                focusable="false"
                                                                aria-hidden="true"
                                                                viewBox="0 0 24 24"
                                                                data-testid="TripleDotsVerticalIcon"
                                                            >
                                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                                            </svg>
                                                        </span>
                                                    </MenuHandler>
                                                    <MenuList className="text-black text-lg poppins-regular p-2">
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ArrowUpwardIcon"
                                                                >
                                                                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Sort by ASC
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ArrowDownwardIcon"
                                                                >
                                                                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Sort by DESC
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="VisibilityOffIcon"
                                                                >
                                                                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Hide column
                                                            </span>
                                                        </MenuItem>
                                                        <MenuItem className="flex gap-2 w-60">
                                                            <span>
                                                                <svg
                                                                    className="w-6 fill-[#707070] MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                                                                    focusable="false"
                                                                    aria-hidden="true"
                                                                    viewBox="0 0 24 24"
                                                                    data-testid="ViewColumnIcon"
                                                                >
                                                                    <g>
                                                                        <path d="M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                Manage columns
                                                            </span>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {step === 1 &&
                                data?.slice(0, 10).map((item) => (
                                    <div key={item?.id}>
                                        <DataCard
                                            id={item?.id}
                                            content={item?.content}
                                            source={item?.source}
                                            type={item?.type}
                                            createdAt={item?.createdAt}
                                        />
                                    </div>
                                ))}
                            {step === 2 &&
                                data?.slice(10, 20).map((item) => (
                                    <div key={item?.id}>
                                        <DataCard
                                            id={item?.id}
                                            content={item?.content}
                                            source={item?.source}
                                            type={item?.type}
                                            createdAt={item?.createdAt}
                                        />
                                    </div>
                                ))}
                            {step === 3 &&
                                data?.slice(20).map((item) => (
                                    <div key={item?.id}>
                                        <DataCard
                                            id={item?.id}
                                            content={item?.content}
                                            source={item?.source}
                                            type={item?.type}
                                            createdAt={item?.createdAt}
                                        />
                                    </div>
                                ))}
                        </section>
                        <footer className="my-2">
                            <ul className="flex gap-2 justify-center items-center poppins-regular">
                                <li
                                    className="p-2 hover:bg-[#F5F5F5] rounded-full cursor-pointer"
                                    onClick={handleBack}
                                >
                                    <svg
                                        className="w-5 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-lrb33l"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="NavigateBeforeIcon"
                                    >
                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                                    </svg>
                                </li>
                                <li
                                    className={`p-2 w-9 h-9 flex justify-center items-center ${
                                        step === 1
                                            ? "hover:bg-[#333BC7] bg-[#2872FA] text-white"
                                            : "hover:bg-[#F5F5F5]"
                                    } rounded-full cursor-pointer`}
                                    onClick={() => setStep(1)}
                                >
                                    1
                                </li>
                                <li
                                    className={`p-2 w-9 h-9 flex justify-center items-center ${
                                        step === 2
                                            ? "hover:bg-[#333BC7] bg-[#2872FA] text-white"
                                            : "hover:bg-[#F5F5F5]"
                                    }  rounded-full cursor-pointer`}
                                    onClick={() => setStep(2)}
                                >
                                    2
                                </li>
                                <li
                                    className={`p-2 w-9 h-9 flex justify-center items-center ${
                                        step === 3
                                            ? "hover:bg-[#333BC7] bg-[#2872FA] text-white"
                                            : "hover:bg-[#F5F5F5]"
                                    }  rounded-full cursor-pointer`}
                                    onClick={() => setStep(3)}
                                >
                                    3
                                </li>
                                <li
                                    className="p-2 hover:bg-[#F5F5F5] rounded-full cursor-pointer"
                                    onClick={handleNext}
                                >
                                    <svg
                                        className="w-5 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-lrb33l"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        data-testid="NavigateNextIcon"
                                    >
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                                    </svg>
                                </li>
                            </ul>

                            <div className="pb-12"></div>
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
