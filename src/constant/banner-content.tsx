import * as React from "react";

export const BannerContent: (() => React.ReactNode)[] = [
  () =>
    "There is no sunrise so beautifull that is worth waking me up to see it.",
  () =>
    "People say money is not the key to happiness, but I have always figured if you have enough money, you can have a key made.",
  () =>
    "Sometimes you lie in bed at night and you don't have a single thing to worry about. That always worries me!",
];

export const BANNER_DELAY_MS = 5000;
