# relaxed-hyphenopoly

ReLaXed relies on Google Chromium, which does not support auto-hyphenation.
This may arrive soon, but in the mean-time This plugin can be used to
auto-hyphen the text in your PDF document.

## Usage

Install with ``npm install -g relaxed-hyphenopoly``

And add the plugin in your ``config.yaml`` file:

```yaml
plugins:
  - hyphenopoly
    tags: td
```

Notes:

- This plugin is absolutely experimental and code contributions are welcome.
- Only English is supported right now but it shouldn't be difficult to make the language an option.
- Using hyphenopoly will make the text appear normally on your PDF, but copy-pasting
  will give you space-cut words. It is also possible that the PDF will not
  be search-engine-friendly.