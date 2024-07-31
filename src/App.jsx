import {
    createRoutesFromElements,
    RouterProvider,
    Route,
    createBrowserRouter,
} from "react-router-dom";

import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import SingleJob, { jobLoader } from "./pages/SingleJob";
import AddJobPage from "./pages/AddJobPage";
import EditJobpage from "./pages/EditJobpage";

const App = () => {
    // Add new job
    const addNewJob = async (newJob) => {
        const response = await fetch("/api/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJob),
        });
        return;
    };

    // Delete job
    const deleteJob = async (id) => {
        const response = await fetch(`/api/jobs/${id}`, {
            method: "DELETE",
        });
        return;
    };

    // Edit job
    const updateJob = async (job) => {
        const response = await fetch(`/api/jobs/${job.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(job),
        });
        return;
    };
    

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route
                    path="/add-job"
                    element={<AddJobPage addJobSubmit={addNewJob} />}
                />
                <Route
                    path="/jobs/:id"
                    element={<SingleJob deleteJob={deleteJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/jobs/edit/:id"
                    element={<EditJobpage updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                />

                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default App;
