# 🐃

# ****Buffalo Translate CLI****

The Buffalo Translate CLI offers the ability to perform translations directly in the terminal, providing an efficient way to translate text from one language to another.

## **Basic Usage**

The Buffalo Translate CLI supports two main operations: translation and language detection. To use it, you can follow the following format:

```bash
buffalo translate <target_language> <query>
# OR
buff t <target_language> <query>

# <query>: Text to translate.
# <target_language>: Target language.
# -tl, --target-language <target_language>

buffalo detect <query>
# OR
buff d <query>
'
# <query>: Text to detect.

```

### **Available Options**

- `t` or **`translate`**: Option for performing translation.
- `d` ou **`detect`**: Option to automatically detect the language of the source text.

### **Supported Languages**

You can specify the target language using the t or translate option. Supported languages include, but are not limited to:

- **English** (`en`)
- **Portuguese** (`pt`)
- **Spanish** (`es`)
- And many more...

### **Usage Examples**

Here are some usage examples of the Buffalo Translate CLI:

### Translate Text

To translate text from one language to another, use the **`t`** or **`translate`** option, followed by the target language and the text to be translated. For example:

```bash
buffalo translate -tl 'en' 'teste de tradução'
# OR
buff t -tl 'en' 'teste de tradução'
```

This will translate the text "teste de tradução" from the source language to the desired language, resulting in:

```bash
🐃 translation: 'translate test'
```

### Detect the Language of Text

To automatically detect the language of the source text, use the **`d`** or **`detect`** option, followed by the text to be analyzed. For example:

```bash
buffalo detect 'Bonjour le monde'
# OR
buff d 'Bonjour le monde'
```

This will detect the language of the text "Bonjour le monde" and display the result as:
```bash
🐃 Detected language is: 'French'
```