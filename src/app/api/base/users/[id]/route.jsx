import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'

const file = await fs.readFile(process.cwd() + '/src/app/api/base/data.json', 'utf-8')

export async function GET(request, { params }) {
  const id = params.id
  const users = JSON.parse(file)
  
  if (id > 0 && id <= users.usuarios.length) {
    return NextResponse.json(users.usuarios.find(user => user.id == id ))
  } else {
    return id == 0 ? NextResponse.json(users.usuarios) : NextResponse.redirect("http://localhost:3000/error")
  }
}
