function App() {
  return (
    <>
      {/* parent div */}
      <div className="min-h-screen bg-[#e9f3f8] px-30 py-10 ">
        {/* header */}
        <header className="bg-[#fbfdfe] flex justify-between rounded-2xl m-5 px-5">
          <img src="src/images/logo.svg" />

          <button className="rounded-lg border border-gray-300 py-2 px-2 my-3  hover:bg-gray-200 active:bg-gray-300">
            <img
              src="src/images/icon-moon.svg"
              className="h-5 w-5 cursor-pointer"
            />
          </button>
        </header>

        {/* desctption div */}
        <div
          className="flex 
          justify-between 
          flex-col items-center 
          md:flex-row"
        >
          <div className="font-bold text-4xl text-[#070e37] m-5">
            Extensions List
          </div>

          {/* up buttons div*/}
          <div className=" flex gap-3 p-5">
            <button
              className="
            text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300
             py-1.5 px-5 
              hover:bg-[#c02f23] hover:text-[#fbfdfe]
              focus:ring-2 focus:ring-[#c02f23] cursor-pointer"
            >
              All
            </button>

            <button
              className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300
               py-1.5 px-5 
              hover:bg-[#c02f23] hover:text-[#fbfdfe]
              focus:ring-2 focus:ring-[#c02f23] cursor-pointer"
            >
              Active
            </button>

            <button
              className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300
               py-1.5 px-5
              hover:bg-[#c02f23] hover:text-[#fbfdfe]
              focus:ring-2 focus:ring-[#c02f23] cursor-pointer"
            >
              Inactive
            </button>
          </div>
        </div>

        {/* cards div */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {/*card 1 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-devlens-1.svg" />
              <div className="font-bold text-xl text-[#070e37]">
                DevLens
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Quickly inspect page layouts and visualize element boundaries.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 2 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-style-spy-2.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                StyleSpy
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Instantly analyze and copy CSS from any webpage element.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 3  سطرين*/}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-speed-boost-3.svg" />
              <div className="font-bold text-xl text-[#070e37]">
                Speedboots
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Optimizes browser resource usage to accelerate page loading.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 4 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-json-wizard-4.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                JSONWizard
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Formats, validates, and prettifies JSON responses in-browser.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 5 */}
          <div className="bg-[#fbfdfe] rounded-2xl">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-tab-master-pro-5.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                TabMaster Pro
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Organizes browser tabs into groups and sessions.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 6 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-viewport-buddy-6.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                ViewportBuddy
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Simulates various screen resolutions directly within the
                  browser.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 7 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-markup-notes-7.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                Markup Notes
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Enables annotation and notes directly onto webpages for
                  collaborative debugging.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 8 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-grid-guides-8.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                GridGuides
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Overlay customizable grids and alignment guides on any
                  webpage.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 9 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-palette-picker-9.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                Palette Picker
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Instantly extracts color palettes from any webpage.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 10 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-link-checker-10.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                LinkChecker
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Scans and highlights broken links on any page.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 11 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-dom-snapshot-11.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                DOM Snapshot
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Capture and export DOM structures quickly.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>

          {/*card 12 */}
          <div className="bg-[#fbfdfe] rounded-2xl ">
            {/*اللي فوق */}
            <div className=" p-4 flex gap-2">
              <img src="src/images/logo-console-plus-12.svg" />

              <div className="font-bold text-xl text-[#070e37]">
                ConsolePlus
                <div className="flex justify-between text-[#827f85] text-sm font-normal">
                  Enhanced developer console with advanced filtering and
                  logging.
                </div>
              </div>
            </div>

            {/*اللي تحت */}
            <div className=" p-4 gap-2 flex justify-between">
              {/*remove button */}
              <button className="text-[#070e37] bg-[#fbfdfe] rounded-full border border-gray-300 py-1.5 px-5 focus:border-[#c02f23] hover:bg-[#c02f23] hover:text-[#fbfdfe] cursor-pointer">
                Remove
              </button>

              {/*toggle button */}
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative
                 w-9 h-5 rounded-full
                bg-gray-300

                {/*after */}
                 peer 
                 peer-checked:after:translate-x-full
                 after:absolute after:top-[2px] after:start-[2px]
                after:bg-white 
                after:rounded-full 
                after:h-4 
                after:w-4 
                after:transition-all
                peer-checked:bg-[#c02f23]"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
