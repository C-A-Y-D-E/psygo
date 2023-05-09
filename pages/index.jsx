import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function Home() {
  return (
    <div className="">
      <img
        src="/bg.png "
        className="fixed inset-0 h-full w-full bg-cover filter blur-md opacity-20"
      />
      <Head>
        <title>PSY</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto w-full max-w-[1280px] p-6 px-6 relative z-10">
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="text-2xl font-bold">PSY</h2>
          <div className="flex items-center gap-6">
            <a href="https://t.me/psy_entry" target="_blank">
              <img src="/telegram.png" className="w-12" />
            </a>
            <a href="https://twitter.com/Psy_token" target="_blank">
              <img src="/twitter.png" className="w-12" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center mt-5 py-2">
        <div className="container mx-auto w-full max-w-[1280px] p-6 px-6 relative z-10">
          <img src="/psy.png" className="w-72 mx-auto" />
          <div className="flex flex-wrap justify-center items-center gap-3 mt-12">
            <a
              target="_blank"
              href=""
              className="py-2 px-8 bg-[#F3C98F] rounded-full"
            >
              Buy $PSY
            </a>
            <a
              target="_blank"
              href=""
              className="py-2 px-12 bg-white rounded-full text-black"
            >
              Chart
            </a>
          </div>
          <div className="bg-[#F3C98F] mb-6 text-black font-text text-lg mx-auto mt-6 flex gap-4 rounded-full  items-center justify-center w-full max-w-[500px]   py-2 px-6">
            <span className="-mb-1 md:inline-block hidden ">
              0xb0E53Ff1558CC058FA3AFbbbCB7f727D4E274CE7
            </span>
            <span className="-mb-1  inline-block md:hidden">
              0xb0E53F...274CE7
            </span>
            {/* <span className="-mb-1 inline-block ">0xb0E53Ff1558CC058FA3AFbbbCB7f727D4E274CE7</span> */}
            <CopyToClipboard
              text="0xb0E53Ff1558CC058FA3AFbbbCB7f727D4E274CE7"
              onCopy={() => alert("Copied")}
            >
              <button>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.625 21.875V23.8281C15.625 24.4753 15.1003 25 14.4531 25H1.17188C0.524658 25 0 24.4753 0 23.8281V5.85938C0 5.21216 0.524658 4.6875 1.17188 4.6875H4.6875V19.1406C4.6875 20.6484 5.91411 21.875 7.42188 21.875H15.625ZM15.625 5.07812V0H7.42188C6.77466 0 6.25 0.524658 6.25 1.17188V19.1406C6.25 19.7878 6.77466 20.3125 7.42188 20.3125H20.7031C21.3503 20.3125 21.875 19.7878 21.875 19.1406V6.25H16.7969C16.1523 6.25 15.625 5.72266 15.625 5.07812ZM21.5318 3.56304L18.312 0.343213C18.0922 0.123458 17.7941 1.62498e-06 17.4833 0L17.1875 0V4.6875H21.875V4.39165C21.875 4.08086 21.7515 3.7828 21.5318 3.56304Z"
                    fill="#000"
                  />
                </svg>
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}
