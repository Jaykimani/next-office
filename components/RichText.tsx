import { RichText } from '@payloadcms/richtext-lexical/react'

export function RichTextRenderer({ content }: { content: any }) {
  if (!content) return null

  return (
    <div>
      <RichText data={content} />
    </div>
  )
}