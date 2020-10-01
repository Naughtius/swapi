import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchList from "../components/SearchList";
import {
   searchChangeHandler,
   search,
   fetchSearchItems,
} from "../store/actions/search";
import { useDispatch, useSelector } from "react-redux";

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
   const dispatch = useDispatch();

   const error = useSelector((state) => state.app.error);
   const searchItems = useSelector((state) => state.search.fetchedSearchItems);
   const term = useSelector((state) => state.search.term);

   useEffect(() => {
      dispatch(fetchSearchItems());
   }, [dispatch]);

   const onSearchChange = (e) => {
      const term = e.target.value;
      dispatch(searchChangeHandler(term));
   };

   const errorMessage = error ? "ПОПРОБУЙТЕ ПОЗЖЕ" : null;
   const visibleItems = dispatch(search(searchItems, term));
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
