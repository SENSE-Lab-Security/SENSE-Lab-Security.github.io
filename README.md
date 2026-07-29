# SENSE Lab Website

This is the cleaned static website for the Security Exploration of Novel Systems and Exploits (SENSE) Lab at HKUST(GZ).

The site is intentionally simple: it is a static HTML/CSS/JavaScript website that can be hosted directly with GitHub Pages. There is no build step required for normal editing.

## Project structure

```
SENSE-Lab-Website/
├── index.html              # Main page, layout, styling, and rendering logic
├── data/
│   ├── research.js         # Research direction cards
│   ├── people.js           # Current members, pawsdocs, and alumni
│   ├── publication.js      # Publications, links, venues, CCF labels, rates
│   ├── news.js             # Latest news entries
│   └── seminar.js          # HKUST(GZ) Security Seminar schedule
├── images/people/          # Profile photos used by people.js
└── files/                  # PDFs and BibTeX files used by publication.js
```

## How to preview locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```
http://localhost:8000
```

You can also open `index.html` directly in a browser, but using a small local server is closer to how GitHub Pages serves the site.

## How to edit content

Most content lives in the files under `data/`. After editing and saving a data file, refresh the browser.

### Research directions

Edit `data/research.js`.

Each research card has:

- `title`: card title
- `description`: short paragraph
- `subtopics`: bullet list shown inside the card

### People

Edit `data/people.js`.

The file contains:

- `directorData`: Dr. Yan Long's card
- `peopleGroups`: current members and pawsdocs
- `alumniData`: alumni cards

To reorder current members, move the whole person object within `peopleGroups`.

To move a person between filters, move their object between group `members` arrays.

Each current-member card uses:

- `firstName` / `lastName`, or optional `displayName`
- `role`
- `year`
- `institution`
- `researchInterest`
- `photo`
- optional `website`

Profile photos should be resized and saved as WebP files in `images/people/`, then referenced like:

```js
photo: 'images/people/your-photo-file.webp'
```

### Publications

Edit `data/publication.js`.

Each publication can include:

- `year`
- `type`: usually `Conference`, `Journal`, `Poster`, or `Preprint`
- `area`: research-area IDs used by the filter
- `title`
- `authors`
- `venue`
- optional `ccf`: for example `CCF-A`, `CCF-B`, `CCF-C`
- optional `acceptanceRate`: for example `Acceptance rate 20%`
- `links.pdf`: PDF path, usually under `files/`
- optional `extraLinks`: additional links displayed under the paper

For a local PDF, put the file in `files/` and reference it like:

```js
links: { pdf: 'files/your-paper-file.pdf' }
```

### News

Edit `data/news.js`.

Each news item has:

- `date`
- `title`
- `content`
- optional `url`

### Seminar

Edit `data/seminar.js`.

Each seminar row has:

- `date`
- `presenter`
- `topic`
- `venue`
- optional `url`

## How to change visual style

Most styling is inside the `<style>` block in `index.html`.

Useful variables are near the top of the file under `:root`, including:

- `--bg-main`: main dark background
- `--accent`: neon green accent
- `--cyan`: secondary cyan accent
- `--font-body`: body font
- `--font-display`: display/mono font

To adjust the large background text in the hero section, edit the `.hero-ghost` rule in `index.html`:

```css
font-size: clamp(1.15rem, 3vw, 2.2rem);
```

The three values are minimum size, responsive size, and maximum size.

## GitHub Pages hosting

A simple approach:

1. Create a new GitHub repository.
2. Upload all files in this folder.
3. In the repository settings, enable GitHub Pages.
4. Select the branch you want to publish, usually `main`, and the root folder `/`.

Because `index.html` is at the project root, GitHub Pages can serve it directly.

## Notes

This cleaned copy intentionally excludes unused profile images, framework scaffolding, build artifacts, and local development folders. Only the files needed for the current SENSE Lab website are included.
