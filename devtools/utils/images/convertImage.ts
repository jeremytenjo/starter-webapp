import sharp from 'sharp'

export type Props = {
  filePath: string
  outputPath: string
  format: string
  width?: number
  height?: number
}
export default async function convertImage({
  filePath,
  outputPath,
  format,
  width,
  height,
}: Props) {
  await sharp(filePath).resize({ width, height }).toFormat(format).toFile(outputPath)
}
