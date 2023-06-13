import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "./../../RTK/store";
import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link,
} from "@mui/material";
import { setCurrentPages } from "../../RTK/asyncThunk/items";

const Navigate = () => {
  const dispatch = useAppDispatch();
  const { currentPage, countPages } = useAppSelector(
    (state) => state.itemsSlice
  );

  // theme mui

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
        light: "#ae2525",
        dark: "#000000",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className="my-[40px] w-full flex justify-center">
      {countPages > 1 && (
        <Stack spacing={2}>
          {/* <ThemeProvider theme={theme}> */}
          <Pagination
            count={countPages}
            page={Number(currentPage)}
            onChange={(_, num) => dispatch(setCurrentPages(num))}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
            sx={{
              color: "red",
            }}
            renderItem={(item) => (
              <ThemeProvider theme={theme}>
                <PaginationItem
                  // вылетает ошибка если ...item не поставить выше стилей
                  {...item}
                  variant="text"
                  color="primary"
                  sx={{
                    width: "38px",
                    height: "50px",
                    color: "#000000",
                    background: "#ffffff",
                    border: "1px solid #E5E5E5",
                  }}
                />
              </ThemeProvider>
            )}
          />
          {/* </ThemeProvider> */}
        </Stack>
      )}
    </div>
  );
};

export default Navigate;
