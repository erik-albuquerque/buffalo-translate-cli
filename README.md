<h1 align="center" id="project_name"> 
  🐃  
</h1>

## Buffalo Translate CLI

Translate words via terminal.

- usage

```bash
buffalo translate, -t <language>["EN", -en] <context>, 'translate word.'

buffalo detect, -d <context>, 'detect language.'

buffalo [-v, --version, version], 'output the version number.'

buffalo [-h, --help], 'show all commands.'

# Example:

buffalo translate "pt" "example"
# output
🐃 {
  resource: { source: 'EN', target: 'PT', contexts 'example' },
    content: 'exemplo'
  }

buffalo detect "example"
# output
🐃 en

```

> fuck google cloud
