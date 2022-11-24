import ffi from 'ffi-napi';
import wchar_t from 'ref-wchar-napi';

const wchar_string = wchar_t.string;

const lib = ffi.Library('user32', {
  SystemParametersInfoW: ['int', ['uint', 'uint', wchar_string, 'uint']],
});

// https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-systemparametersinfow
const SPI_SETDESKWALLPAPER = 0x0014;

export function setWallpaper(pathString) {
  return lib.SystemParametersInfoW(
    SPI_SETDESKWALLPAPER,
    0,
    pathString,
    0
  );
}
