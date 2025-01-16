import DOMPurify from 'dompurify'

export const sanitize = (html: string) => {
  return {
    __html: DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['p', 'b', 'i', 'em', 'strong', 'a', 'img', 'svg'],
      ALLOWED_ATTR: ['href', 'target', 'src', 'alt', 'width', 'height']
    })
  }
}
