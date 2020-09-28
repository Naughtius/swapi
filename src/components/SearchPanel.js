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
   helperText: {
      color: "rgb(97, 26, 21)",
   },
});

const SearchPanel = () => {
   const classes = useStyles();
   const [term, setTerm] = useState("");
   const [searchItems, setSearchItems] = useState([]);
   const [error, setError] = useState(false);

   useEffect(() => {
      const swapiService = new SwapiService();

      swapiService
         .getAllItems()
         .then((response) => {
            setSearchItems(response);
         })
         .catch(() => {
            setError(true);
         });
   }, []);

   const search = (items, term) => {
      if (term.length === 0) {
         return [];
      }

      return items.filter((item) => {
         return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
   };

   const onSearchChange = (e) => {
      const term = e.target.value;
      setTerm(term);
   };

   const errorMessage = error ? "ПОПРОБУЙТЕ ПОЗЖЕ" : null;
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
            helperText={errorMessage}
            className={classes.textField}
            FormHelperTextProps={{
               className: classes.helperText,
            }}
         />
         <SearchList data={visibleItems} />
      </div>
   );
};

export default SearchPanel;
