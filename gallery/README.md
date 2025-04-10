Here is how this beast works:

This branch is a Vite + React project and It serves as a repository, or gallery I suppose, for the other branches.

Via github actions, on push:    (of any branch that is not main, gh-pages, or base) 
- any branch without a .exterior file has its contents copied to a folder in gh-pages

and, on the main branch:
- the branch's thumbnail.png file gets sent to `/public/thumbnails`
- the branch's .data file gest sent to `data-files/`
- generateJSON\.sh makes all the files in `data-files/` into a data.json file which is placed in `/src/assets`

# why?
I was tired of countless repositories for these challenges on my profile.
Obviously, the only thing I could've done is create the biggest crime against version control.
