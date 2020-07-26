import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/monokai.css'
import typescript from 'highlight.js/lib/languages/typescript'
import bash from 'highlight.js/lib/languages/bash'
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('bash', bash)