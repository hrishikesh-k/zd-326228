import type { NextApiRequest, NextApiResponse } from 'next'

export default function(_: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({
    enable: true
  })
  res.end('Preview mode enabled')
}