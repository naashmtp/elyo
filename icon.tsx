import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const logoPath = join(process.cwd(), 'public', 'logo.png')
  const logoBuffer = await readFile(logoPath)
  const logoBase64 = logoBuffer.toString('base64')

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={`data:image/png;base64,${logoBase64}`}
          width="28"
          height="28"
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
