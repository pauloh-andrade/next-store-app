import { promises as fs } from 'fs'

export async function GET(request, { params }) {
  const file = await fs.readFile(process.cwd() + '/src/app/api/base/users/data.json', 'utf-8')
  return NextResponse.json(JSON.parse(file))
}
