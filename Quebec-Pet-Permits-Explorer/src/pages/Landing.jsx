import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import planceImg from "../images/animals.png";
import { useHistory } from "react-router-dom";

export const Landing = () => {
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    history.push("/dashboard");
  };

  return (
    <>
      <section className="pt-5 sm:pt-5 md:pt-[5rem] h-[100vh] bg-[#FFFFFF] ">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative">
            <h1 className="text-center text-5xl font-bold dark:text-white sm:text-6xl lg:text-left lg:text-7xl" style={{ color: '#008080' }}>
              Permits for Animals
              <span className="relative">
                <svg
                  className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  viewBox="0 0 260 15.6"
                >
                  {/* SVG path data */}
                </svg>
              </span>
            </h1>
            <div className="relative items-center gap-12 lg:flex">
              <div className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
                <p className="mt-12 text-lg text-[#4a4a4a] dark:text-gray-300 sm:text-xl">
                  Check out our awesome dashboard on animal permits in Quebec! 
                  It's packed with insights on everything from vaccinations and microchipping to pet types (cat vs. dog) and even breed breakdowns. 
                  Pie charts, bar graphs, treemaps, and scatterplots bring the data to life, letting you explore animal age, weight, gender, and distribution across the province. 
                  It's a treasure trove of info for any animal lover or data enthusiast!
                </p>
                <form onSubmit={handleFormSubmit} className="mt-12">
                  <div>
                    <div className="md:pr-1.5 lg:pr-0">
                      <button
                        type="submit"
                        title="Start buying"
                        className="relative ml-auto h-12 w-max before:absolute before:inset-0 before:rounded-full before:bg-teal-600 before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6" 
         
                      >
                        <span className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block">
                          Click here to enter the Visualization dashboard
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="relative mx-auto h-6 w-max text-white dark:text-gray-900 md:hidden"
                        >
                          {/* SVG path data */}
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
                <img
                  className="w-full"
                  src={planceImg}
                  alt="Animal permits dashboard visualization"
                  height={600}
                  width={900}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
