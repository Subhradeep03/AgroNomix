import React from "react";

const Purchase = () => {
  return (
    <div className="bg-white flex flex-col w-1/2 p-10 rounded-2xl">
      <h1 className="text-start text-2xl font-semibold">Purchase Overview</h1>
      <br />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row">
            <img
              src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=shopping-bag&icon_size=64&icon_color=DD31CF&icon_flip=&icon_rotate=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">No of Purchase</div>
            <div className="text-start text-lg">45</div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row">
            <img
              src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=cancel&icon_size=64&icon_color=F92F2F&icon_flip=&icon_rotate=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">Cancel Order</div>
            <div className="text-start text-lg">04</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-5">
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row">
            <img
              src="https://flaticons.net/icon.php?slug_category=banking&slug_icon=donate&icon_size=64&icon_color=E77518&icon_flip=&icon_rotate=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">Cost</div>
            <div className="text-start text-lg">786</div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-2 mr-12">
          <div className="flex flex-row">
            <img
              src="https://flaticons.net/icon.php?slug_category=shopping&slug_icon=discount&icon_size=64&icon_color=D505FF&icon_flip=&icon_rotate=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">Returns</div>
            <div className="text-start text-lg">07</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
