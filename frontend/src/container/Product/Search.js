// import React, { useState, Fragment } from "react";
// import MetaData from "../layout/MetaData";
// import "./Search.css";

// const Search = ({ history }) => {
//     const [keyword, setKeyword] = useState("");

//     const searchSubmitHandler = (e) => {
//         e.preventDefault();
//         if (keyword.trim()) {
//             history.push(`/singleProduct/${keyword}`);
//         } else {
//             history.push("/singleProduct");
//         }
//     };

//     return (
//         <Fragment>
//             <MetaData title="Search Product" />
//             <form className="searchBox" onSubmit={searchSubmitHandler}>
//                 <input
//                     type="text"
//                     placeholder="Search a Product ..."
//                     onChange={(e) => setKeyword(e.target.value)}
//                 />
//                 <input type="submit" value="Search" />
//             </form>
//         </Fragment>
//     );
// };

// export default Search;

// import React, { Fragment, useState } from 'react'
// import MetaData from "../layout/MetaData";
// import "./Search.css";

// const Search = ({ history }) => {
//     const [keyword, setKeyword] = useState("");
//     const searchSubmitHandler = (e) => {
//         e.preventDeafult();
//         if (keyword.trim()) {
//             history.push(`/singleProduct/${keyword}`);
//         } else {
//             history.push(`/singleProduct`)
//         }
//     }
//     return (
//         <Fragment>
//             <MetaData title="Search Product" />
//             <form className='searchBox' onSubmit={searchSubmitHandler}>
//                 <input
//                     type="text"
//                     placeholder='Search a Product....'
//                     ocChange={(e) => setKeyword(e.target.value)}
//                 />
//                 <input type="submit" value="search" />

//             </form>
//         </Fragment>
//     )
// }

// export default Search;