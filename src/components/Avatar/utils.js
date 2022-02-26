export function backgroundColorWithOpacity(hexcolor, opacityHexValue = "80") {
  const backgroundHexColorWithOpacity = `${hexcolor}${opacityHexValue}`;
  return backgroundHexColorWithOpacity;
}
