import getFileURI from "./getFileURI";

export default async function getAsset(file: string): Promise<string> {
  if (file.startsWith("http") || file.startsWith("https")) {
    return await toDataUrl(file);
  }

  if (file.startsWith("data:")) {
    return file;
  }

  return await getFileURI(file);
}

function toDataUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        resolve(reader.result as string);
      };
      reader.onerror = function() {
        reject(new Error('Failed to read file as data URL'));
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = function() {
      reject(new Error('Failed to fetch URL'));
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
}
