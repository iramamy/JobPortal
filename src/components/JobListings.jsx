import React from "react";
import JobListing from "./JobListing";
import ScrollToTop from "react-scroll-to-top";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import AutocompleteSearch from "./AutocompleteSearch";


const JobListings = ({ isHome = false }) => {
    const [Jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [jobsToShow, setJobsToShow] = useState(6);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobs(data);
                setFilteredJobs(data.slice(0, jobsToShow));
            } catch (error) {
                console.log("ERROR FETCHING DATA!", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleSelect = (selectedItem) => {
        const filtered = Jobs.filter((job) => job.title === selectedItem.title);
        setFilteredJobs(filtered);
    };

    const handleClear = () => {
        setFilteredJobs(Jobs.slice(0, 6));
    };

    const handleShowMore = () => {
        const counter = jobsToShow + 6;
        setJobsToShow(counter);
        setFilteredJobs(Jobs.slice(0, counter));
    };

    return (
        <>
            <section className="bg-blue-50 px-4 py-10 mt-12">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Recent Jobs" : "Browse jobs"}
                    </h2>
                    {isHome ? undefined : (
                        <div className="mb-5">
                            <AutocompleteSearch
                                items={Jobs}
                                onSelect={handleSelect}
                                onClear={handleClear}
                            />
                        </div>
                    )}

                    <div>
                        {loading ? (
                            <Spinner loading={loading} />
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {filteredJobs.map((job) => (
                                    <JobListing key={job.id} job={job} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {!isHome && (
                    <div className="m-auto my-10 px-6">
                        { filteredJobs.length >= 6 && jobsToShow < Jobs.length && (
                            <button
                                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 mx-auto"
                                onClick={handleShowMore}
                            >
                                Show more
                            </button>
                        )}
                    </div>
                )}
                {!isHome && jobsToShow >= Jobs.length && filteredJobs.length >= 6 && (
                    <div>
                        <h1 className="text-center text-xl font-bold">
                            You've reached the end of the job list.
                        </h1>
                        <ScrollToTop smooth style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#fff"
                        }}/>
                    </div>
                )}
            </section>
        </>
    );
};

export default JobListings;
