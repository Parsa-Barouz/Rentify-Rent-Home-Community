import React from 'react'

function NavbarActions() {
  return (
   <>
   

<div className="flex items-center gap-3">
            
            <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#0D6EFD] px-3 py-3">
              <button className="cursor-pointer text-white">
                ثبت آگهی رایگان
              </button>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.33325 14.6666V1.33331H8.66659V14.6666H7.33325Z"
                  fill="white"
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6666 8.66665H1.33325V7.33331H14.6666V8.66665Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                  fill="#0C0C0C"
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z"
                  fill="#0C0C0C"
                />

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9994 16.5C9.77985 16.5 7.84046 17.7047 6.80152 19.5007L5.07031 18.4993C6.45204 16.1107 9.03706 14.5 11.9994 14.5C14.9618 14.5 17.5468 16.1107 18.9286 18.4993L17.1974 19.5007C16.1584 17.7047 14.219 16.5 11.9994 16.5Z"
                  fill="#0C0C0C"
                />
              </svg>

              <button className="cursor-pointer">
                حساب من
              </button>
            </div>
          </div>
   
   
   </>
  )
}

export default NavbarActions