


// C:\Users\kanka\Downloads\beyondChats-mindmap-UIUX\beyondChats-mindmap-main\src\components\Modals\AddData.jsx
import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";

function AddData({ open, handleOpen }) {
    const [dataType, setDataType] = useState(""); // State to track selected data type

    const handleSave = () => {
        // Handle form submission logic here
        console.log("Form submitted with data type:", dataType);
        handleOpen(); // Close the modal
    };

    return (
        <>
            <Button variant="gradient" color="blue" onClick={handleOpen}>
                Add Data
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Add Data</DialogHeader>
                <DialogBody>
                    <form className="flex flex-col gap-4">
                        <Select
                            label="Select Data Type"
                            value={dataType}
                            onChange={(e) => setDataType(e)}
                        >
                            <Option value="text">Text</Option>
                            <Option value="pdf">PDF</Option>
                            <Option value="link">Link</Option>
                        </Select>
                        {dataType === "text" && (
                            <Input type="text" label="Enter Text" />
                        )}
                        {dataType === "pdf" && (
                            <Input type="file" accept=".pdf" label="Upload PDF" />
                        )}
                        {dataType === "link" && (
                            <Input type="url" label="Enter URL" />
                        )}
                    </form>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleSave}
                    >
                        <span>Save</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default AddData;
