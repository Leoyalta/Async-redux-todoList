import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "./redux/tasksSlice.js";
import { fetchTasks } from "./redux/operations";
import { Layout } from "./Components/Layout/Layout.jsx";
import { AppBar } from "./Components/AppBar/AppBar.jsx";
import { TaskForm } from "./Components/TaskForm/TaskForm.jsx";
import { TaskList } from "./Components/TaskList/TaskList.jsx";
import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <h1>Hello async redux</h1>
      <Layout>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </Layout>
    </div>
  );
}

export default App;
