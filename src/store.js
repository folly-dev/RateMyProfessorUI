import { createStore, combineReducers,applyMiddleware, compose } from "redux"
import { professors } from "./Reducers/ProfessorsReducer"
import { SignUpReducer } from "./Reducers/SignUpReducer"
import { SignInReducer } from "./Reducers/SignInReducer";
import thunk from "redux-thunk";
import { Profs } from "./Reducers/ProfsReducer";
import { Reviews } from "./Reducers/ReviewsListReducer";
import { AddReviewReducer } from "./Reducers/CreateReviewReducer";
import { ListCourse } from "./Reducers/CourseReducer";
import { DeleteReviewOnProfileReducer, ReviewOnProfileReducer } from "./Reducers/ReviewOnProfileReducer";
import { GetAll } from "./Reducers/GetAllReviews";
import { GetQueried } from "./Reducers/GetReviewQueried";
import Cookies from "js-cookie";
const user = Cookies.get('user') || null;
const InitialState = { SignIn: { user } }
const reducer = combineReducers({
  listProfessors: professors,
  SignUp: SignUpReducer,
  SignIn: SignInReducer,
  Profs: Profs,
  ProfessorReviews: Reviews,
  AddReview: AddReviewReducer,
  ReviewOnProfile: ReviewOnProfileReducer,
  DeleteReviewOnProfile: DeleteReviewOnProfileReducer,
  ListCourse: ListCourse,
  AllReviews: GetAll,
  QueriedRev : GetQueried
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  InitialState,
  composeEnhancer(applyMiddleware(thunk))
);
export { store };


