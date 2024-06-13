# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR : Hot Module Replacement (Parcel uses File Watching Algorithm written in c++)
- Gives faster Build - using cache in .parcle-cache folder
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing :
- Code Splitting
- Differential Bundling : so app runs smoothly in older browser.
- Diagnostics
- Error Handling
- Gives a way to host app on :https
- Tree Shaking : if we have 100 functions but using 3/4 function so Parcel will remove unused code for you.
- script type="module", it creates nomodule fallback for old browsers.
- different dev and production bundles
- npx parcel build index.html : it creates entry point as index.html so remove index.js from package.json
