import localFont from "next/font/local";

export const TStarPro = localFont({
  src: [
    {
      path: "../../public/fonts/TStarProHeavy.woff",
      weight: "200",
      style: "light",
    },
    {
      path: "../../public/fonts/TStarProLight.woff",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/TStarProRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TStarProMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TStarProBold.woff",
      weight: "600",
      style: "bold",
    },
  ],
});

export const Trebuchet = localFont({
  src: [
    {
      path: "../../public/fonts/trebuc.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
