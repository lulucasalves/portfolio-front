import { useIntl } from 'react-intl'

interface ITrans {
  text: string
}

export function Trans({ text }: ITrans): any {
  const { formatMessage } = useIntl()

  return formatMessage({ id: text || '' })
}
