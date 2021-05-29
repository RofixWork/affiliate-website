import React from "react";
import {
  Drawer as DrawerMui,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { ListItem, ListItemText, List } from "@material-ui/core";
import { FaHome } from "react-icons/fa";
const Drawer = ({ open, setOpen }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {!mobile ? (
        <DrawerMui anchor="left" open={open} onClose={() => setOpen(false)}>
          <List style={{ width: "250px" }}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Features" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pricing" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Faq" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </DrawerMui>
      ) : null}
    </>
  );
};

export default Drawer;
