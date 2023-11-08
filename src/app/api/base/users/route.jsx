import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'

const file = await fs.readFile(process.cwd() + '/src/app/api/base/data.json', 'utf-8')

export async function GET(request, { params }) {
    const users = JSON.parse(file)
    return NextResponse.json(users.usuarios)
}

export async function POST(request, { params }) {
  const users = JSON.parse(file)
  const user = await request.json()

  try {
    for (let i = 0; i < users.usuarios.length; i++) {
      const userFile = users.usuarios[i]

      if (userFile.email == user.email && userFile.senha == user.senha) {
        return NextResponse.json({ "status": true })
      }
    }
  } catch (err) {
    console.log(err)
  }
  return NextResponse.json({ "status": false })
}




