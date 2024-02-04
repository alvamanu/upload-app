import React from "react";

import {
  Box,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import ToggleSwitch from "./ToggleSwitch";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ManifestDropZone from "./ManifestDropZone";

const UploadModalContent = () => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<{ [key: string]: string }>({
    importName: "",
    testingCenter1: "",
    testingCenter2: "",
    testingCenter3: "",
    testingCenter4: "",
  });

  const handleChange = (event: SelectChangeEvent) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box padding={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6.8}>
          <Box padding={1}>
            <FormControl size="small" fullWidth>
              <InputLabel
                sx={{
                  fontSize: "0.8rem",
                  color: "#172d5b",
                  fontWeight: "bold",
                  marginTop: 0.3,
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(16px, -11px) scale(0.92)", // Adjust the position and scale when focused
                  },
                }}
                id="select-import-name-label"
              >
                Select Import Name:
              </InputLabel>
              <Select
                IconComponent={(props) => <ExpandMoreIcon {...props} />}
                name="importName"
                labelId="select-import-name-label"
                value={value.importName}
                label="Select Import Name:"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box padding={1}>
            <Box
              component={"div"}
              style={{
                borderTop: "solid 1px lightgrey",
                width: "60%",
                marginBottom: 10,
              }}
            ></Box>
            <Typography
              component={"span"}
              style={{
                fontSize: "12px",
                borderBottom: "20px",
                paddingTop: 13,
              }}
              fontWeight={800}
            >
              {"Select a manifest that you'd like to import"}
            </Typography>
            <div style={{ marginTop: 10 }}></div>
            <ManifestDropZone />
          </Box>

          <Box
            component={"div"}
            style={{
              borderTop: "solid 1px lightgrey",
              width: "60%",
              marginBottom: 10,
              marginTop: 15,
            }}
          ></Box>
          <Typography
            component={"span"}
            style={{
              fontSize: "12px",
              borderBottom: "20px",
              paddingTop: 13,
            }}
            fontWeight={800}
          >
            Elapsed Data Checking:
          </Typography>
          <Typography
            style={{ fontSize: "12px", color: "#18B803" }}
            mt={1}
            mb={1.5}
            fontWeight={800}
          >
            No Elapsed Dates!
          </Typography>
          <Box
            component={"div"}
            style={{
              borderTop: "solid 1px lightgrey",
              width: "60%",
              marginBottom: 10,
              marginTop: 5,
            }}
          ></Box>
          <Typography
            component={"span"}
            style={{
              fontSize: "12px",
              borderBottom: "20px",
              paddingTop: 13,
            }}
            fontWeight={800}
          >
            Tolerance Window:
          </Typography>
          <Box
            component={"div"}
            style={{
              marginTop: 10,
              marginLeft: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              style={{ marginRight: 10, width: 111 }}
              control={
                <ToggleSwitch handleChecked={handleChecked} checked={checked} />
              }
              label={
                <Typography style={{ fontSize: "12px" }}>{`Toggle ${
                  checked ? "ON" : "OFF"
                }`}</Typography>
              }
            />
            |{" "}
            <AccessTimeIcon
              style={{
                transform: "rotate(152deg)",
                marginRight: 5,
                marginLeft: 10,
              }}
            />
            <Typography style={{ fontSize: "12px" }}>
              Select Tolerance Level
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5.2}>
          <Typography style={{ fontSize: "12px" }} mt={1} fontWeight={800}>
            Split schedule using social distancing?
          </Typography>
          <Box style={{ borderBottom: "1px solid lightgrey" }} pb={0.5}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  componentsProps={{
                    typography: { variant: "body2", fontSize: 12 },
                  }}
                  value="yes"
                  control={
                    <Radio
                      sx={{
                        color: "#0A213C", // default color
                        "&.Mui-checked": {
                          color: "#0A213C", // color when checked
                        },
                      }}
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  componentsProps={{
                    typography: { variant: "body2", fontSize: 12 },
                  }}
                  value="no"
                  control={
                    <Radio
                      sx={{
                        color: "#0A213C", // default color
                        "&.Mui-checked": {
                          color: "#0A213C", // color when checked
                        },
                      }}
                    />
                  }
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box style={{ borderBottom: "1px solid lightgrey" }}>
            <Typography style={{ fontSize: "12px" }} mt={1.6} fontWeight={800}>
              Location Checking:
            </Typography>
            <Typography
              style={{ fontSize: "12px", color: "#18B803" }}
              mt={1}
              mb={1.5}
              fontWeight={800}
            >
              All Available!
            </Typography>
          </Box>
          <Box>
            <Typography style={{ fontSize: "12px" }} mt={1.6} fontWeight={800}>
              Client:
            </Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  componentsProps={{
                    typography: { variant: "body2", fontSize: 12 },
                  }}
                  value="single"
                  control={
                    <Radio
                      sx={{
                        color: "#0A213C", // default color
                        "&.Mui-checked": {
                          color: "#0A213C", // color when checked
                        },
                      }}
                    />
                  }
                  label="Single"
                />
                <FormControlLabel
                  componentsProps={{
                    typography: { variant: "body2", fontSize: 12 },
                  }}
                  value="multiple"
                  control={
                    <Radio
                      sx={{
                        color: "#0A213C", // default color
                        "&.Mui-checked": {
                          color: "#0A213C", // color when checked
                        },
                      }}
                    />
                  }
                  label="Multiple"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: 1.8,
              marginTop: 1,
            }}
          >
            <Typography style={{ fontSize: "12px", marginRight: 25 }}>
              Testing Center 1
            </Typography>
            <FormControl size="small">
              <InputLabel
                sx={{
                  fontSize: "0.8rem",
                  marginTop: 0.3,
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(16px, -11px) scale(0.92)", // Adjust the position and scale when focused
                  },
                }}
                id="testingCenter1-label"
              >
                Select Client
              </InputLabel>
              <Select
                IconComponent={(props) => <ExpandMoreIcon {...props} />}
                name="testingCenter1"
                style={{ width: 140 }}
                labelId="testingCenter1-label"
                value={value.testingCenter1}
                label="Select Client"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <AccessTimeIcon style={{ transform: "rotate(152deg)" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: 1.8,
            }}
          >
            <Typography style={{ fontSize: "12px", marginRight: 25 }}>
              Testing Center 2
            </Typography>
            <FormControl size="small">
              <InputLabel
                sx={{
                  fontSize: "0.8rem",
                  marginTop: 0.3,
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(16px, -11px) scale(0.92)",
                  },
                }}
                id="testingCenter2-label"
              >
                Select Client
              </InputLabel>
              <Select
                IconComponent={(props) => <ExpandMoreIcon {...props} />}
                name="testingCenter2"
                style={{ width: 140 }}
                labelId="testingCenter2-label"
                value={value.testingCenter2}
                label="Select Client"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <AccessTimeIcon style={{ transform: "rotate(152deg)" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: 1.8,
            }}
          >
            <Typography style={{ fontSize: "12px", marginRight: 25 }}>
              Testing Center 3
            </Typography>
            <FormControl size="small">
              <InputLabel
                sx={{
                  fontSize: "0.8rem",
                  marginTop: 0.3,
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(16px, -11px) scale(0.92)",
                  },
                }}
                id="testingCenter3-label"
              >
                Select Client
              </InputLabel>
              <Select
                IconComponent={(props) => <ExpandMoreIcon {...props} />}
                name="testingCenter3"
                style={{ width: 140 }}
                labelId="testingCenter3-label"
                value={value.testingCenter3}
                label="Select Client"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <AccessTimeIcon style={{ transform: "rotate(152deg)" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: 1.8,
            }}
          >
            <Typography style={{ fontSize: "12px", marginRight: 25 }}>
              Testing Center 4
            </Typography>
            <FormControl size="small">
              <InputLabel
                sx={{
                  fontSize: "0.8rem",
                  marginTop: 0.3,
                  "&.MuiInputLabel-shrink": {
                    transform: "translate(16px, -11px) scale(0.92)",
                  },
                }}
                id="testingCenter4-label"
              >
                Select Client
              </InputLabel>
              <Select
                IconComponent={(props) => <ExpandMoreIcon {...props} />}
                name="testingCenter4"
                style={{ width: 140 }}
                labelId="testingCenter4-label"
                value={value.testingCenter4}
                label="Select Client"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <AccessTimeIcon style={{ transform: "rotate(152deg)" }} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box component={"div"} sx={{ textAlign: "center" }}>
            <Typography fontWeight={800} fontSize={15}>
              Data in the import file is correct. Please press Continue to
              import.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UploadModalContent;
