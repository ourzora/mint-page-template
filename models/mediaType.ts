type MimeType = string

// text
const HTML = 'text/html'
const MARKDOWN = 'text/markdown'
const MARKDOWN_UTF8 = 'text/markdown; charset=utf-8'
const TEXT_PLAIN_UTF8 = 'text/plain; charset=utf-8'
const TEXT_PLAIN = 'text/plain'
const CSV = 'text/csv'

// image
const JPG = 'image/jpg'
const JPEG = 'image/jpeg'
const PNG = 'image/png'
const WEBP = 'image/webp'
const SVG = 'image/svg+xml'
const TIFF = 'image/tiff'
const GIF = 'image/gif'

// video
const MP4 = 'video/mp4'
const QUICKTIME = 'video/quicktime'

// audio
const MPEG = 'audio/mpeg'
const MP3 = 'audio/mp3'
const WAV = 'audio/wav'
const VND_WAV = 'audio/vnd.wav'
const VND_WAVE = 'audio/vnd.wave'
const WAVE = 'audio/wave'
const X_WAV = 'audio/x-wav'
const AIFF = 'audio/aiff'

// application
const JSON = 'application/json'

export enum MediaType {
  CSV = 'CSV',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  TIFF = 'TIFF',
  TEXT = 'TEXT',
  HTML = 'HTML',
  UNKNOWN = 'UNKNOWN',
}

export const mimeToMediaType: {
  [key: MimeType]: MediaType
} = {
  [HTML]: MediaType.HTML,
  [JPG]: MediaType.IMAGE,
  [JPEG]: MediaType.IMAGE,
  [PNG]: MediaType.IMAGE,
  [WEBP]: MediaType.IMAGE,
  [SVG]: MediaType.IMAGE,
  [TIFF]: MediaType.TIFF,
  [GIF]: MediaType.IMAGE,
  [MP4]: MediaType.VIDEO,
  [QUICKTIME]: MediaType.VIDEO,
  [MPEG]: MediaType.AUDIO,
  [MP3]: MediaType.AUDIO,
  [VND_WAV]: MediaType.AUDIO,
  [VND_WAVE]: MediaType.AUDIO,
  [WAV]: MediaType.AUDIO,
  [WAVE]: MediaType.AUDIO,
  [X_WAV]: MediaType.AUDIO,
  [AIFF]: MediaType.AUDIO,
  [TEXT_PLAIN]: MediaType.TEXT,
  [TEXT_PLAIN_UTF8]: MediaType.TEXT,
  [MARKDOWN]: MediaType.TEXT,
  [MARKDOWN_UTF8]: MediaType.TEXT,
  [JSON]: MediaType.TEXT,
  [CSV]: MediaType.CSV,
}

export function mimesByMedia(media: MediaType | MediaType[]): MimeType[] {
  const mediaArray = Array.isArray(media) ? media : [media]

  return Object.entries(mimeToMediaType)
    .filter(([_mimeType, mediaType]) => mediaArray.includes(mediaType))
    .map(([mimeType]) => mimeType)
}

// Common mime type groups
export const ACCEPTED_IMAGE_CONTENT_TYPES = [JPG, JPEG, PNG, SVG, GIF].join(', ')

const FILES = mimesByMedia([MediaType.AUDIO, MediaType.VIDEO]).join(', ')
export const ACCEPTED_FILE_CONTENT_TYPES = `${ACCEPTED_IMAGE_CONTENT_TYPES}, ${FILES}`
