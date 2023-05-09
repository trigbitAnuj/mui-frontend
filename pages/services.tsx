import React from "react";
import {
  Container,
  Typography,
  useTheme,
  Box,
  Paper,
  Button,
  Fab,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { StyleBox } from "@/components/styledComponent";

const Services: React.FC = () => {
  const services = [
    { id: 1, text: "Service1" },
    { id: 2, text: "Service2" },
    { id: 3, text: "service3" },
  ];
  const theme = useTheme();
  const [edit, setEdit] = React.useState<boolean>(false);
  const [inputText, setInputText] = React.useState<string>("hello");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleEdit = React.useCallback(
    (id: number) => {
      services.map((service) => (service.id === id ? setEdit(!edit) : null));
    },
    [edit]
  );
  const handleOnChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    },
    [inputText]
  );

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEdit(!edit);
  };

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [edit]);

  return (
    <Container maxWidth="lg" component="main">
      <Typography
        variant="h1"
        sx={{ textAlign: "center", my: 1, color: theme.palette.primary.light }}
      >
        Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "column", lg: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {services.map(({ id, text }) => (
          <>
            <Paper
              key={id.toString()}
              elevation={4}
              sx={{
                position: "relative",
                padding: 2,
                width: { xs: 1, md: 320 },
              }}
            >
              <form onSubmit={handleOnSubmit}>
                <Typography variant="h3">{text}</Typography>
                <Typography>
                  {" "}
                  {edit ? (
                    <TextField
                      ref={inputRef}
                      id="text-input"
                      value={inputText}
                      type="input"
                      placeholder="type text"
                      variant="outlined"
                      margin="normal"
                      onChange={handleOnChange}
                    />
                  ) : (
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Laudantium excepturi libero quos earum eos non officiis, nostrum laborum doloribus, autem quisquam explicabo tempore cum velit. Doloremque labore reprehenderit itaque voluptatem."
                  )}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                  Learn more
                </Button>
                <StyleBox>
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    sx={{ marginRight: 2 }}
                  >
                    <AddIcon />
                  </Fab>
                  <Fab
                    color="secondary"
                    aria-label="edit"
                    size="small"
                    onClick={() => handleEdit(id)}
                  >
                    <EditIcon />
                  </Fab>
                </StyleBox>
              </form>
            </Paper>
          </>
        ))}
      </Box>
    </Container>
  );
};

export default Services;
