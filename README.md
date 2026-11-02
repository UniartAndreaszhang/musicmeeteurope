# Music Meets Europe

Static showcase for the festival. There is no database and no build step. The page is `index.html`. Everything an editor usually needs to change — dates, cities, venues, pictures, the contact address, and the main sentences — is in one file:

**[`data/programme.js`](data/programme.js)**

The page reads that file and draws itself. GitHub’s web editor can change it: open the file, click the pencil, edit, and commit to `main`.

## How the site is published

Two places show this page. They are not the same thing.

| | What it is | Address |
| --- | --- | --- |
| GitHub Pages | This repository, published from the `main` branch, root folder | https://uniartandreaszhang.github.io/musicmeeteurope/ |
| Wix | The public site. It embeds the showcase. | https://www.musicmeetseurope.eu/ |

`index.html` used to be named `wix-embed-musicmeetseurope.html`. It still tells the parent frame how tall it is (`postMessage` with `type: "wix-iframe-height"`) so a Wix embed can grow with the content. Leave that script in place, and do not rename `index.html`.

**Best Wix setup:** Add → Embed → Embed a site, and use the GitHub Pages address above. After that, a commit on `main` updates both Pages and the Wix embed. Pages often takes a few minutes, and may cache the page for about 10 minutes.

**If the HTML was pasted into a Wix HTML box instead:** paste the new `index.html` once. The pasted page loads `data/programme.js` (and the pictures) from GitHub Pages when those files are not sitting next to it. Later edits to `data/programme.js` then show up without another paste.

The sentence on the Wix site that still says “nine editions” and “2–7 August 2026, Vienna to Belgrade” is the Wix business description. It is not stored in this repository. Update it in the Wix dashboard (business info / SEO description) so it matches 2027. This repository cannot change that field.

## Edit the programme (English)

1. Open [`data/programme.js`](data/programme.js).
2. Change the words inside the quotes.
3. Commit the change to the **`main`** branch. GitHub Pages publishes `main` only.
4. Wait a few minutes, then reload https://uniartandreaszhang.github.io/musicmeeteurope/ . Hard-refresh if the old text is still there (Pages caches for about 10 minutes).

What to edit:

- `year` — the big year, the page title, and the copyright line.
- `contactEmail` — every enquiry link and the address in the footer.
- `hero`, `about`, `tagline`, `bond`, `contact` — the sentences.
- `sessions` — one block per session. Each block has the label (`tag`), the lines of the title (`titleLines`), the date line (`dateLabel`), the cities in order, a short `description`, and `highlights` (the halls and dates you want listed).
- `events` — one card per hall or city. `when` may contain a line break. `description` is the short text under the place name. Set `image` to `""` when you have no photograph. If there is a photograph, keep the `credit` block (author, licence, and links). The page prints it under the card. Do not remove it, and do not add a hall name for Mürzzuschlag or Bratislava until one is confirmed.
- `map` and `poster` — the route picture and the programme poster.
- `venuePhotos` — extra hall photographs. An empty list hides that block.
- `nav` — the footer links.

Pictures already in the repository:

- `images/summer-route-2027.png` — summer route map
- `images/programme-poster-2027.jpg` — 2027 poster
- `images/halls/` — one freely licensed photograph for each confirmed hall, with the credit stored on that card
- `logo 1.mp4` — the film in the About section (`about.video`)

To use a new picture: upload the file into the repository (the `images/` folder is the simplest place), commit it, and set the path in `programme.js`, for example `"images/my-photo.jpg"`. Paths are from the site root, not from your computer.

The three About numbers are calculated. Sessions = how many session blocks there are. Cities = how many different city names appear. Year = `year`. The words next to those numbers are `about.stats` (`sessions`, `cities`, `year`).

The page is a light editorial layout. `"theme"` is ignored, so you do not set a card colour.

Italics: put the words between asterisks, as in `*Vienna*`. Do not type HTML tags; they are shown as text. A session may also have `image` and `imageAlt`; use a picture already credited on a hall card.

To add a session, copy one whole block from `{` through `}`, including the comma, and edit the copy. Two or three cities look best on a card.

Keep the quotes, commas, and brackets. A comma after the last item is allowed. Do not remove the line that assigns `MME_PROGRAMME`. If the page is blank after a commit, the file usually has a missing comma or quote: open the file history on GitHub and restore the previous version.

`vienna.jpg` and `murzz.jpg` are the 2026 concert posters (they still say February 2026). They are not used on the 2027 page. `Belgrade.jpg`, `logo.mp4`, and `logo mme.mp4` are also left over from that page. None of these are shown unless a path in `programme.js` points at them. For a 2027 hall photo, upload a new picture and set `image` on that event.

The showcase itself is in English, as it was. This README is the bilingual editing guide.

---

## 如何修改节目（中文）

这个仓库是音乐节的静态展示页，没有后台，也不需要打包。页面是 `index.html`。要改日期、城市、场馆、图片、联系邮箱和主要句子，只改这一个文件：

**[`data/programme.js`](data/programme.js)**

