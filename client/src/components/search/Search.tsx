// export default function Search() {
//   return (
//     <>
//       <div className="search">
//         <input type="text" />
//         <button>Search</button>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { WorkoutType } from "../../types/WorkoutType";

import * as workoutService from "../../services/workoutService";
import WorkListItem from "../workoutList/workoutListItem/WorkoutListItem";

export default function Search() {
  const [filteredItems, setFilteredItems] = useState<WorkoutType[]>([]);

  return (
    <div className="search-wrapper">
      <h3 className="search-title">Search type of workouts</h3>
      <Formik
        initialValues={{ search: "" }}
        validate={(values) => {
          const errors: { search?: string } = {};
          if (!values.search) {
            errors.search = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          const searchValue = values.search.toLowerCase();

          workoutService
            .getAllBySearch(searchValue)
            .then((res) => setFilteredItems(res));

          console.log(filteredItems);
        }}
      >
        {() => (
          <Form>
            <div>
              <Field className="search-input" name="search" type="text" />
              <ErrorMessage
                name="search"
                component="div"
                className="error-validation"
              />
            </div>
            <button
              className="btn btn-primary btn-block btn-large"
              type="submit"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>

      <div className="search-items-div">
        {filteredItems.length > 0 ? (
          <ul className="search-ul">
            {filteredItems.map((workout) => (
              <WorkListItem key={workout._id} {...workout} />
            ))}
          </ul>
        ) : (
          <p className="no-match-p">There is no match...</p>
        )}
      </div>
    </div>
  );
}
