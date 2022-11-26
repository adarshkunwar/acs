import React from "react";

const Complain = () => {
  return (
    <div className=" w-screen bg-green-300">
      {/* form and image preview */}
      <div className="grid grid-cols-3 px-40 py-10">
        {/* form here */}
        <form action="" className="col-span-2">
          <div className="bg-red-300  space-y-3 locked-inner">
            <div className="flex text-xl items-center space-x-2 locked-inner w-fit b-100">
              <label htmlFor="yourName"> Tapaiko naam?</label>
              <input
                type="text"
                name="yourName"
                id="yourName"
                className="border-2 w-96 px-5 py-1 b-100"
                // value="this is placed by default"
              />
            </div>

            <div className="flex text-xl items-center space-x-2 locked-inner w-fit b-100">
              <label htmlFor="title">Aarop</label>
              <input
                type="text"
                name="title"
                id="title"
                className="border-2 px-5 py-1 b-100"
              />
            </div>
            <div className="flex text-xl items-center space-x-2 locked-inner w-fit b-100">
              <label htmlFor="targetName">Aarop garne vyakti</label>
              <input
                type="text"
                name="targetName"
                id="targetName"
                className="border-2 px-5 py-1 b-100"
              />
            </div>
            <div className="flex text-xl items-center space-x-2 locked-inner w-fit b-100">
              <label htmlFor="position">Usko position</label>
              <input
                type="text"
                name="position"
                id="posiotion"
                className="border-2 px-5 py-1 b-100"
              />
            </div>
            <div className="flex text-xl items-center space-x-2 locked-inner w-fit b-100">
              <label htmlFor="location">aarop vaeko thau</label>
              <input
                type="text"
                name="location"
                id="location"
                className="border-2 px-5 py-1 b-100"
              />
            </div>
            <div className="flex text-xl items-center space-x-2 locked-inner w-fit rounded-xl">
              <label htmlFor="yourName">briskrit jankari</label>
              <textarea
                name="description"
                id="description"
                cols="60"
                rows="10"
                className="border locked-inner px-5 py-1 rounded-xl"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bigbtn">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="h-96 bg-blue-300 flex jusify-center items-center text-2xl">
          <div>Image is posted and previewed here</div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Complain;
