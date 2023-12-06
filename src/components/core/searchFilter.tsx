// import * as React from "react";

// export default function SearchFilter({
//   populatedPosts,
//   selected,
//   setFiltered,
// }: {
//   populatedPosts: PopulatedShorts[];
//   selected: string;
//   setFiltered: React.Dispatch<React.SetStateAction<PopulatedShorts[]>>;
// }) {
//   const [value, setValue] = React.useState("");

//   React.useEffect(() => {
//     const filterTimeout = setTimeout(() => {
//       setFiltered(() => {
//         let filtered = populatedPosts.filter(
//           (post) =>
//             post.title.toLowerCase().includes(value.toLowerCase()) ||
//             post.excerpt.toLowerCase().includes(value.toLowerCase()) ||
//             post.date.toLowerCase().includes(value.toLowerCase()) ||
//             post.tags.filter((tag) => tag.includes(value.toLowerCase()))
//               .length > 0
//         );
//         filtered =
//           selected === "Sort by date"
//             ? filtered.sort((a, z) => {
//                 if (typeof a.id === "number" && typeof z.id === "number") {
//                   return +z.id - a.id;
//                 } else {
//                   return 0;
//                 }
//               })
//             : selected === "Sort by popularity"
//             ? filtered.sort((a, z) => {
//                 if (
//                   typeof a.views === "number" &&
//                   typeof z.views === "number"
//                 ) {
//                   return +z.views - a.views;
//                 } else {
//                   return 0;
//                 }
//               })
//             : filtered.sort((a, z) => a.title.localeCompare(z.title));
//         return filtered;
//       });
//     }, 100);

//     return () => clearTimeout(filterTimeout);
//   }, [populatedPosts, setFiltered, value, selected]);

//   return (
//     <div className="mb-2">
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Type a keyword."
//         className={clsx(
//           "pl-3 py-1.5 rounded-md w-full shadown-sm text-sm",
//           "transition-colors duration-200 bg-transparent",
//           "border border-primary-400 text-typography-100",
//           "active:text-typography-100",
//           "dark:border-tertiary-300 dark:text-typography-800 dark:active:border-quaternary-500"
//         )}
//       />
//     </div>
//   );
// }
