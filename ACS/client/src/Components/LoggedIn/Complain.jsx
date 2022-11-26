import React from "react";

const Complain = () => {
  return (
    <div className="">
      <div>
        <form action="">
          <div>
            <div className="flex space-x-2">
              <label htmlFor="yourName">enter your name</label>
              <input
                type="text"
                name="yourName"
                id="yourName"
                className="border-2"
                value="this is placed by default"
              />
            </div>
            <div className="flex space-x-2">
              <label htmlFor="targetName">enter the name of the target</label>
              <input
                type="text"
                name="targetName"
                id="targetName"
                className="border-2"
              />
            </div>
            <div className="flex space-x-2">
              <label htmlFor="position">what is his/her postion?</label>
              <input
                type="text"
                name="position"
                id="posiotion"
                className="border-2"
                // value="this is placd by default"
              />
            </div>
            <div className="flex space-x-2">
              <label htmlFor="location">where did this happen?</label>
              <input
                type="text"
                name="location"
                id="location"
                className="border-2"
                // value="this is placed by default"
              />
            </div>
            <div className="flex space-x-2">
              <label htmlFor="title">
                How would you phrase it in one sentence
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="border-2"
                // value="this is placed by default"
              />
            </div>
            <div className="flex space-x-2">
              <label htmlFor="yourName">enter your name</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                className="border"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complain;
