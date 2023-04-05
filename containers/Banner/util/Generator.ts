const Images: string[] = [
  "/co.avif",
  "/co7.avif",
  "/co8.avif",
  "/co4.jpg",
  "/co6.avif",
];

export const Generator = (): string => {
  const { random, floor } = Math;
  const index = floor(random() * Images.length);
  return Images[index];
};
