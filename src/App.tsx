import JobList from "./components/JobList";
import HeaderDesktop from "./images/bg-header-desktop.svg";

const App = () => {
  return (
    <>
      <img
        src={HeaderDesktop}
        className="object-contain w-full bg-dark-cyan"
        alt=""
      />
      <JobList />
    </>
  );
};

export default App;
