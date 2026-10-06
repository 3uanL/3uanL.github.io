---
title: Example post — copy me
date: 2026-10-06
description: "A template showing every supported field. It keeps draft true, so it stays invisible."
tags: [template]
draft: true
---

This file is a **template**. It has `draft: true` in the front matter, so it never appears on the
site. To publish a real post:

1. Copy this file to a new name, e.g. `my-first-post.md`.
2. Change `title`, `date`, `description`, `tags`.
3. Write the body below the second `---`.
4. Either delete the `draft: true` line or set it to `false`.

## What the fields mean

| Field         | Meaning                                                              |
| ------------- | -------------------------------------------------------------------- |
| `title`       | Post title (shown in the list and as the page heading)                |
| `date`        | Publication date, `YYYY-MM-DD`                                        |
| `description` | One-sentence summary, used in the list and in search results          |
| `tags`        | A list, e.g. `[optimization, UAV]`                                    |
| `draft`       | `true` = hidden from the site, `false` or removed = published         |

## Formatting cheatsheet

Normal text, **bold**, _italic_, `inline code`, [a link](https://example.com).

Math works the same way as in a paper draft — write it inline as $h(t)=\sqrt{d^2+z^2}$ or as a
displayed equation:

$$
\min_{\mathbf{q}(t)} \ \frac{1}{T}\sum_{t=1}^{T} \mathrm{VoI}(t)
\quad \text{s.t.} \quad \|\dot{\mathbf{q}}(t)\| \le v_{\max}
$$

Lists:

- first point
- second point

> A blockquote, useful for stating the question a post is trying to answer.

A code block:

```python
import numpy as np

q = np.zeros((T, 3))  # UAV trajectory
```

An image goes in `public/images/` and is referenced with a leading slash:

```md
![Trajectory comparison](/images/trajectory.png)
```

That is everything you need. Delete this file once you have written your own first post.
