interface IParams {
  [key: string]: string;
}

export function formattedUrlParams(params: IParams) {
  const keyValuePairs = Object.entries(params).map(
    (param) => encodeURIComponent(param[0]) + "=" + encodeURIComponent(param[1])
  );

  return keyValuePairs.join("&");
}
