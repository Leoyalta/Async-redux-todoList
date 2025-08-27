import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";
import { Layout } from "./Components/Layout/Layout.jsx";
import { AppBar } from "./Components/AppBar/AppBar.jsx";
import { TaskForm } from "./Components/TaskForm/TaskForm.jsx";
import { TaskList } from "./Components/TaskList/TaskList.jsx";
import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);

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
