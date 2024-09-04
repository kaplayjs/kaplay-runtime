import { join } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import dir from './getDir';
import { path } from '@tauri-apps/api';
import isTauri from './isTauri';

export default async function getFileURI(file: string): Promise<string> {
  if (isTauri()) {
    const filePath = await join(await dir() as string, path.sep, file);
    const assetUrl = convertFileSrc(filePath);
    return toDataUrl(assetUrl)
  }

  return await toDataUrl(file)
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