页面会读取它再显示。可以用 GitHub 网页编辑：打开该文件，点铅笔，改完后提交到 `main` 分支。

### 网站是怎么公开的

| | 是什么 | 地址 |
| --- | --- | --- |
| GitHub Pages | 本仓库，由 `main` 分支的根目录发布 | https://uniartandreaszhang.github.io/musicmeeteurope/ |
| Wix | 对外网站，里面嵌入了这个展示页 | https://www.musicmeetseurope.eu/ |

`index.html` 以前的文件名是 `wix-embed-musicmeetseurope.html`。它仍会把页面高度发给外层窗口（`postMessage`，`type` 为 `"wix-iframe-height"`），方便 Wix 把嵌入框拉到合适高度。请保留这段脚本，也不要重命名 `index.html`。

**建议的 Wix 做法：** 添加 → 嵌入 → 嵌入网站，填上面的 GitHub Pages 地址。之后只要提交到 `main`，Pages 和 Wix 里的展示会一起更新。Pages 通常要几分钟，并可能缓存大约 10 分钟。

**如果当初是把 HTML 粘进 Wix 的 HTML 组件：** 请把新的 `index.html` 重新粘贴一次。粘贴后的页面在旁边没有 `data/programme.js` 时，会改从 GitHub Pages 读取数据和图片。以后只改数据文件即可，不必每次重贴。

Wix 网站上那句「举办了九届」以及「2026 年 8 月 2 日至 7 日，从维也纳沿多瑙河到贝尔格莱德」写在 Wix 的业务简介里，不在本仓库。请到 Wix 后台的业务信息或 SEO 描述里改成 2027 年的安排。本仓库改不到那一项。

### 修改步骤

1. 打开 [`data/programme.js`](data/programme.js)。
2. 只改引号里面的文字。
3. 提交到 **`main`** 分支。GitHub Pages 只发布 `main`。
4. 等几分钟，刷新 https://uniartandreaszhang.github.io/musicmeeteurope/ 。若仍是旧内容，强制刷新（Pages 大约缓存 10 分钟）。

可以改的内容：

- `year`：大号年份、网页标题和页脚版权年份。
- `contactEmail`：所有咨询链接和页脚邮箱。
- `hero`、`about`、`tagline`、`bond`、`contact`：主要句子。
- `sessions`：每一场一个大括号。`tag` 是角标，`titleLines` 是标题的每一行，`dateLabel` 是日期，`cities` 是按顺序排列的城市，`description` 是短介绍，`highlights` 是要列出的场馆和日期。
- `events`：每个场馆或城市一张卡片。`when` 里可以换行。`description` 是地名下面的短介绍。没有照片时把 `image` 写成 `""`。有照片时请保留 `credit`（作者、许可和链接），页面会在卡片下显示这一行，不要删掉。米尔茨楚施拉格和布拉迪斯拉发在场馆确认之前，不要自行补上场馆名称。
- `map`、`poster`：路线图和节目海报。
- `venuePhotos`：额外的场馆照片。写成空列表 `[]` 就会隐藏这一块。
- `nav`：页脚链接。

仓库里已有的图片：

- `images/summer-route-2027.png` — 夏季路线图
- `images/programme-poster-2027.jpg` — 2027 海报
- `images/halls/` — 每个已确认场馆各一张可自由使用的照片，署名写在对应卡片的 `credit` 里
- `logo 1.mp4` — 「关于」一节里的影片（`about.video`）

换新图片：先把文件上传到仓库（放在 `images/` 最省事）并提交，再在 `programme.js` 里写路径，例如 `"images/my-photo.jpg"`。路径从网站根目录算起，不要写自己电脑上的文件夹。

「关于」里的三个数字是自动算的。场次数 = `sessions` 有几段。城市数 = 不重复的城市名有几个。年份 = `year`。数字旁边的文字在 `about.stats`（`sessions`、`cities`、`year`）。

页面是浅色的编辑式版式。`"theme"` 不起作用，不用设置卡片颜色。

斜体：把词语放在两个星号中间，例如 `*Vienna*`。不要写 HTML 标签，它们会按普通文字显示。一场也可以有 `image` 和 `imageAlt`；请用已经在场馆卡片上署过名的照片。

增加一场：复制一整段，从 `{` 到 `}`，连同逗号，再改内容。一张卡片放两到三个城市最合适。

请保留引号、逗号和括号。每一项最后面可以有逗号。不要删掉给 `MME_PROGRAMME` 赋值的那一行。如果提交后页面变空白，通常是少了逗号或引号：在 GitHub 上打开该文件的历史记录，恢复上一版即可。

`vienna.jpg` 和 `murzz.jpg` 是 2026 年的演出海报，上面仍写着 2026 年 2 月，所以 2027 页面没有使用它们。`Belgrade.jpg`、`logo.mp4`、`logo mme.mp4` 也是那一版留下的文件。只有在 `programme.js` 里写了路径才会显示。如果要给 2027 的场馆配照片，请上传新图片，再填到对应活动的 `image`。

展示页本身仍是英文，和原来一样。这份 README 是中英双语的修改说明。
