import { useState } from "react";
import axios from "axios";
import {
  Button,
  Typography,
  Box,
  LinearProgress,
  Snackbar,
} from "@mui/material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DescriptionIcon from "@mui/icons-material/Description";

import PhotoIcon from "@mui/icons-material/Photo";

type base64Type = {
  image: string;
};

function ManifestDropZone() {
  const [fileName, setFileName] = useState("no file selected");
  const [fileSize, setFileSize] = useState("0");
  const [base64Image, setBase64Image] = useState<base64Type>({ image: "" });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const toastStyleSwitch = (type: string) => {
    switch (type) {
      case "success":
        return {
          color: "white",
          backgroundColor: "#2bb62b",
          border: "2px solid green",
        };
      case "error":
        return {
          color: "white",
          backgroundColor: "#c63d3d",
          border: "2px solid red",
        };
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      // Set file name
      setFileName(file.name);
      // Set file size in MB (1 MB = 1048576 bytes)
      setFileSize((file.size / 1048576).toFixed(2));
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Set base64Image state with the base64 string of the image
        setBase64Image({ image: reader.result as never });
      };
      // Read the file as a data URL (base64 string)
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleToastOpen = (message: string, type: string) => {
    setToastMessage(message);
    setToastType(type);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleUploadImage = () => {
    if (base64Image.image.length > 0) {
      axios("/api/addData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(base64Image),
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            progressEvent?.loaded && progressEvent?.total
              ? (progressEvent.loaded * 100) / progressEvent.total
              : 0
          );
          setUploadProgress(percentCompleted); // Or update your UI with this value
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            handleToastOpen("Uploaded image successfully!", "success");
            setTimeout(() => {
              setUploadProgress(0);
            }, 1000);
          }
        })
        .catch((error) => {
          handleToastOpen("Error in upload", error);
          setUploadProgress(0);
        });
    } else {
      handleToastOpen("No file selected!", "error");
    }
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={toastMessage}
        ContentProps={{
          "aria-describedby": "message-id",
          style: toastStyleSwitch(toastType),
        }}
      />
      <div
        style={{
          border: "solid 1px lightgrey",
          padding: 13,
          borderRadius: 10,
          textAlign: "center",
        }}
      >
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div
            style={{
              display: "block",
              padding: "30px 35px",
              textAlign: "center",
              border: "dashed 1px lightgrey",
              borderRadius: 5,
            }}
          >
            <DescriptionIcon style={{ color: "#F78B1E" }} />
            <Typography style={{ fontSize: "12px" }}>
              Drag & Drop Here Or <b>Browse</b>
            </Typography>
          </div>
        </div>
        <Button
          onClick={handleUploadImage}
          size="small"
          variant="contained"
          sx={{
            marginTop: 2,
            paddingX: 5,
            boxShadow: "none",
            backgroundColor: "#172D5B",
            textTransform: "none",
            fontSize: 12,
          }}
        >
          Upload Manifest
        </Button>
      </div>
      <Box
        sx={{
          borderBottom: "1px solid #eaeaea",
          borderTop: "1px solid #eaeaea",
          paddingY: 1.4,
          marginTop: 1.5,
        }}
      >
        <Box
          style={{
            display: "inline-block",
            width: "10%",
          }}
        >
          <PhotoIcon style={{ color: "#F78B1E", marginBottom: -2 }} />
        </Box>
        <Box
          style={{
            display: "inline-block",
            width: "90%",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography style={{ fontSize: "12px", color: "#c0c0c0" }}>
              {fileName}
            </Typography>
            <Typography
              style={{ fontSize: "12px", color: "#c0c0c0", marginLeft: "auto" }}
            >
              {fileSize} MB
            </Typography>
          </Box>
          <LinearProgress
            className="custom-linear-progress"
            variant="determinate"
            value={uploadProgress}
          />
        </Box>
      </Box>
    </div>
  );
}

export default ManifestDropZone;
