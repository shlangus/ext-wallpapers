# ext-wallpapers

It is a CLI tool that gets your daily horoscope from [aztro API](https://aztro.sameerkumar.website/) uses it to generate an image using [Dall-e 2](https://openai.com/dall-e-2/) and sets it as a wallpaper.

## Usage
Most likely you need to have administrative privileges,

Run `npx ext-wallpapers config` and follow instructions.

After configuration is complete run `npx ext-wallpapers run`.

The tool keeps configuration and generated images in `%LOCALAPPDATA%/ext-wallpapers` folder and a key for Dall-e 2 in Credential Vault/Keychain. If you want to clean all of this run `npx ext-wallpapers clean`.
