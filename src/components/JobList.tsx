import jobs from "../data";
import Job from "./Job";

const JobList = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center space-y-10">
      {jobs.map((job) => (
        <Job key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobList;
