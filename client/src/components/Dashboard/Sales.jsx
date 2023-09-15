import React from "react";

const Sales = () => {
  return (
    <div className="bg-white flex flex-col w-1/2 p-10 rounded-2xl">
      <h1 className="text-start text-2xl font-semibold">Sales Overview</h1>
      <br />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row">
            <img
              src="https://flaticons.net/icon.php?slug_category=shopping&slug_icon=sales-order&icon_size=64&icon_color=0062FF&icon_flip=&icon_rotate=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">Total Sales</div>
            <div className="text-start text-lg">786</div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row">
            <img
              src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=finance&icon_size=64&icon_color=0BF95A&icon_flip=&icon_rotate=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">Total Revenue</div>
            <div className="text-start text-lg">17584</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mt-5">
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row">
            <img
              src="https://flaticons.net/icon.php?slug_category=banking&slug_icon=money-bag&icon_size=64&icon_color=C12525&icon_flip=&icon_rotate=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">Total Cost</div>
            <div className="text-start text-lg">12487</div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-2 mr-20">
          <div className="flex flex-row">
            <img
              src="https://flaticons.net/icon.php?slug_category=data&slug_icon=profit-01-wf&icon_size=64&icon_color=F0E80F&icon_flip=&icon_rotate=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-xl">Profit</div>
            <div className="text-start text-lg">5097</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
