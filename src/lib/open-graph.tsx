// type OpenGraphType = {
//   siteName: string;
//   description: string;
//   templateTitle?: string;
//   logo?: string;
//   banner?: string;
//   isBanner?: boolean;
// };
// export function openGraph({
//   siteName,
//   templateTitle,
//   description,
//   logo = "https://nathanaelbudijono.vercel.app/logo.png",
//   banner,
//   isBanner = false,
// }: OpenGraphType): string {
//   const ogLogo = encodeURIComponent(logo);
//   const ogSiteName = encodeURIComponent(siteName.trim());
//   const ogTemplateTitle = templateTitle
//     ? encodeURIComponent(templateTitle.trim())
//     : undefined;
//   const ogDesc = encodeURIComponent(description.trim());

//   if (isBanner) {
//     const ogBanner = banner ? encodeURIComponent(banner.trim()) : undefined;

//     return `https://nathanaelbudijono.vercel.app/api/project?templateTitle=${ogTemplateTitle}&banner=${ogBanner}`;
//   }

//   return `https://nathanaelbudijono.vercel.app/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}&theme=light${
//     ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""
//   }`;
// }

// export function getFromLocalStorage(key: string): string | null {
//   if (typeof window !== "undefined") {
//     return window.localStorage.getItem(key);
//   }
//   return null;
// }

// export function getFromSessionStorage(key: string): string | null {
//   if (typeof sessionStorage !== "undefined") {
//     return sessionStorage.getItem(key);
//   }
//   return null;
// }
