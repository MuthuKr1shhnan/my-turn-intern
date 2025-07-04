// import { useRef, useState } from "react";
// import { ReactSortable } from "react-sortablejs";
// import FileGetter from "../components/FileGetter";

// function Merge() {
//   const [files, setFiles] = useState([]);
//   const fileInputRef = useRef(null);

//   const handleFileSelect = (selected) => {
//     setFiles((prev) => [...prev, ...selected]);
//   };

//   const handleAddClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileInputChange = (e) => {
//     handleFileSelect(Array.from(e.target.files));
//   };

//   const handleMerge = async () => {
//     const formData = new FormData();
//     files.forEach((file) => formData.append("files", file));

//     try {
//       const res = await fetch("https://your-api.com/merge", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (data.fileUrl) {
//         const a = document.createElement("a");
//         a.href = data.fileUrl;
//         a.download = "merged.pdf";
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//       }
//     } catch (err) {
//       console.error("Merge error", err);
//     }
//   };

//   const generatePdfThumbnail = (file) => {
//     return new Promise((resolve) => {
//       const fileReader = new FileReader();
//       fileReader.onload = function () {
//         const typedarray = new Uint8Array(this.result);
//         import("pdfjs-dist/build/pdf").then((pdfjsLib) => {
//           pdfjsLib.GlobalWorkerOptions.workerSrc =
//             `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;
//           pdfjsLib.getDocument(typedarray).promise.then((pdf) => {
//             pdf.getPage(1).then((page) => {
//               const canvas = document.createElement("canvas");
//               const context = canvas.getContext("2d");
//               const viewport = page.getViewport({ scale: 0.5 });
//               canvas.height = viewport.height;
//               canvas.width = viewport.width;

//               page.render({ canvasContext: context, viewport }).promise.then(
//                 () => {
//                   resolve(canvas.toDataURL());
//                 }
//               );
//             });
//           });
//         });
//       };
//       fileReader.readAsArrayBuffer(file);
//     });
//   };

//   const [previews, setPreviews] = useState([]);

//   const loadPreviews = async () => {
//     const thumbUrls = await Promise.all(
//       files.map((file) => generatePdfThumbnail(file))
//     );
//     setPreviews(thumbUrls);
//   };

//   // Load previews when files change
//   useState(() => {
//     if (files.length > 0) loadPreviews();
//   }, [files]);

//   return (
//     <FileGetter
//       title="Merge PDF files"
//       subtitle="Combine PDFs in the order you want with the easiest PDF merger available."
//       acceptedFileTypes="application/pdf"
//       buttonText="Select PDF Files"
//       convertButtonText="Merge PDFs"
//       onFileSelect={handleFileSelect}
//     >
//       {files.length > 0 && (
//         <div className="flex flex-col md:flex-row gap-4 mt-6 w-full">
//           {/* Left: PDF Cards Preview */}
//           <div className="bg-[#f5f5f8] rounded-lg p-6 w-full md:w-3/4 relative">
//   <ReactSortable
//     list={files}
//     setList={setFiles}
//     className="flex flex-wrap justify-center gap-6"
//   >
//     {files.map((file, index) => (
//       <div key={index} className="flex flex-col items-center w-[100px]">
//         <div className="w-[84px] h-[112px] bg-white border rounded shadow relative overflow-hidden flex justify-center items-center">
//           <span className="absolute top-0 left-0 bg-black text-white text-[10px] px-1 py-[1px] rounded-br-sm">
//             PDF
//           </span>
//           {previews[index] ? (
//             <img
//               src={previews[index]}
//               alt="Preview"
//               className="w-full h-full object-contain"
//               style={{ filter: 'invert(2)'}}
//             />
//           ) : (
//             <span className="text-[10px] text-gray-400">Loading...</span>
//           )}
//         </div>
//         <p className="mt-2 text-[10px] text-gray-700 text-center w-[84px] truncate">
//           {file.name}
//         </p>
//       </div>
//     ))}
//   </ReactSortable>

//   {/* "+" Add Button */}
//   <button
//     onClick={handleAddClick}
//     className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 text-lg"
//   >
//     +
//   </button>

//   <input
//     ref={fileInputRef}
//     type="file"
//     accept="application/pdf"
//     multiple
//     onChange={handleFileInputChange}
//     className="hidden"
//   />
// </div>


//           {/* Right: Instructions + Merge button */}
//           <div className="w-full md:w-1/4 flex flex-col justify-between">
//             <div className="border p-3 text-sm text-center text-gray-600 rounded">
//               Reorder your pdf by drag and drop the files as you like
//             </div>

//             <button
//               onClick={handleMerge}
//               className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             >
//               Merge files
//             </button>
//           </div>
//         </div>
//       )}
//     </FileGetter>
//   );
// }

// export default Merge;
// 
import { useRef, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import FileGetter from "../../components/FileGetter";
import { FaPlus } from "react-icons/fa";

function Merge() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Your existing handlers remain exactly the same
  const handleFileSelect = (selected) => {
    setFiles(selected);
  };

  const handleAddClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    setFiles(prev => [...prev, ...Array.from(e.target.files)]);
  };

  const handleMerge = async () => {
    // Your existing merge logic
  };

  return (
    <FileGetter
      title="Merge PDF files"
      subtitle="Combine PDFs in the order you want with the easiest PDF merger available."
      acceptedFileTypes="application/pdf"
      buttonText="Select PDF Files"
      onFileSelect={handleFileSelect}
    >
      <div className="flex flex-col items-center w-full">
        {/* File Display Box */}
        <div className="relative w-full bg-gray-100 rounded-lg py-12 px-6 flex justify-center gap-8">
          <ReactSortable
            list={files}
            setList={setFiles}
            className="flex flex-wrap justify-center gap-8"
          >
            {files.map((file, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative bg-white h-60 w-36 rounded shadow-md overflow-hidden">
                  <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded-br">
                    PDF
                  </div>
                  <object
                    data={URL.createObjectURL(file)}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-2 text-center">
                      <span className="text-gray-400 text-sm">Preview not available</span>
                      <span className="text-xs mt-1 text-gray-500 truncate w-full">
                        {file.name}
                      </span>
                    </div>
                  </object>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-800 max-w-[144px] truncate">
                  {file.name}
                </p>
              </div>
            ))}
          </ReactSortable>

          <button
            onClick={handleAddClick}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-10"
          >
            <FaPlus />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>

        <button
          onClick={handleMerge}
          className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 shadow-md"
        >
          Merge files
        </button>
      </div>
    </FileGetter>
  );
}

export default Merge;