<h1 align="center" id="project_name"> 
  🐃  
</h1>

## Buffalo Translate CLI

Translate words via terminal.

- usage

```bash
buffalo translate, -t <language>["EN", -en] <context> # translate word.

buffalo detect, -d <context> # detect language.

buffalo [-v, --version, version] #output the version number.

buffalo [-h, --help, help] #show all commands.

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

> Note: You have to sign in to the `Google Cloud Platform`(gCloud)

```bash
  # example
  gcloud auth application-default login --client-id-file=clientid.json
  # or
  gcloud auth application-default login
```

> .env.example: GOOGLE_CLOUD_PROJECT_ID=`<projectId>`
