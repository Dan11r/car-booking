import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { observer } from "mobx-react-lite";
import ListPage from "./components/pages/ListPage";
import DraftPage from "./components/pages/DraftPage";
import LoadingPage from "./components/pages/LoadingPage";
import SuccessPage from "./components/pages/SuccessPage";
import MainLayout from "./components/layouts/MainLayout";
import ErrorNotification from "./components/shared/ErrorNotification";

const App: FC = observer(() => {
  return (
    <>
      <ErrorNotification />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ListPage />} />
          <Route path="draft" element={<DraftPage />} />
          <Route path="draft/:id" element={<DraftPage />} />
          <Route path="loading" element={<LoadingPage />} />
          <Route path="success/:id" element={<SuccessPage />} />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Route>
      </Routes>
    </>
  );
});

export default App;
