function DataCard({ id, content, source, type, createdAt }) {
    const daysAgo = (dateStr) => {
        const targetDate = new Date(dateStr);

        const today = new Date();

        const timeDiff = today - targetDate;

        const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        return daysAgo;
    };

    return (
        <>
            <div className="hidden md:flex justify-between items-center py-2 px-2 border-b hover:bg-[#F5F5F5]">
                <div className="poppins-regular text-gray-600">{content}</div>
                <div className="flex">
                    <div className="px-[10px] w-[100px] my-auto text-center">
                        {source || "--"}
                    </div>
                    <div className="px-[10px] w-[100px] my-auto text-center text-[#60A5FA]">
                        <span className="border border-[#60A5FA] text-[13px] poppins-regular px-[7px] rounded-full">
                            {type}
                        </span>
                    </div>
                    <div className="px-[10px] w-[100px] my-auto text-center text-[12.5px] poppins-medium">
                        {createdAt}
                    </div>
                    <div className="flex gap-1 justify-center px-[10px] w-[100px] my-auto text-center">
                        <button className="rounded-full hover:bg-[#EDEFF5] p-2">
                            <svg
                                className="w-6 fill-[#2872FA] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="EditIcon"
                            >
                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
                            </svg>
                        </button>
                        <button className="hover:bg-[#F5EDEF] rounded-full p-2">
                            <svg
                                className="w-6 fill-[#FA2871] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="DeleteIcon"
                            >
                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 md:hidden border rounded-md p-4 my-3">
                <div className="poppins-regular text-base">{content}</div>
                <div className="p-2 bg-gray-200 rounded-xl w-fit poppins-bold text-[0.6rem]">
                    {type}
                </div>
                <div className="flex justify-between">
                    <div>
                        <div className="underline text-[12px] poppins-regular my-1">
                            View Source
                        </div>
                        <div className="text-[0.6rem] text-gray-500 poppins-regular mt-2">
                            {daysAgo(createdAt)} days ago
                        </div>
                    </div>
                    <div>
                        <button className="rounded-full hover:bg-[#EDEFF5] p-2">
                            <svg
                                className="w-5 fill-[#2872FA] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="EditIcon"
                            >
                                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
                            </svg>
                        </button>
                        <button className="hover:bg-[#F5EDEF] rounded-full p-2">
                            <svg
                                className="w-5 fill-[#FA2871] MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="DeleteIcon"
                            >
                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataCard;
