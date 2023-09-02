// import React from 'react'
// import { DateRange } from 'react-date-range'
// import { TbFidgetSpinner } from 'react-icons/tb'
// import { categories } from '../Categories/categoriesData'
// const AddRoomForm = ({
//     handleSubmit,
//     dates,
//     handleDates,
//     loading = false,
//     handleImageChange,
//     uploadButtonText,
// }) => {
//     return (
//         <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
//             <form>
//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
//                     <div className='space-y-6'>
//                         <div className='space-y-1 text-sm'>
//                             <label htmlFor='location' className='block text-gray-600'>
//                                 Location
//                             </label>
//                             <input
//                                 className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
//                                 name='location'
//                                 id='location'
//                                 type='text'
//                                 placeholder='Location'
//                                 required
//                             />
//                         </div>

//                         <div className='space-y-1 text-sm'>
//                             <label htmlFor='category' className='block text-gray-600'>
//                                 Category
//                             </label>
//                             <select
//                                 required
//                                 className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
//                                 name='category'
//                             >
//                                 {categories.map(category => (
//                                     <option value={category.label} key={category.label}>
//                                         {category.label}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div className='space-y-1'>
//                             <label htmlFor='location' className='block text-gray-600'>
//                                 Select Availability Range
//                             </label>
//                             <DateRange rangeColors={['#F43F5E']} />
//                         </div>
//                     </div>
//                     <div className='space-y-6'>
//                         <div className='space-y-1 text-sm'>
//                             <label htmlFor='title' className='block text-gray-600'>
//                                 Title
//                             </label>
//                             <input
//                                 className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
//                                 name='title'
//                                 id='title'
//                                 type='text'
//                                 placeholder='Title'
//                                 required
//                             />
//                         </div>

//                         <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
//                             <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
//                                 <div className='flex flex-col w-max mx-auto text-center'>
//                                     <label>
//                                         <input
//                                             className='text-sm cursor-pointer w-36 hidden'
//                                             type='file'
//                                             name='image'
//                                             id='image'
//                                             accept='image/*'
//                                             hidden
//                                         />
//                                         <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
//                                             Upload Image
//                                         </div>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='flex justify-between gap-2'>
//                             <div className='space-y-1 text-sm'>
//                                 <label htmlFor='price' className='block text-gray-600'>
//                                     Price
//                                 </label>
//                                 <input
//                                     className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
//                                     name='price'
//                                     id='price'
//                                     type='number'
//                                     placeholder='Price'
//                                     required
//                                 />
//                             </div>

//                             <div className='space-y-1 text-sm'>
//                                 <label htmlFor='guest' className='block text-gray-600'>
//                                     Total guest
//                                 </label>
//                                 <input
//                                     className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
//                                     name='total_guest'
//                                     id='guest'
//                                     type='number'
//                                     placeholder='Total guest'
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className='flex justify-between gap-2'>
//                             <div className='space-y-1 text-sm'>
//                                 <label htmlFor='bedrooms' className='block text-gray-600'>
//                                     Bedrooms
//                                 </label>
//                                 <input
//                                     className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
//                                     name='bedrooms'
//                                     id='bedrooms'
//                                     type='number'
//                                     placeholder='Bedrooms'
//                                     required
//                                 />
//                             </div>

//                             <div className='space-y-1 text-sm'>
//                                 <label htmlFor='bathrooms' className='block text-gray-600'>
//                                     Bathrooms
//                                 </label>
//                                 <input
//                                     className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
//                                     name='bathrooms'
//                                     id='bathrooms'
//                                     type='number'
//                                     placeholder='Bathrooms'
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className='space-y-1 text-sm'>
//                             <label htmlFor='description' className='block text-gray-600'>
//                                 Description
//                             </label>

//                             <textarea
//                                 id='description'
//                                 className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
//                                 name='description'
//                             ></textarea>
//                         </div>
//                     </div>
//                 </div>

//                 <button
//                     type='submit'
//                     className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
//                 >
//                     {loading ? (
//                         <TbFidgetSpinner className='m-auto animate-spin' size={24} />
//                     ) : (
//                         'Save & Continue'
//                     )}
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default AddRoomForm;







// import { useState } from 'react';
// import '../../App.css'

// const Home = () => {
//     const [err, setErr] = useState('')
//     const [inputArray, setInputArray] = useState([]);
//     const [inputFiles, setInputFiles] = useState('');

//     const upload = (event) => {
//         const files = new Array()

//         Array.from(event.target.files).forEach((piece) => {

//             files.push(piece.name)

//         })

//         setErr('')
//         setInputArray({ inputArray: files })
//         setInputFiles({ inputFiles: event.target.files })

//         console.log(inputArray)
//         console.log(inputFiles)
//         // if (files[0].type === "ttf") {

//         // }

//         // else {
//         //     setErr("Only ttf format allowed")
//         // }
//         uploadHandler()
//         console.log(inputArray)
//         console.log(inputFiles)

//         const file = event.target.files;
//         console.log(file[0])

//     }

//     function uploadHandler() {

//         const fd = new FormData();

//         if (inputFiles != null) {
//             for (var element of inputFiles.inputFiles) {
//                 console.log(element)
//                 fd.append('file', element)
//             }
//         }

//         // axios.post('/upload', fd)
//         //     .then(function (response) {
//         //         console.log(response);
//         //     })
//         //     .catch(function (error) {
//         //         console.log(error);
//         //     });
//     }

//     return (
//         <div>
//             <label>
//                 <input
//                     onChange={(e) => upload(e)}
//                     className='text-sm cursor-pointer w-52 '
//                     type='file'
//                     name='ttf'
//                     id='image'
//                     accept='ttf'
//                     hidden
//                 />
//                 <div className='w-3/4 h-52 mx-auto cursor-pointer flex justify-center items-center bg-slate-50 border-dashed border-slate-200 border-2 rounded-xl'>
//                     <p><span className='font-semibold'>Click to upload</span> or drag and drop <br /> Only TTF file allowed</p>
//                 </div>
//             </label>
//             <p className='text-red-500'> {err}</p>
//         </div>
//     );
// };

// export default Home;


  // try {
            //     const response = await fetch('http://localhost/font-uploader-server/', {
            //         method: 'POST',
            //         body: formData,
            //     });

            //     const responseText = await response.text();
            //     console.log(responseText); // Inspect the response content

            //     const responseData = JSON.parse(responseText);
            //     console.log(responseData); // Handle the server response if needed
            // } catch (error) {
            //     console.error('Error uploading fonts:', error);
            // }