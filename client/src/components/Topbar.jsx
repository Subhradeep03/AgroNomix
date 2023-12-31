import { Drawer, Tooltip } from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Menu, Transition } from "@headlessui/react";

const Topbar = () => {
  const id = window.location.pathname.split("/")[1];
  const [selectedMenu, setSelectedMenu] = useState(id || "dashboard");
  const [time, setTime] = useState(new Date());
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 640);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileView) {
      // Show sidebar initially in mobile view
      setShowSidebar(true);
    }
  }, [isMobileView]);

  const timeOptions = { timeZone: "Asia/Kolkata", hour12: false };
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div
      style={{
        background: "white",
        borderBottom: `black 2px solid`,
      }}
    >
      <div className="w-full px-4">
        <div className="relative flex h-16 items-center justify-between">
          <button onClick={handleToggleDrawer}>
            <img
              src={
                "https://flaticons.net/icon.php?slug_category=user-interface&slug_icon=row&icon_size=256&icon_color=0F0F0F&icon_flip=&icon_rotate=0"
              }
              className="w-6 h-6"
            />
          </button>
          <div className=" flex flex-1 items-center justify-left sm:items-stretch max-sm:m-4 max-sm:justify-middle sm:ml-5">
            <div className="flex flex-shrink-0 items-center">
              <div className="text-xl font-bold text-black">
                <a href="/">AgroNomix</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-4">
            {!isMobileView && (
              <div className="text-xl font-bold flex flex-row w-auto items-center">
                <div className="text-lg font-bold mr-8 text-black">
                  {time.toLocaleDateString([], dateOptions)}
                </div>
                <div className="text-lg font-bold w-24 text-black">
                  {time.toLocaleTimeString([], timeOptions)}
                </div>
              </div>
            )}

            <Menu as="div" className=" ml-4 relative">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <Avatar
                    src={`https://cdn5.vectorstock.com/i/1000x1000/49/29/shop-store-vector-27234929.jpg`}
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        My Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                        )}
                        // onClick={() => {
                        //   localStorage.removeItem("theme");
                        //   Cookies.remove("refreshToken");
                        //   Cookies.remove("idToken");
                        //   Cookies.remove("company_id");
                        //   Cookies.remove("accessToken");
                        //   Cookies.remove("company_name");
                        //   Cookies.remove("roleId");
                        //   Cookies.remove("theme");
                        //   Cookies.remove("consent");
                        //   Cookies.remove("myAwesomeCookieName2");
                        //   window.location.href = "/";
                        // }}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            <Drawer
              anchor="left"
              open={showDrawer}
              sx={{
                zIndex: 1500,
              }}
              onClose={handleToggleDrawer}
            >
              <div className="w-full z-[1500] h-full bg-white">
                <div className="flex flex-row justify-evenly items-center mt-5 gap-x-5">
                  {/* <img src={BlackLogo} className="w-8 h-8" alt="logo" /> */}

                  <div className="text-2xl font-semibold -ml-5">AgroNomix</div>
                </div>
                <Link
                  to="/dashboard"
                  className="text-[#0f0f0f] hover:text-gray-600"
                  onClick={() => setSelectedMenu("dashboard")}
                >
                  <li
                    className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                      selectedMenu === "dashboard"
                        ? "bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-white"
                        : "hover:bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                    }`}
                    onClick={() => setSelectedMenu("dashboard")}
                  >
                    <Tooltip title="Dashboard" arrow placement="right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={` ${showSidebar ? "w-6 h-6" : "w-10 h-5"}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        />
                      </svg>
                    </Tooltip>
                    <div className="block">Dashboard</div>
                    <svg
                      fill="black"
                      strokeWidth={5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1 ml-auto"
                      viewBox="0 0 80.593 122.88"
                    >
                      <polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" />
                    </svg>
                  </li>
                </Link>
                <Link
                  to="/inventory"
                  className="text-gray-800 hover:text-gray-600"
                  onClick={() => setSelectedMenu("inventory")}
                >
                  <li
                    className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                      selectedMenu === "inventory"
                        ? "bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-white"
                        : "hover:bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                    }`}
                    onClick={() => setSelectedMenu("inventory")}
                  >
                    <Tooltip title="Inventory" arrow placement="right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        id="meteor-icon-kit__regular-inventory"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_525_147)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V23C0 23.5523 0.447715 24 1 24C1.55228 24 2 23.5523 2 23V22H22V23C22 23.5523 22.4477 24 23 24C23.5523 24 24 23.5523 24 23V1C24 0.447715 23.5523 0 23 0C22.4477 0 22 0.447715 22 1V8H20V3C20 2.44772 19.5523 2 19 2H11C10.4477 2 10 2.44772 10 3V4H5C4.44772 4 4 4.44772 4 5V8H2V1ZM10 6H6V8H10V6ZM2 10V20H4V13C4 12.4477 4.44772 12 5 12H13C13.5523 12 14 12.4477 14 13V14H19C19.5523 14 20 14.4477 20 15V20H22V10H2ZM18 8V4H12V8H18ZM12 20H6V14H12V20ZM14 20V16H18V20H14Z"
                            fill="#758CA3"
                          />
                        </g>

                        <defs>
                          <clipPath id="clip0_525_147">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Tooltip>
                    <div className="block">Inventory</div>
                    <svg
                      fill="black"
                      strokeWidth={5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1 ml-auto"
                      viewBox="0 0 80.593 122.88"
                    >
                      <polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" />
                    </svg>
                  </li>
                </Link>
                <Link
                  to="/sales"
                  className="text-gray-800 hover:text-gray-600"
                  onClick={() => setSelectedMenu("sales")}
                >
                  <li
                    className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                      selectedMenu === "sales"
                        ? "bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-white"
                        : "hover:bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                    }`}
                    onClick={() => setSelectedMenu("sales")}
                  >
                    <Tooltip title="sales" arrow placement="right">
                      <svg
                        fill="white"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={` ${showSidebar ? "w-6 h-6" : "w-10 h-5"}`}
                        viewBox="0 0 122.88 122.88"
                      >
                        <path
                          className="st0"
                          d="M28.7,122.88h11.03v-13.4H28.7V122.88L28.7,122.88z M22.67,19.51h74.76c2.56,0,4.66,2.09,4.66,4.66v75.01 c0,2.56-2.1,4.66-4.66,4.66l-74.76,0c-2.56,0-4.66-2.1-4.66-4.66V24.16C18.01,21.6,20.1,19.51,22.67,19.51L22.67,19.51L22.67,19.51 z M42.35,41.29h35.38c1.55,0,2.81,1.27,2.81,2.81v35.12c0,1.55-1.27,2.81-2.81,2.81H42.35c-1.55,0-2.81-1.27-2.81-2.81V44.1 C39.54,42.56,40.8,41.29,42.35,41.29L42.35,41.29z M122.88,65.62v9.16h-13.4v-9.16H122.88L122.88,65.62z M122.88,48.1v9.16l-13.4,0 V48.1L122.88,48.1L122.88,48.1L122.88,48.1z M122.88,83.15v11.03h-13.4V83.15H122.88L122.88,83.15z M122.88,28.7v11.03h-13.4V28.7 H122.88L122.88,28.7z M0,65.62v9.16h13.4v-9.16H0L0,65.62z M0,48.1v9.16l13.4,0V48.1L0,48.1L0,48.1z M0,83.15v11.03h13.4V83.15H0 L0,83.15z M0,28.7v11.03h13.4V28.7H0L0,28.7z M65.62,0h9.16v13.4h-9.16V0L65.62,0L65.62,0z M48.1,0h9.16v13.4H48.1V0L48.1,0L48.1,0 z M83.15,0h11.03v13.4H83.15V0L83.15,0L83.15,0z M28.7,0h11.03v13.4H28.7V0L28.7,0L28.7,0z M65.62,122.88h9.16v-13.4h-9.16V122.88 L65.62,122.88z M48.1,122.88h9.16v-13.4H48.1V122.88L48.1,122.88z M83.15,122.88h11.03v-13.4H83.15V122.88L83.15,122.88z"
                        />
                      </svg>
                    </Tooltip>
                    <div className="block">Sales</div>
                    <svg
                      fill="black"
                      strokeWidth={5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1 ml-auto"
                      viewBox="0 0 80.593 122.88"
                    >
                      <polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" />
                    </svg>
                  </li>
                </Link>
                <Link
                  to="/customers"
                  className="text-gray-800 hover:text-gray-600"
                  onClick={() => setSelectedMenu("customers")}
                >
                  <li
                    className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                      selectedMenu === "customers"
                        ? "bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-white"
                        : "hover:bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                    }`}
                    onClick={() => setSelectedMenu("customers")}
                  >
                    <Tooltip title="customers" arrow placement="right">
                      <svg
                        fill="white"
                        stroke="currentColor"
                        strokeWidth={3}
                        className={` ${showSidebar ? "w-6 h-6" : "w-10 h-5"}`}
                        viewBox="0 0 117.033 122.88"
                      >
                        <path d="M75.828,108.589c-0.381,2.005-1.053,3.845-2.021,5.521c-1,1.729-2.309,3.279-3.926,4.648 c-1.617,1.367-3.381,2.397-5.283,3.086c-1.906,0.689-3.934,1.035-6.076,1.035c-2.143,0-4.17-0.346-6.077-1.035 c-1.903-0.688-3.665-1.719-5.282-3.086c-1.618-1.369-2.927-2.92-3.927-4.648c-0.998-1.728-1.682-3.63-2.054-5.706 c-0.181-1.015,0.495-1.987,1.51-2.169c0.032-0.005,0.329-0.034,0.329-0.036h31.001c1.037,0,1.877,0.84,1.877,1.875 C75.898,108.253,75.875,108.425,75.828,108.589L75.828,108.589z M68.398,6.868c1.521,0.397,2.998,0.879,4.43,1.444 c2.109,0.832,4.135,1.836,6.076,3.007c0.076,0.047,0.15,0.097,0.223,0.148c1.861,1.144,3.592,2.401,5.189,3.772 c1.67,1.434,3.227,3.019,4.67,4.754l0.012,0.013L89,20.006c1.41,1.708,2.672,3.531,3.787,5.462 c1.119,1.941,2.076,3.962,2.867,6.056l0.004-0.001c0.818,2.154,1.43,4.362,1.834,6.622c0.406,2.271,0.607,4.599,0.607,6.984 c0,4.714,0,7.257,0.002,7.566c0.01,2.417,0.023,4.779,0.041,7.085v0.024l0,0c0.008,2.083,0.145,4.179,0.404,6.279 c0.256,2.077,0.631,4.083,1.115,6.014l0.004-0.001c0.486,1.904,1.143,3.735,1.967,5.493c0.846,1.81,1.875,3.58,3.086,5.311 l0.006-0.004c1.195,1.697,2.691,3.373,4.488,5.027c1.855,1.709,4.01,3.383,6.461,5.023c1.406,0.942,1.783,2.846,0.84,4.253 c-0.59,0.881-1.559,1.358-2.547,1.359v0.01H86.244H58.522H30.798H3.076C1.377,98.568,0,97.191,0,95.493 c0-1.117,0.595-2.094,1.485-2.633c2.491-1.686,4.63-3.354,6.416-5.008c1.777-1.646,3.265-3.33,4.462-5.055 c0.036-0.051,0.072-0.1,0.11-0.148c1.157-1.694,2.147-3.42,2.967-5.173c0.834-1.783,1.503-3.622,2.004-5.517 c0.01-0.04,0.021-0.079,0.033-0.118c0.475-1.84,0.837-3.779,1.088-5.812c0.252-2.047,0.378-4.161,0.378-6.337V45.129 c0-2.34,0.21-4.671,0.629-6.987c0.419-2.313,1.036-4.534,1.849-6.655c0.809-2.121,1.779-4.154,2.905-6.096 c1.119-1.929,2.397-3.763,3.828-5.496l0.017-0.02l-0.004-0.004c1.428-1.707,2.995-3.292,4.701-4.749 c1.683-1.437,3.5-2.743,5.45-3.914c1.975-1.179,4.015-2.169,6.128-2.971c1.469-0.558,2.979-1.026,4.529-1.405 c0.529-1.851,1.437-3.349,2.722-4.496C53.471,0.752,55.81-0.025,58.712,0c2.875,0.025,5.194,0.821,6.952,2.391 C66.953,3.542,67.865,5.034,68.398,6.868L68.398,6.868z M70.594,14.03c-1.701-0.67-3.436-1.198-5.203-1.577 c-1.361-0.176-2.482-1.253-2.656-2.677c-0.166-1.341-0.551-2.281-1.154-2.819c-0.605-0.541-1.578-0.817-2.917-0.829 c-1.33-0.012-2.291,0.246-2.882,0.774c-0.6,0.536-0.98,1.485-1.14,2.85l-0.003,0c-0.148,1.303-1.127,2.414-2.484,2.667 c-1.915,0.363-3.762,0.883-5.547,1.561c-1.782,0.676-3.495,1.507-5.143,2.49c-1.641,0.985-3.177,2.091-4.609,3.313 c-1.43,1.221-2.757,2.566-3.98,4.028l-0.004-0.003c-1.194,1.449-2.274,3.003-3.234,4.659c-0.945,1.629-1.771,3.366-2.473,5.207 c-0.702,1.83-1.222,3.682-1.56,5.55c-0.34,1.874-0.509,3.844-0.509,5.906v14.564c0,2.412-0.143,4.774-0.427,7.083 c-0.274,2.224-0.693,4.428-1.256,6.605c-0.01,0.047-0.021,0.095-0.033,0.142c-0.587,2.219-1.384,4.402-2.389,6.549 c-0.97,2.073-2.125,4.089-3.461,6.046c-0.038,0.064-0.078,0.127-0.121,0.189c-1.408,2.026-3.192,4.039-5.352,6.039l-0.078,0.071 h18.819h27.724h27.722h18.787c-2.111-1.946-3.887-3.942-5.328-5.989l0.004-0.004l-0.004-0.008 c-1.416-2.024-2.625-4.102-3.621-6.231c-1.018-2.172-1.809-4.364-2.375-6.575l0.002-0.001l-0.002-0.011 c-0.555-2.202-0.979-4.461-1.264-6.771c-0.271-2.209-0.416-4.54-0.428-6.992v-0.007c-0.018-2.278-0.031-4.656-0.041-7.133 c-0.018-4.584-0.025-7.086-0.025-7.566c0-2.024-0.17-3.992-0.512-5.902c-0.34-1.903-0.848-3.743-1.521-5.517l0.004-0.001 l-0.004-0.011c-0.691-1.829-1.504-3.557-2.439-5.178c-0.934-1.617-2.004-3.159-3.211-4.622l0.002-0.001 c-1.197-1.438-2.51-2.77-3.939-3.997c-1.385-1.188-2.848-2.256-4.393-3.207c-0.068-0.035-0.137-0.072-0.203-0.113 C74.066,15.577,72.354,14.724,70.594,14.03L70.594,14.03z" />
                      </svg>
                    </Tooltip>
                    <div className="block">Customers</div>
                    <svg
                      fill="black"
                      strokeWidth={5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1 ml-auto"
                      viewBox="0 0 80.593 122.88"
                    >
                      <polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" />
                    </svg>
                  </li>
                </Link>
                {/* <Link
          to="/reports"
          className="text-gray-800 hover:text-gray-600"
          onClick={() => setSelectedMenu("reports")}
        >
          <li
            className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
              selectedMenu === "reports"
                ? "bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-white"
                : "hover:bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
            }`}
            onClick={() => setSelectedMenu("reports")}
          >
            <Tooltip title="Reports" arrow placement="right">
              <svg
                fill="white"
                stroke="currentColor"
                strokeWidth={3}
                className={` ${showSidebar ? "w-6 h-6" : "w-10 h-5"}`}
                viewBox="0 0 121.7 122.88"
              >
                <path d="M53.62,0A53.63,53.63,0,0,1,98.5,83l23.2,25.29-16,14.63L83.32,98.26A53.62,53.62,0,1,1,53.62,0ZM72.08,32.68l-1.88-2.4a1.28,1.28,0,0,1-.27-1.17c.32-1,1.47-.88,2.26-.83,2.26.17,7.6.21,8.76.26a1.25,1.25,0,0,1,1.21,1.54c-.24,1.18-1.32,6.84-1.71,9-.14.75-.36,1.71-1.3,1.78a1.25,1.25,0,0,1-1.08-.53l-1.88-2.4-.76-1-9.24,7v.16a5.61,5.61,0,1,1-11.22,0c0-.12,0-.25,0-.37l-6.51-4.7a5.62,5.62,0,0,1-6.77-.28l-6.31,4.49A5.61,5.61,0,1,1,30,39.11a5.56,5.56,0,0,1,2.27.48l7.42-5.29a5.61,5.61,0,0,1,11.22.16l0,.37,6.51,4.7a5.6,5.6,0,0,1,6.53.1l8.52-6.5-.36-.45ZM72,47.14h7.74a.82.82,0,0,1,.81.81V78a.82.82,0,0,1-.81.81H72a.81.81,0,0,1-.81-.81V48a.82.82,0,0,1,.81-.81Zm-15.3,10.3h7.74a.81.81,0,0,1,.81.81V78a.81.81,0,0,1-.81.81H56.72a.81.81,0,0,1-.81-.81V58.25a.81.81,0,0,1,.81-.81Zm-15.3-10.3h7.73A.81.81,0,0,1,50,48V78a.81.81,0,0,1-.81.81H41.42a.81.81,0,0,1-.81-.81V48a.82.82,0,0,1,.81-.81Zm-15.3,12h7.73a.81.81,0,0,1,.81.81V78a.81.81,0,0,1-.81.81H26.12a.81.81,0,0,1-.81-.81V59.91a.81.81,0,0,1,.81-.81ZM87.3,19.93a47.64,47.64,0,1,0,14,33.69,47.48,47.48,0,0,0-14-33.69Z" />
              </svg>
            </Tooltip>
            <div className="block">Reports</div>
            <svg
              fill="black"
              strokeWidth={5}
              stroke="currentColor"
              className="w-4 h-4 mt-1 ml-auto"
              viewBox="0 0 80.593 122.88"
            >
              <polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" />
            </svg>
          </li>
        </Link> */}
                <Link
                  to="/products"
                  className="text-gray-800 hover:text-gray-600"
                  onClick={() => setSelectedMenu("products")}
                >
                  <li
                    className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                      selectedMenu === "products"
                        ? "bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-white"
                        : "hover:bg-[#fbb12f] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                    }`}
                  >
                    <Tooltip title="products" arrow placement="right">
                      <svg
                        fill="white"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 122.881 95.629"
                        className={` ${showSidebar ? "w-6 h-6" : "w-10 h-5"}`}
                      >
                        <path d="M112.13,54.992c-0.495-0.348-1.023-0.47-1.595-0.37s-1.034,0.395-1.375,0.889l-1.869,2.649 c-0.675-0.287-1.377-0.518-2.102-0.707s-1.456-0.335-2.188-0.442l-0.605-3.469c-0.102-0.586-0.388-1.043-0.865-1.38 c-0.478-0.336-1.006-0.449-1.591-0.347l-4.354,0.759c-0.557,0.098-1.007,0.382-1.357,0.862c-0.342,0.479-0.464,1.008-0.361,1.593 l0.554,3.177c-0.698,0.298-1.368,0.636-1.999,1.019c-0.64,0.383-1.237,0.796-1.792,1.239l-2.937-2.033 c-0.465-0.346-0.98-0.477-1.559-0.375c-0.571,0.099-1.026,0.399-1.375,0.887l-2.516,3.587c-0.348,0.495-0.469,1.023-0.369,1.594 c0.1,0.572,0.395,1.035,0.888,1.376l2.65,1.869c-0.287,0.675-0.518,1.377-0.708,2.102c-0.189,0.725-0.334,1.456-0.442,2.188 l-3.469,0.605c-0.585,0.102-1.043,0.387-1.379,0.865c-0.336,0.478-0.45,1.006-0.348,1.591l0.76,4.354 c0.097,0.557,0.381,1.007,0.861,1.357c0.479,0.342,1.008,0.464,1.594,0.361l3.176-0.554c0.298,0.698,0.636,1.367,1.019,1.999 c0.384,0.64,0.8,1.251,1.247,1.834l-2.041,2.895c-0.346,0.465-0.476,0.98-0.375,1.559c0.1,0.571,0.399,1.026,0.887,1.375 l3.595,2.558c0.49,0.319,1.016,0.427,1.587,0.327s1.037-0.38,1.383-0.845l1.862-2.693c0.674,0.287,1.376,0.518,2.102,0.707 c0.724,0.19,1.455,0.335,2.188,0.442l0.604,3.47c0.102,0.585,0.388,1.043,0.865,1.379c0.478,0.335,1.006,0.45,1.591,0.348 l4.354-0.76c0.557-0.097,1.007-0.382,1.357-0.861c0.343-0.479,0.464-1.008,0.361-1.594l-0.554-3.177 c0.698-0.298,1.368-0.635,2-1.018c0.639-0.384,1.25-0.8,1.834-1.247l2.894,2.041c0.466,0.346,0.988,0.475,1.573,0.372 c0.593-0.104,1.04-0.401,1.361-0.885l2.558-3.594c0.318-0.49,0.426-1.016,0.327-1.587c-0.101-0.571-0.381-1.037-0.845-1.383 l-2.693-1.861c0.287-0.676,0.518-1.378,0.707-2.103c0.189-0.724,0.334-1.456,0.442-2.188l3.469-0.604 c0.585-0.103,1.043-0.388,1.379-0.866c0.337-0.478,0.45-1.005,0.348-1.591l-0.759-4.354c-0.098-0.557-0.382-1.008-0.862-1.357 c-0.479-0.344-1.008-0.464-1.593-0.362l-3.177,0.554c-0.293-0.67-0.63-1.332-1.015-1.978c-0.387-0.653-0.801-1.258-1.243-1.813 l2.033-2.936c0.346-0.466,0.476-0.981,0.375-1.56c-0.1-0.571-0.399-1.026-0.887-1.375L112.13,54.992L112.13,54.992z M99.48,65.248 c1.16-0.203,2.295-0.176,3.412,0.082c1.11,0.266,2.115,0.71,3.011,1.334c0.891,0.632,1.649,1.427,2.275,2.382 c0.62,0.964,1.03,2.022,1.232,3.183c0.203,1.161,0.175,2.296-0.082,3.412c-0.266,1.111-0.711,2.114-1.336,3.011 c-0.631,0.892-1.425,1.649-2.381,2.275c-0.963,0.62-2.021,1.03-3.182,1.233c-1.161,0.202-2.296,0.175-3.412-0.083 c-1.111-0.266-2.115-0.71-3.011-1.335c-0.892-0.632-1.649-1.426-2.275-2.381c-0.62-0.964-1.03-2.022-1.233-3.183 c-0.202-1.161-0.175-2.296,0.083-3.412c0.266-1.111,0.71-2.115,1.335-3.012c0.631-0.89,1.426-1.648,2.381-2.274 C97.262,65.86,98.319,65.45,99.48,65.248L99.48,65.248z M66.013,13.556c-0.18-0.181-0.348-0.303-0.502-0.368 c-0.146-0.062-0.33-0.092-0.551-0.092c-0.225,0-0.412,0.032-0.563,0.095c-0.16,0.067-0.321,0.183-0.481,0.347l-0.019,0.018v0 l-4.172,4.159c-0.824,0.82-2.099,0.91-3.022,0.272c-0.469-0.301-0.972-0.595-1.504-0.883c-0.58-0.313-1.137-0.59-1.675-0.836 c-0.567-0.259-1.149-0.504-1.743-0.735c-0.519-0.202-1.119-0.415-1.792-0.636c-1.001-0.33-1.637-1.261-1.636-2.261h-0.001V6.238 c0-0.233-0.034-0.433-0.102-0.599c-0.065-0.161-0.171-0.313-0.315-0.459l-0.004,0.004c-0.151-0.15-0.303-0.257-0.455-0.319 c-0.166-0.068-0.366-0.101-0.599-0.101H38.85c-0.212,0-0.392,0.03-0.54,0.092c-0.166,0.068-0.336,0.187-0.511,0.356v0 c-0.142,0.143-0.246,0.291-0.31,0.444c-0.067,0.16-0.101,0.353-0.101,0.58v5.856c0,1.172-0.846,2.146-1.961,2.345 c-0.632,0.151-1.206,0.304-1.714,0.46c-0.575,0.176-1.157,0.378-1.746,0.607c-0.556,0.214-1.125,0.456-1.706,0.724 c-0.583,0.27-1.12,0.538-1.607,0.804c-0.94,0.512-2.075,0.323-2.8-0.392l-0.001,0.001l-4.62-4.553 c-0.019-0.019-0.037-0.037-0.055-0.056l-0.001,0c-0.145-0.153-0.29-0.263-0.435-0.326c-0.133-0.058-0.304-0.088-0.515-0.088 c-0.21,0-0.39,0.033-0.542,0.097c-0.177,0.075-0.351,0.197-0.521,0.363l-5.61,5.623l-0.004,0.004l0.004,0.005 c-0.18,0.18-0.302,0.347-0.367,0.501c-0.062,0.146-0.092,0.33-0.092,0.551c0,0.224,0.031,0.412,0.095,0.563 c0.068,0.16,0.183,0.321,0.347,0.481l0.018,0.019l0,0l4.159,4.172c0.82,0.825,0.91,2.099,0.272,3.023 c-0.301,0.468-0.595,0.971-0.883,1.504c-0.313,0.579-0.59,1.136-0.836,1.674c-0.26,0.568-0.505,1.15-0.735,1.744 c-0.202,0.52-0.415,1.12-0.637,1.792c-0.33,1.001-1.261,1.637-2.261,1.637v0.001H6.239c-0.234,0-0.434,0.034-0.599,0.101 c-0.162,0.066-0.313,0.169-0.454,0.311l-0.009,0.009l0,0c-0.141,0.141-0.245,0.292-0.311,0.454 c-0.067,0.166-0.101,0.366-0.101,0.599v8.028c0,0.211,0.031,0.391,0.092,0.54c0.068,0.165,0.187,0.335,0.357,0.511l0.002,0.002 c0.143,0.141,0.291,0.244,0.442,0.307c0.16,0.066,0.353,0.1,0.581,0.1h5.855c1.172,0,2.146,0.847,2.345,1.962 c0.15,0.629,0.302,1.199,0.458,1.706l0.002-0.001c0.185,0.604,0.387,1.189,0.607,1.755c0.212,0.55,0.457,1.132,0.733,1.745 c0.285,0.63,0.557,1.192,0.814,1.685c0.493,0.944,0.288,2.067-0.43,2.781l0.002,0.001l-4.554,4.541l-0.038,0.037h0.001 c-0.153,0.146-0.263,0.29-0.326,0.436c-0.058,0.133-0.088,0.304-0.088,0.515c0,0.209,0.033,0.39,0.097,0.541 c0.076,0.18,0.201,0.356,0.372,0.53l5.568,5.633c0.165,0.151,0.332,0.261,0.501,0.327c0.171,0.067,0.374,0.102,0.607,0.102 c0.236,0,0.442-0.034,0.618-0.104c0.165-0.065,0.323-0.167,0.472-0.307l4.125-4.19c0.821-0.835,2.108-0.935,3.041-0.291 c0.468,0.3,0.972,0.595,1.505,0.883c0.58,0.313,1.137,0.59,1.674,0.836c0.568,0.26,1.15,0.505,1.744,0.735 c0.519,0.202,1.12,0.415,1.792,0.636c1.001,0.33,1.637,1.262,1.637,2.262h0.001v6.396c0,0.232,0.034,0.433,0.102,0.599 c0.066,0.162,0.169,0.313,0.31,0.454l0.004,0.005l0.005-0.005c0.282,0.282,0.631,0.421,1.053,0.421h8.027 c0.211,0,0.392-0.03,0.54-0.092c0.165-0.068,0.335-0.188,0.511-0.357h0c0.142-0.144,0.245-0.292,0.309-0.444 c0.067-0.16,0.101-0.354,0.101-0.58v-5.856c0-1.173,0.847-2.147,1.961-2.346c0.632-0.15,1.206-0.304,1.714-0.46 c0.575-0.176,1.157-0.378,1.746-0.606c0.55-0.212,1.132-0.457,1.745-0.733c0.63-0.285,1.193-0.557,1.685-0.813 c0.944-0.493,2.067-0.288,2.781,0.43l0.001-0.002l4.541,4.554l0.036,0.038l0.001-0.001c0.147,0.155,0.292,0.265,0.434,0.326 c0.135,0.059,0.315,0.088,0.543,0.088c0.22,0,0.404-0.033,0.554-0.098c0.154-0.066,0.299-0.172,0.436-0.316 c0.03-0.031,0.061-0.062,0.092-0.092l5.598-5.532c0.15-0.164,0.26-0.331,0.326-0.501c0.067-0.171,0.102-0.373,0.102-0.606 c0-0.237-0.035-0.443-0.104-0.618c-0.065-0.166-0.167-0.323-0.306-0.472l-4.191-4.126c-0.835-0.821-0.935-2.109-0.291-3.041 c0.301-0.469,0.595-0.972,0.883-1.504c0.313-0.58,0.59-1.137,0.836-1.676c0.26-0.567,0.505-1.149,0.735-1.743 c0.202-0.519,0.415-1.12,0.637-1.792c0.33-1.002,1.262-1.637,2.262-1.637v-0.001h6.395c0.234,0,0.434-0.033,0.6-0.102 c0.162-0.065,0.313-0.169,0.454-0.31l0.005-0.004l-0.005-0.005c0.282-0.282,0.421-0.632,0.421-1.053V38.85 c0-0.212-0.031-0.392-0.092-0.54c-0.068-0.165-0.188-0.335-0.357-0.511l-0.002-0.003c-0.143-0.141-0.29-0.243-0.442-0.307 c-0.159-0.067-0.353-0.1-0.581-0.1h-5.855c-1.186,0-2.169-0.867-2.352-2.001c-0.133-0.528-0.283-1.067-0.453-1.616 c-0.171-0.55-0.375-1.141-0.617-1.774c-0.015-0.04-0.029-0.08-0.042-0.12c-0.221-0.578-0.445-1.117-0.673-1.616 c-0.253-0.554-0.521-1.09-0.804-1.608c-0.512-0.94-0.322-2.075,0.392-2.8l-0.001,0l4.554-4.62c0.019-0.019,0.037-0.037,0.057-0.055 l-0.001-0.001c0.153-0.145,0.263-0.29,0.326-0.435c0.058-0.133,0.088-0.304,0.088-0.515c0-0.21-0.033-0.39-0.098-0.542 c-0.075-0.176-0.196-0.35-0.363-0.521l-5.623-5.609l-0.005-0.005L66.013,13.556L66.013,13.556z M67.354,8.813 c0.756,0.32,1.432,0.777,2.028,1.373l-0.005,0.005l5.628,5.615l0,0l0.019,0.019c0.592,0.602,1.047,1.269,1.358,2 c0.323,0.76,0.488,1.56,0.488,2.403c0,0.855-0.168,1.659-0.498,2.414c-0.322,0.739-0.789,1.393-1.394,1.969l-3.313,3.36 c0.05,0.105,0.099,0.212,0.147,0.318c0.291,0.639,0.558,1.273,0.799,1.903c0.016,0.036,0.031,0.074,0.046,0.112 c0.245,0.642,0.481,1.335,0.71,2.072l0.076,0.248h4.043c0.853,0,1.652,0.158,2.405,0.473c0.739,0.31,1.404,0.763,1.998,1.36 l0.047,0.047c0.581,0.601,1.021,1.267,1.325,2c0.31,0.75,0.464,1.531,0.464,2.346v8.028c0,1.737-0.599,3.203-1.817,4.421 l-0.004-0.005c-0.608,0.607-1.284,1.062-2.032,1.366c-0.745,0.305-1.539,0.455-2.386,0.455H72.77 c-0.047,0.124-0.096,0.25-0.146,0.377c-0.259,0.667-0.541,1.335-0.847,2.005c-0.319,0.698-0.642,1.353-0.967,1.954 c-0.038,0.071-0.077,0.144-0.118,0.216l2.869,2.823c0.032,0.03,0.063,0.062,0.095,0.094c0.576,0.608,1.01,1.285,1.302,2.026 c0.293,0.743,0.438,1.528,0.438,2.35c0,0.818-0.146,1.598-0.437,2.337c-0.29,0.738-0.718,1.41-1.285,2.02l-0.001-0.001 c-0.023,0.025-0.048,0.051-0.073,0.075l-5.651,5.586c-0.585,0.614-1.247,1.085-1.99,1.405c-0.751,0.323-1.562,0.488-2.434,0.488 c-0.853,0-1.659-0.168-2.422-0.498c-0.756-0.326-1.421-0.797-1.998-1.405l-3.296-3.306c-0.119,0.056-0.236,0.109-0.351,0.161 c-0.611,0.275-1.273,0.552-1.987,0.827c-0.661,0.257-1.356,0.496-2.081,0.718c-0.097,0.03-0.193,0.06-0.289,0.088v4.033 c0,0.852-0.158,1.652-0.473,2.403c-0.31,0.74-0.764,1.405-1.361,1.999l-0.047,0.047c-0.601,0.58-1.267,1.021-1.999,1.324 c-0.75,0.311-1.53,0.465-2.346,0.465H36.85c-1.737,0-3.204-0.6-4.422-1.816l0.004-0.005c-0.607-0.608-1.062-1.284-1.366-2.032 c-0.304-0.745-0.455-1.539-0.455-2.385V72.77c-0.124-0.047-0.249-0.096-0.377-0.145c-0.666-0.26-1.334-0.542-2.003-0.848 c-0.699-0.319-1.353-0.642-1.955-0.967c-0.072-0.039-0.144-0.078-0.215-0.118l-2.824,2.868c-0.03,0.033-0.062,0.064-0.094,0.096 c-0.608,0.576-1.286,1.01-2.026,1.302c-0.743,0.293-1.528,0.438-2.349,0.438c-0.82,0-1.599-0.145-2.338-0.436 c-0.738-0.29-1.41-0.719-2.019-1.286l0.001-0.001c-0.026-0.023-0.051-0.048-0.076-0.073l-5.633-5.697 c-0.592-0.604-1.046-1.27-1.358-2.001c-0.324-0.759-0.488-1.56-0.488-2.402c0-0.855,0.168-1.659,0.498-2.413 c0.325-0.744,0.795-1.401,1.405-1.98l3.306-3.297c-0.056-0.118-0.109-0.235-0.161-0.351c-0.276-0.611-0.552-1.273-0.827-1.986 c-0.267-0.685-0.505-1.376-0.719-2.072l0.002-0.001l-0.002-0.008l-0.087-0.289H6.239c-0.852,0-1.652-0.157-2.404-0.472 c-0.74-0.31-1.405-0.764-1.999-1.36l-0.047-0.048c-0.581-0.601-1.021-1.267-1.324-1.999C0.154,46.473,0,45.691,0,44.877v-8.028 c0-0.846,0.151-1.64,0.455-2.385c0.304-0.745,0.756-1.419,1.36-2.025l0.002-0.002l0.004-0.004l0.004-0.005 c0.606-0.604,1.281-1.058,2.027-1.362s1.54-0.455,2.386-0.455h4.718c0.047-0.124,0.096-0.249,0.146-0.377 c0.259-0.666,0.541-1.334,0.847-2.004c0.319-0.698,0.641-1.352,0.966-1.954c0.042-0.077,0.084-0.155,0.126-0.232l-2.853-2.861 c-0.601-0.595-1.059-1.268-1.374-2.011c-0.325-0.768-0.486-1.571-0.486-2.405c0-0.831,0.161-1.628,0.483-2.393 c0.319-0.756,0.776-1.432,1.373-2.028l0.004,0.004l5.615-5.628l0,0l0.019-0.019c0.602-0.592,1.268-1.047,2-1.359 c0.76-0.323,1.56-0.488,2.403-0.488c0.855,0,1.658,0.168,2.413,0.498c0.739,0.323,1.393,0.789,1.969,1.394l3.355,3.308 c0.102-0.049,0.203-0.096,0.304-0.143c0.617-0.285,1.278-0.563,1.985-0.835c0.661-0.257,1.356-0.497,2.081-0.719 c0.097-0.029,0.193-0.059,0.289-0.087V6.238c0-0.852,0.158-1.652,0.472-2.404c0.31-0.739,0.764-1.405,1.36-1.999l0.048-0.047 c0.601-0.581,1.267-1.021,2-1.324C37.254,0.154,38.035,0,38.85,0h8.028c0.845,0,1.64,0.151,2.385,0.455 c0.759,0.31,1.438,0.763,2.036,1.361l-0.004,0.005l0.004,0.004c0.604,0.603,1.057,1.278,1.362,2.027 c0.304,0.745,0.455,1.54,0.455,2.385v4.719c0.124,0.047,0.25,0.096,0.377,0.145c0.666,0.259,1.334,0.541,2.004,0.847 c0.699,0.32,1.353,0.642,1.954,0.967l0.232,0.126l2.861-2.853c0.596-0.602,1.268-1.059,2.011-1.374 c0.769-0.325,1.571-0.485,2.405-0.485C65.791,8.331,66.589,8.491,67.354,8.813L67.354,8.813z M41.863,23.754 c1.234,0,2.438,0.118,3.616,0.353c1.152,0.23,2.298,0.586,3.438,1.067l0.016,0.007l0.003-0.007 c1.077,0.464,2.103,1.023,3.077,1.675c0.964,0.645,1.855,1.373,2.672,2.183l0.01,0.01v0c0.811,0.818,1.539,1.71,2.184,2.674 c0.652,0.974,1.21,2,1.675,3.076c0.028,0.066,0.054,0.133,0.076,0.2c0.443,1.081,0.773,2.166,0.991,3.256 c0.235,1.177,0.353,2.382,0.353,3.616c0,1.234-0.118,2.439-0.353,3.615c-0.23,1.152-0.586,2.298-1.067,3.439l-0.007,0.016 l0.007,0.002c-0.464,1.076-1.023,2.102-1.675,3.076c-0.645,0.964-1.373,1.855-2.184,2.673l-0.01,0.01l0,0 c-0.817,0.81-1.708,1.538-2.673,2.184c-0.974,0.651-1.999,1.21-3.076,1.675c-0.066,0.028-0.132,0.054-0.2,0.075 c-1.081,0.443-2.166,0.773-3.257,0.991c-1.177,0.235-2.382,0.353-3.616,0.353s-2.438-0.117-3.615-0.353 c-1.152-0.229-2.298-0.585-3.438-1.066l-0.016-0.007l-0.003,0.007c-1.076-0.465-2.102-1.023-3.076-1.675 c-0.964-0.646-1.855-1.374-2.672-2.184l-0.009-0.01l0,0c-0.811-0.817-1.539-1.709-2.184-2.673c-0.652-0.974-1.21-1.999-1.674-3.076 c-0.029-0.065-0.054-0.133-0.076-0.199c-0.443-1.081-0.773-2.167-0.992-3.258c-0.235-1.176-0.353-2.381-0.353-3.615 c0-1.234,0.118-2.438,0.353-3.616c0.23-1.152,0.586-2.298,1.067-3.438l0.006-0.016l-0.006-0.002 c0.464-1.077,1.022-2.102,1.674-3.076c0.646-0.964,1.373-1.855,2.184-2.674l0.009-0.009v0c0.817-0.81,1.708-1.538,2.672-2.183 c0.975-0.652,2-1.211,3.077-1.675c0.067-0.029,0.134-0.054,0.202-0.076c1.08-0.442,2.165-0.773,3.255-0.991 C39.424,23.872,40.629,23.754,41.863,23.754L41.863,23.754z M44.548,28.778c-0.866-0.172-1.761-0.259-2.685-0.259 s-1.819,0.087-2.685,0.259c-0.833,0.166-1.623,0.401-2.37,0.705c-0.045,0.022-0.091,0.044-0.138,0.064 c-0.845,0.365-1.617,0.781-2.314,1.248c-0.705,0.472-1.358,1.006-1.961,1.603c-0.595,0.601-1.129,1.255-1.601,1.96 c-0.466,0.697-0.882,1.469-1.247,2.313l-0.007-0.003c-0.332,0.79-0.586,1.626-0.762,2.511c-0.173,0.866-0.26,1.761-0.26,2.685 s0.086,1.819,0.26,2.685c0.166,0.832,0.401,1.622,0.704,2.369c0.023,0.045,0.044,0.091,0.065,0.139 c0.364,0.845,0.78,1.615,1.247,2.313c0.472,0.705,1.006,1.358,1.603,1.961c0.602,0.596,1.255,1.13,1.96,1.602 c0.697,0.467,1.469,0.883,2.313,1.247l-0.003,0.007c0.789,0.331,1.625,0.586,2.51,0.763c0.866,0.172,1.76,0.259,2.685,0.259 c0.924,0,1.819-0.087,2.685-0.259c0.833-0.166,1.622-0.401,2.369-0.704c0.046-0.023,0.092-0.045,0.139-0.065 c0.845-0.364,1.616-0.78,2.313-1.246c0.705-0.473,1.359-1.007,1.961-1.603c0.596-0.602,1.13-1.256,1.603-1.962 c0.466-0.696,0.882-1.468,1.246-2.312l0.007,0.002c0.332-0.789,0.586-1.625,0.763-2.51c0.173-0.866,0.26-1.761,0.26-2.685 s-0.087-1.819-0.26-2.685c-0.166-0.833-0.401-1.622-0.704-2.369c-0.023-0.045-0.045-0.091-0.065-0.139 c-0.364-0.844-0.78-1.616-1.247-2.313c-0.472-0.706-1.006-1.359-1.601-1.96c-0.602-0.597-1.256-1.131-1.961-1.603 c-0.698-0.467-1.469-0.883-2.314-1.248l0.003-0.007C46.27,29.209,45.434,28.955,44.548,28.778L44.548,28.778z" />
                      </svg>
                    </Tooltip>
                    <div className="block">Products</div>
                    <svg
                      fill="black"
                      strokeWidth={5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1 ml-auto"
                      viewBox="0 0 80.593 122.88"
                    >
                      <polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" />
                    </svg>
                  </li>
                </Link>
              </div>
            </Drawer>

            {showDrawer && (
              <div
                className="fixed top-6 left-80 cursor-pointer"
                onClick={() => setShowDrawer(false)}
              >
                <img
                  src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close&icon_size=256&icon_color=000000&icon_flip=&icon_rotate=0"
                  className="w-6 h-6"
                  alt="Close Icon"
                  style={{ zIndex: 1500 }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
