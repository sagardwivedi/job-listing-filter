interface job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const Job = (job: job) => {
  return (
    <div
      className={`flex flex-1 ${
        job.featured
          ? "before:absolute before:top-0 before:-left-4 before:bg-dark-cyan"
          : ""
      } drop-shadow-2xl w-[80%] rounded-lg bg-light-gray-cyan-filterTab p-8`}
    >
      <div>
        <img src={job.logo} loading="lazy" alt={job.company} />
      </div>
      <div className="ml-4 flex w-full flex-row justify-between">
        <div>
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-dark-cyan">
              {job.company}
            </h3>
            {job.new && (
              <span className="ml-4 rounded-3xl bg-dark-cyan px-2 font-medium text-light-gray-cyan-background">
                NEW!
              </span>
            )}
            {job.featured && (
              <span className="ml-2 rounded-3xl bg-very-dark-gray-cyan px-2 font-medium text-light-gray-cyan-background">
                FEATURED
              </span>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-very-dark-gray-cyan">
              {job.position}
            </h2>
            <div className="flex space-x-4 text-sm">
              <p>{job.postedAt}</p>
              <p>{job.contract}</p>
              <p>{job.location}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 font-bold text-dark-cyan">
          <p className="cursor-pointer rounded bg-dark-gray-cyan/10 p-2">
            {job.role}
          </p>
          <p className="rounded bg-dark-gray-cyan/10 p-2">{job.level}</p>
          {job.languages.map((language) => (
            <p className="rounded bg-dark-gray-cyan/10 p-2" key={language}>
              {language}
            </p>
          ))}
          {job.tools.map((tool) => (
            <p className="rounded bg-dark-gray-cyan/10 p-2" key={tool}>
              {tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Job;
