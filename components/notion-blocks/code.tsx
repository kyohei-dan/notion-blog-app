'use client'
import React, { useState } from 'react';
import Prism from 'prismjs'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-diff'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-elixir'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-hcl'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-yaml'

import Mermaid from './mermaid'
import { RichText } from '../../lib/notion/interfaces'

const Code = ({ block }) => {
  const [state, setState] = useState(false)
  const code = block.Code.RichTexts.map((richText: RichText) => richText.Text.Content).join('')
  const language = block.Code.Language.toLowerCase()
  const grammer = Prism.languages[language.toLowerCase()] || Prism.languages.javascript

  const handleClick = (ev) => {
    navigator.clipboard
      .writeText(ev.target.getAttribute('data-code'))
      .then(() => {
        setState(true)
      })
  }

  return (
    <div className="c-code-blocks">
      {language === 'mermaid' ? (
        <Mermaid id={`mermaid-${block.Id}`} definition={code} />
      ) : (
        <div>
          <div>
            <button data-code={code} onClick={handleClick}>{state ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre>
            <code
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(code, grammer, language),
              }}
            />
          </pre>
        </div>
      )}
      {block.Code.Caption.length > 0 && block.Code.Caption[0].Text.Content ? (
        <div>
          {block.Code.Caption[0].Text.Content}
        </div>
      ) : null}
    </div>
  )
}

export default Code
