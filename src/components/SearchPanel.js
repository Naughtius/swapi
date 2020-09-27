import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchList from "../components/SearchList";
import SwapiService from "../services/swapiService";

const useStyles = makeStyles({
   root: {
      display: "flex",
      flexWrap: "wrap",
      marginBottom: "30px",
   },
   textField: {
      width: "25ch",
   },
});

const SearchPanel = () => {
   const classes = useStyles();
   const [term, setTerm] = useState("");
   const [searchItems, setSearchItems] = useState([]);

   useEffect(() => {
      const swapiService = new SwapiService();

      swapiService.getAllItems().then((response) => {
         setSearchItems(response);
      });
   }, []);

   const search = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter((item) => {
         return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
   };

   const onSearchChange = (e) => {
      const term = e.target.value;
      setTerm(term);
   };

   const visibleItems = search(searchItems, term);
   return (
      <div className={classes.root}>
         <TextField
            id="outlined-full-width"
            label="Поиск"
            placeholder="Искать..."
            fullWidth
            margin="normal"
            InputLabelProps={{
               shrink: true,
            }}
            variant="outlined"
            value={term}
            onChange={onSearchChange}
         />
         {term === "" ? null : <SearchList data={visibleItems} />}
      </div>
   );
};

export default SearchPanel;
