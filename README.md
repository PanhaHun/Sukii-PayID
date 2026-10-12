# Hey_Sukii - PayID payment page

A fast, simple payment page for **Hey_Sukii** (3D printing and electronics). Customers can copy the PayID mobile number or email with one tap and paste it into their banking app.

Plain HTML, CSS and JavaScript. No build step, no frameworks, no tracking.

## Project structure

```
hey-sukii-website/
├── index.html            Main page (text and PayID details)
├── 404.html              "Page not found" page
├── robots.txt
└── assets/
    ├── css/style.css     All colours, fonts and sizes (edit the :root block)
    ├── js/main.js        Copy-button behaviour
    ├── images/           Logo, PayID logo, background photo, favicon
    └── fonts/            Self-hosted fonts (Pacifico, Outfit, DM Sans)
```

## Publish on GitHub Pages (free)

1. Create a free account at [github.com](https://github.com) and click **New repository**.
2. Name it (for example `heysukii`), set it to **Public**, and create it.
3. Click **Add file → Upload files**. Unzip the project first, then drag in **everything inside** the `hey-sukii-website` folder (so `index.html` is at the top level, not inside another folder). Click **Commit changes**.
4. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then **Save**.
5. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

To use your own domain (for example `heysukii.com`), add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## Editing

| What | Where |
| --- | --- |
| PayID numbers, email, name | `index.html` (change the visible text **and** the `data-copy` value on the button) |
| Colours, fonts, sizes, logo size | `:root` block at the top of `assets/css/style.css` |
| Background photo | replace `assets/images/stall.jpg` (keep the file name) |
| Logo | replace `assets/images/logo-white.svg` |
| Copy-button behaviour | `assets/js/main.js` |

Preview locally by double-clicking `index.html`. After editing, upload the changed files to GitHub again and the site updates automatically.

## After the site is live

- Open the new link on your phone and test both **Copy** buttons.
- Update the QR code on any printed poster so it points to the new address.

## Notes

- The PayID logo is a trademark of NPP Australia Limited. For a sharper version, use the official logo from [payid.com.au](https://payid.com.au).
- Fonts are stored in `assets/fonts`, so the page works without loading anything from Google.
