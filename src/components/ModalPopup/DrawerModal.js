import { XCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from 'next/image';
 
const DrawerModal = ({ open, onOpenChange }) => {
  if (!open) return null; // hide modal if not open
 
  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="text-black rounded-lg p-6">
        <div className="flex items-center gap-4 relative w-full min-w-[1174px] h-screen">
          <Button
            variant="ghost"
            className="flex flex-col h-auto items-center justify-center gap-2 p-4 bg-[#3a4048] rounded-[10px] shadow-shadows-shadow-sm hover:bg-[#4a5058]"
            onClick={() => onOpenChange(false)}
          >
            <XCircleIcon className="w-6 h-6 text-white" />
            <span className="font-medium text-white text-sm">Close</span>
          </Button>
 
          <div className="max-h-[90vh] overflow-y-auto p-4 w-full bg-[#0d1217] rounded-[16px_0px_0px_16px] text-white p-8">
            <img
              class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-[737px] pointer-events-none"
              alt="Vector"
              src="https://c.animaapp.com/mb26iuiaEe4h4s/img/vector.svg"
            />
            <div className="max-w-6xl mx-auto space-y-6">
 
 
              {/* CONTAINER FOR DETAILS + IMAGES + GUIDELINES */}
              <div
                // style={{
                //   width: '1088px',
                //   height: '1130px',
                //   padding: '24px',
                //   display: 'flex',
                //   flexDirection: 'column',
                //   gap: '24px',
                // }}
              >
                {/* DETAILS BOX */}
            <div className="flex items-start gap-4">
  <div className="w-2/12">
    <img src="assets/images/Avatar (1).png" alt="Preview" className="w-full rounded-md" />
  </div>
 
  <div className="w-10/12">
    <h1 className="text-3xl font-bold">Modern style for houses</h1>
    <p className="mt-5 text-slate-300">
      Envision a grand library with soaring ceilings and intricate woodwork, where natural light floods in through stained glass windows, creating a serene atmosphere for readers.
    </p>
  </div>
</div>
 
                <div className="mt-5 rounded-md bg-[#252A2E] p-5 space-y-10">
                  <h2 className="text-lg" style={{ color: '#ffffff' }}>Details</h2>
 
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm  text-slate-300">Project Name</label>
                      <input
                        className="mt-3 bg-[#3C4348] rounded-md w-full p-2 text-white text-[14px]"
                        value="Project 123"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm  text-slate-300">Document Type</label>
                      <input
                        className="mt-3 bg-[#3C4348] rounded-md w-full p-2 text-white text-[14px]"
                        value="CAD 123"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm  text-slate-300">Country</label>
                      <select
                        className="mt-3 bg-[#3C4348] rounded-md w-full p-2 text-white text-[14px]"
                        value="Kuwait"
                        readOnly
                      >
                        <option>Kuwait</option>
                      </select>
                    </div>
                  </div>
 
                      <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm  text-slate-300">State</label>
                      <input
                        className="mt-3 bg-[#3C4348] rounded-md w-full p-2 text-white text-[14px]"
                        value="Al Ain"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm  text-slate-300">City</label>
                      <input
                        className="mt-3 bg-[#3C4348] rounded-md w-full p-2 text-white text-[14px]"
                        value="Fujairah"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm  text-slate-300">Brand</label>
                      <select
                        className="mt-3 bg-[#3C4348] rounded-md w-full p-2 text-white text-[14px]"
                        value="Brand"
                        readOnly
                      >
                        <option>Brand</option>
                      </select>
                    </div>
                  </div>
 
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-300 font-semibold mb-1">Added Date</div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-white">John Mar (Emp-123)</span>
                        <div className="flex space-x-1 ml-2">
                          {/* <div className="rounded-full w-6 h-6 bg-pink-500 flex items-center justify-center text-white text-xs font-bold">
                      S
                    </div>
                    <div className="rounded-full w-6 h-6 bg-yellow-400 flex items-center justify-center text-white text-xs font-bold">
                      T
                    </div> */}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-300 font-semibold mb-1">Status</div>
                      <div className="mt-3  text-white">Trained</div>
                    </div>
                  </div>
 
                  <div className="space-y-2">
                    <div>
                      <label className="block text-sm text-slate-300">Description</label>
                      <textarea
                        className="mt-3 bg-[#3C4348] w-full h-[94px] p-4 rounded-md text-white text-sm"
                        rows={2}
                        readOnly
                      >
                        Figma ipsum component variant main layer. Figma layer layer content share layout prototype resizing pen. Arrange bullet layout vector plugin text inspect. Figma vector opacity fill shadow arrow strikethrough. Rectangle project ellipse layout export object frame select arrow. Select background.
                      </textarea>
                    </div>
 
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-white">Images</h2>
                  <button className="mt-5 mb-5 w-32 h-[2.5rem] rounded-md px-3 py-1 bg-[#768FB5] text-white text-sm h-fit">
                    + Upload new
                  </button>
                </div>
                {/* IMAGES SECTION */}
                <div className="rounded-md bg-[#252A2E] p-4 space-y-2">
 
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <Image
                        src="/assets/images/home1.png"
                        alt="Preview"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                        <Image
                        src="/assets/images/home2.png"
                        alt="Preview"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                      <Image
                        src="/assets/images/home1.png"
                        alt="Preview"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                       <Image
                        src="/assets/images/home3.png"
                        alt="Preview"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                       <Image
                        src="/assets/images/home4.png"
                        alt="Preview"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
 
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-white">Guideline</h2>
                  <button className="mt-5 mb-5  w-32 h-[2.5rem] rounded-md px-3 py-1 bg-[#768FB5] text-white text-sm h-fit">
                    + Upload new
                  </button>
                </div>
                {/* GUIDELINES SECTION */}
                <div className="rounded-md bg-[#252A2E] p-4 space-y-2">
 
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2].map(i => (
                      <div
                        key={i}
                        className="bg-slate-600 bg-[#212629] p-2 flex justify-between items-center rounded-md"
                      >
                        <div>
                          <div className="font-medium">Figma ipsum component variant</div>
                          <div className="text-xs text-slate-400">PDF
                            <input
                              id="file-upload"
                              type="file"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  console.log("Selected file:", file.name);
                                  // You can add your file handling logic here
                                }
                              }}
                            />
                          </div>
                        </div>
                        <button className="text-red-400 hover:text-red-500">
                          <img src='/assets/images/trash.png' alt='trash' />
                        </button>
                      </div>
                    ))}
                  </div>
 
<div className="grid grid-cols-2 gap-4">
                    {[1, 2].map(i => (
                      <div
                        key={i}
                        className="bg-slate-600 bg-[#212629] p-2 flex justify-between items-center rounded-md"
                      >
                        <div>
                          <div className="font-medium">Figma ipsum component variant</div>
                          <div className="text-xs text-slate-400">PDF
                            <input
                              id="file-upload"
                              type="file"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  console.log("Selected file:", file.name);
                                  // You can add your file handling logic here
                                }
                              }}
                            />
                          </div>
                        </div>
                        <button className="text-red-400 hover:text-red-500">
                          <img src='/assets/images/trash.png' alt='trash' />
                        </button>
                      </div>
                    ))}
                  </div>
 
                </div>
              </div>
              <div style={{
                width: '1150px',
              }} className="flex justify-end gap-4">
                <button className="px-4 py-2 rounded-md border border-gray text-white bg-[#0D1217]">
                  Cancel
                </button>
 
                <button className="px-4 py-2 rounded-md bg-slate-800 text-white">Submit</button>
              </div>
              {/* ACTION BUTTONS */}
 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
};
 
export default DrawerModal;
 